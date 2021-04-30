import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import About from '../About/About';
import Projects from '../Projects/Projects';
import MySkilz from '../MySkilz/MySkilz';
import './Main.css'

const Main = () => {
    return (
        <div className="main">
            <div className="main__image">
                <div className="main__text-container">
                    <p className="main__text">
                        Привет, меня зовут Александр Смагин. Я начинающий фронтенд разрабботчик.
                    </p>
                    <Link className="main__link" to="about" activeClass="active" smooth={true} duration={700}>Посмотреть <span>➤</span></Link>
                </div>
            </div>
            <About />
            <Projects />
            <MySkilz />
        </div>
    )
}
export default Main;