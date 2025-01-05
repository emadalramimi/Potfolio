import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import { FaRocket } from 'react-icons/fa';

const StyledWrapper = styled.div`
  .terminal {
    background: linear-gradient(180deg, #1E1E1E 0%, #2D2D2D 100%);
    border-radius: 12px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    font-family: 'JetBrains Mono', monospace;
    min-height: 450px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: translateY(-5px) scale(1.01);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5);
      border-color: rgba(255, 255, 255, 0.15);
    }
  }

  .terminal-header {
    background: linear-gradient(90deg, #2D2D2D 0%, #353535 100%);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .terminal-buttons {
    display: flex;
    gap: 8px;
    margin-right: 15px;

    span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover::after {
        opacity: 1;
      }
    }

    .close { background: linear-gradient(45deg, #FF5F56, #FF4242); }
    .minimize { background: linear-gradient(45deg, #FFBD2E, #FFB000); }
    .maximize { background: linear-gradient(45deg, #27C93F, #1AAB29); }
  }

  .terminal-title {
    color: #858585;
    font-size: 0.9rem;
    flex-grow: 1;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .terminal-controls {
    display: flex;
    gap: 10px;
    color: #858585;
    font-size: 0.8rem;
    background: rgba(0, 0, 0, 0.2);
    padding: 4px 10px;
    border-radius: 4px;
  }

  .terminal-body {
    padding: 40px;
    color: #fff;
    font-size: 1rem;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 350px;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
  }

  .title-line {
    margin-bottom: 25px;
    display: flex;
    align-items: center;

    .prompt {
      color: #C678DD;
      margin-right: 12px;
      opacity: 0.9;
    }

    .title {
      color: #E5C07B;
      font-weight: bold;
      font-size: 1.5rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      letter-spacing: -0.5px;
    }
  }

  .description-line {
    margin-bottom: 30px;
    color: #ABB2BF;
    padding-left: 25px;
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    font-size: 1.1rem;
    line-height: 1.7;

    .description {
      display: inline-block;
    }
  }

  .highlight-line {
    margin-bottom: 35px;
    display: flex;
    align-items: center;

    .prompt {
      color: #E06C75;
      margin-right: 12px;
      opacity: 0.9;
    }

    .highlight {
      color: #56B6C2;
      background: rgba(86, 182, 194, 0.1);
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 0.95rem;
      border: 1px solid rgba(86, 182, 194, 0.2);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(86, 182, 194, 0.15);
        border-color: rgba(86, 182, 194, 0.3);
      }
    }
  }

  .explore-line {
    margin-top: auto;
    padding-top: 25px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
      color: #fff;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-size: 1rem;
      font-weight: 500;
      padding: 12px 24px;
      border-radius: 8px;
      background: linear-gradient(135deg, #61AFEF 0%, #56B6C2 100%);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 15px rgba(97, 175, 239, 0.3);
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(97, 175, 239, 0.4);
        background: linear-gradient(135deg, #74BEFF 0%, #65C5D1 100%);
      }

      svg {
        font-size: 1.1rem;
        transition: transform 0.3s ease;
      }

      &:hover svg {
        transform: translateX(4px) translateY(-2px);
      }
    }
  }

  .progress-bar {
    margin-top: 30px;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: linear-gradient(90deg, #61AFEF 0%, #56B6C2 100%);
      animation: progress 5s linear infinite;
      width: ${props => (props.currentIndex + 1) * (100 / props.totalAchievements)}%;
      transition: width 0.3s ease;
      box-shadow: 0 0 10px rgba(97, 175, 239, 0.5);
    }
  }

  @keyframes progress {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }

  .typed-cursor {
    color: #61AFEF;
    text-shadow: 0 0 8px rgba(97, 175, 239, 0.5);
  }
`;

const AchievementCard = ({ achievement, totalAchievements, currentIndex }) => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const titleTypedRef = useRef(null);
  const descTypedRef = useRef(null);

  useEffect(() => {
    titleTypedRef.current = new Typed(titleRef.current, {
      strings: [achievement.title],
      typeSpeed: 30,
      showCursor: false,
      startDelay: 100,
    });

    descTypedRef.current = new Typed(descRef.current, {
      strings: [achievement.description],
      typeSpeed: 20,
      showCursor: true,
      startDelay: 300,
      cursorChar: '▋',
    });

    // Wait for both to finish typing, then keep visible for 2.5s
    const maxTypingTime = Math.max(
      achievement.title.length * 30 + 200,  // title typing time + delay
      achievement.description.length * 20 + 400  // description typing time + delay
    );

    const timer = setTimeout(() => {
      titleTypedRef.current?.destroy();
      descTypedRef.current?.destroy();
    }, maxTypingTime + 2500); // Add 2.5s after typing completes

    return () => {
      clearTimeout(timer);
      titleTypedRef.current?.destroy();
      descTypedRef.current?.destroy();
    };
  }, [achievement]);

  return (
    <StyledWrapper currentIndex={currentIndex} totalAchievements={totalAchievements}>
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="close"></span>
            <span className="minimize"></span>
            <span className="maximize"></span>
          </div>
          <div className="terminal-title">achievements.exe</div>
          <div className="terminal-controls">
            <span>{`${currentIndex + 1}/${totalAchievements}`}</span>
          </div>
        </div>
        <div className="terminal-body">
          <div className="title-line">
            <span className="prompt">&gt;</span>
            <span ref={titleRef} className="title"></span>
          </div>
          <div className="description-line">
            <span ref={descRef} className="description"></span>
          </div>
          <div className="highlight-line">
            <span className="prompt">#</span>
            <span className="highlight">{achievement.highlight}</span>
          </div>
          <div className="explore-line">
            <Link to="/achievements">
              Explore All Achievements <FaRocket />
            </Link>
          </div>
          <div className="progress-bar"></div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default AchievementCard;
