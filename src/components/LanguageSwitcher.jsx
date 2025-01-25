import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

const LanguageSelect = styled.div`
  position: relative;
  display: inline-block;
`;

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.9rem;
  color: inherit;
  transition: all 0.2s ease;

  .lang-flag {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    object-fit: cover;
  }

  .chevron {
    transition: transform 0.2s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  min-width: 160px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.2s ease;
  z-index: 1000;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const LanguageOption = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  color: inherit;
  text-align: left;

  .lang-flag {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    object-fit: cover;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  [data-theme='dark'] & {
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '/flags/en.png'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '/flags/fr.png'
  }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageSelect ref={dropdownRef}>
      <LanguageButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        <img 
          src={currentLanguage.flag} 
          alt={currentLanguage.name} 
          className="lang-flag"
        />
        <span>{currentLanguage.name}</span>
        <FiChevronDown className="chevron" />
      </LanguageButton>

      <DropdownContainer $isOpen={isOpen}>
        {languages
          .filter(lang => lang.code !== currentLanguage.code)
          .map((lang) => (
            <LanguageOption
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
            >
              <img 
                src={lang.flag} 
                alt={lang.name}
                className="lang-flag"
              />
              <span>{lang.name}</span>
            </LanguageOption>
          ))}
      </DropdownContainer>
    </LanguageSelect>
  );
};

export default LanguageSwitcher;
