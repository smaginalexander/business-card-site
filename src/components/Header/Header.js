import React from 'react';
import './Header.css';
import { Link, animateScroll as scroll } from "react-scroll";
const Header = () => {
    return (
        <header className="header">
            <nav className="header__navigation">
                <div className='header__link-container'>
                    <Link
                        to="skilz"
                        smooth={true}
                        duration={700}
                        activeClass={'active'}
                        spy={true}
                        className="header__text">Мои навыки</Link>
                    <span className='header__line'></span>
                </div>
                <div className='header__link-container'>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={700}
                        activeClass={'active'}
                        className="header__text"
                        spy={true}>Мои проекты</Link>
                    <span className='header__line'></span>
                </div>
                <div className='header__link-container'>
                    <Link
                        to="about"
                        smooth={true}
                        duration={700}
                        activeClass={'active'}
                        className="header__text"
                        spy={true}>Обо мне</Link>
                    <span className='header__line'></span>
                </div>
            </nav>
        </header>)
}

export default Header;