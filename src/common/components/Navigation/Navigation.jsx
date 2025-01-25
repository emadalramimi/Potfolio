import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import './Navigation.scss';

const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const getLinkStyle = (path) => {
    return {
      color: location.pathname === path ? '#4F46E5' : 'inherit',
      textDecoration: 'none'
    };
  };

  const closeNav = () => {
    const checkbox = document.getElementById('navi-toggle');
    checkbox.checked = !checkbox.checked;
  };

  return (
    <nav id="navbar" style={{ height: '60px' }}>
      <div className="nav__btn">
        <input
          type="checkbox"
          className="nav__btn__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="nav__btn__button">
          <span className="nav__btn__icon">&nbsp;</span>
        </label>
        <div className="nav__btn__background">&nbsp;</div>
        <div className="nav__btn__nav">
          <ul className="nav__btn__list">
            <li className="nav__btn__item" onClick={closeNav}>
              <Link
                to="/"
                style={getLinkStyle('/')}
                className="nav__btn__link"
              >
                {t('navbar.home')}
              </Link>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <Link
                to="/skills"
                style={getLinkStyle('/skills')}
                className="nav__btn__link"
              >
                {t('navbar.skills')}
              </Link>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <Link
                to="/projects"
                style={getLinkStyle('/projects')}
                className="nav__btn__link"
              >
                {t('navbar.projects')}
              </Link>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <Link
                to="/achievements"
                style={getLinkStyle('/achievements')}
                className="nav__btn__link"
              >
                {t('navbar.achievements')}
              </Link>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <Link
                to="/contact"
                style={getLinkStyle('/contact')}
                className="nav__btn__link"
              >
                {t('navbar.contact')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav__links">
        <ul>
          <li>
            <Link to="/" style={getLinkStyle('/')}>
              {t('navbar.home')}
            </Link>
          </li>
          <li>
            <Link to="/skills" style={getLinkStyle('/skills')}>
              {t('navbar.skills')}
            </Link>
          </li>
          <li>
            <Link to="/projects" style={getLinkStyle('/projects')}>
              {t('navbar.projects')}
            </Link>
          </li>
          <li>
            <Link to="/achievements" style={getLinkStyle('/achievements')}>
              {t('navbar.achievements')}
            </Link>
          </li>
          <li>
            <Link to="/contact" style={getLinkStyle('/contact')}>
              {t('navbar.contact')}
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav__actions">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navigation;
