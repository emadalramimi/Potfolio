import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import ThemeSwitcher from '../../../components/ThemeSwitcher';
import './Navigation.scss';

const Navigation = () => {
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
    <nav id="navbar">
      <div className="nav__brand">
        <Link to="/">
          <img src={Logo} alt="itsrakesh logo" />
        </Link>
      </div>
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
                Home
              </Link>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <Link
                to="/skills"
                style={getLinkStyle('/skills')}
                className="nav__btn__link"
              >
                Skills
              </Link>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <Link
                to="/projects"
                style={getLinkStyle('/projects')}
                className="nav__btn__link"
              >
                Projects
              </Link>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <Link
                to="/achievements"
                style={getLinkStyle('/achievements')}
                className="nav__btn__link"
              >
                Achievements
              </Link>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <Link
                to="/about"
                style={getLinkStyle('/about')}
                className="nav__btn__link"
              >
                About&nbsp;Me
              </Link>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <Link
                to="/contact"
                style={getLinkStyle('/contact')}
                className="nav__btn__link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav__links">
        <ul>
          <li>
            <Link to="/" style={getLinkStyle('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/skills" style={getLinkStyle('/skills')}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" style={getLinkStyle('/projects')}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/achievements" style={getLinkStyle('/achievements')}>
              Achievements
            </Link>
          </li>
          <li>
            <Link to="/about" style={getLinkStyle('/about')}>
              About&nbsp;Me
            </Link>
          </li>
          <li>
            <Link to="/contact" style={getLinkStyle('/contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <ThemeSwitcher />
    </nav>
  );
};

export default Navigation;
