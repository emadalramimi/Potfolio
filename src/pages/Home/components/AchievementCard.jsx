import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import { FaRocket } from 'react-icons/fa';

const StyledWrapper = styled.div`
  .terminal {
    background: var(--card-bg);
    border-radius: 12px;
    box-shadow: ${props => props.theme.mode === 'dark'
      ? '0 15px 35px rgba(0, 0, 0, 0.4)'
      : '0 8px 24px rgba(0, 0, 0, 0.1)'};
    overflow: hidden;
    font-family: 'JetBrains Mono', monospace;
    min-height: 450px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid ${props => props.theme.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)'};

    &:hover {
      transform: translateY(-5px) scale(1.01);
      box-shadow: ${props => props.theme.mode === 'dark'
        ? '0 20px 45px rgba(0, 0, 0, 0.5)'
        : '0 12px 30px rgba(0, 0, 0, 0.15)'};
      border-color: ${props => props.theme.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.15)'
        : 'rgba(0, 0, 0, 0.15)'};
    }
  }

  .terminal-header {
    background: ${props => props.theme.mode === 'dark'
      ? '#1A1A1A'
      : '#F1F3F5'};
    padding: 15px 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)'};
  }

  .terminal-title {
    color: ${props => props.theme.mode === 'dark' ? '#858585' : '#6C757D'};
    font-size: 0.9rem;
    flex-grow: 1;
    text-shadow: ${props => props.theme.mode === 'dark'
      ? '0 1px 2px rgba(0, 0, 0, 0.3)'
      : 'none'};
  }

  .terminal-body {
    padding: 40px;
    color: ${props => props.theme.mode === 'dark' ? '#fff' : '#212529'};
    font-size: 1rem;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 350px;
    background: ${props => props.theme.mode === 'dark'
      ? 'linear-gradient(180deg, #1E1E1E 0%, #121212 100%)'
      : '#FFFFFF'};
  }

  .title-line {
    margin-bottom: 25px;
    display: flex;
    align-items: center;

    .prompt {
      color: ${props => props.theme.mode === 'dark' ? '#C678DD' : '#9C27B0'};
      margin-right: 12px;
      opacity: 0.9;
    }

    .title {
      color: ${props => props.theme.mode === 'dark' ? '#E5C07B' : '#F59F00'};
      font-weight: bold;
      font-size: 1.5rem;
      text-shadow: ${props => props.theme.mode === 'dark'
        ? '0 2px 4px rgba(0, 0, 0, 0.3)'
        : 'none'};
      letter-spacing: -0.5px;
    }
  }

  .description-line {
    margin-bottom: 30px;
    color: ${props => props.theme.mode === 'dark' ? '#ABB2BF' : '#495057'};
    padding-left: 25px;
    border-left: 2px solid ${props => props.theme.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)'};
    font-size: 1.1rem;
    line-height: 1.7;
  }

  .highlight-line {
    margin-bottom: 35px;
    display: flex;
    align-items: center;

    .prompt {
      color: ${props => props.theme.mode === 'dark' ? '#E06C75' : '#E03131'};
      margin-right: 12px;
      opacity: 0.9;
    }

    .highlight {
      color: ${props => props.theme.mode === 'dark' ? '#56B6C2' : '#0CA678'};
      background: ${props => props.theme.mode === 'dark'
        ? 'rgba(86, 182, 194, 0.1)'
        : 'rgba(12, 166, 120, 0.08)'};
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 0.95rem;
      border: 1px solid ${props => props.theme.mode === 'dark'
        ? 'rgba(86, 182, 194, 0.2)'
        : 'rgba(12, 166, 120, 0.2)'};
      box-shadow: ${props => props.theme.mode === 'dark'
        ? '0 2px 5px rgba(0, 0, 0, 0.2)'
        : '0 2px 5px rgba(0, 0, 0, 0.05)'};
      transition: all 0.3s ease;

      &:hover {
        background: ${props => props.theme.mode === 'dark'
          ? 'rgba(86, 182, 194, 0.15)'
          : 'rgba(12, 166, 120, 0.12)'};
        border-color: ${props => props.theme.mode === 'dark'
          ? 'rgba(86, 182, 194, 0.3)'
          : 'rgba(12, 166, 120, 0.3)'};
      }
    }
  }

  .explore-line {
    margin-top: auto;
    padding-top: 25px;
    border-top: 1px solid ${props => props.theme.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)'};
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
      background: ${props => props.theme.mode === 'dark'
        ? 'linear-gradient(135deg, #61AFEF 0%, #56B6C2 100%)'
        : 'linear-gradient(135deg, #339AF0 0%, #0CA678 100%)'};
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: ${props => props.theme.mode === 'dark'
        ? '0 4px 15px rgba(97, 175, 239, 0.3)'
        : '0 4px 15px rgba(51, 154, 240, 0.2)'};
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${props => props.theme.mode === 'dark'
          ? '0 6px 20px rgba(97, 175, 239, 0.4)'
          : '0 6px 20px rgba(51, 154, 240, 0.3)'};
        background: ${props => props.theme.mode === 'dark'
          ? 'linear-gradient(135deg, #74BEFF 0%, #65C5D1 100%)'
          : 'linear-gradient(135deg, #4DABF7 0%, #12B886 100%)'};
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
    background: ${props => props.theme.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)'};
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: var(--progress);
      background: ${props => props.theme.mode === 'dark'
        ? 'linear-gradient(90deg, #61AFEF, #56B6C2)'
        : 'linear-gradient(90deg, #339AF0, #0CA678)'};
      transition: width 0.5s ease;
    }
  }
`;

const AchievementCard = ({ achievement, totalAchievements, currentIndex, theme }) => {
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
    <StyledWrapper theme={theme} currentIndex={currentIndex} totalAchievements={totalAchievements}>
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
