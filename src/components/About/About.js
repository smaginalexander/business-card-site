import React from 'react';
import './About.css'
import avatar from '../../images/DSC05664.jpg'
import army from '../../images/army.jpg'
import elbrus from '../../images/elbrus.jpeg'
const About = () => {
    const [count, setCount] = React.useState(300)
    const handleRightClick = () => {
        const line = document.querySelector('.about__avatar-line')
        if (count <= 600) {
            setCount(count + 300)
            line.style.left = `${-count}px`
        } else {
            setCount(300)
            line.style.left = `0`
        }
    }

    return (
        <div className="about" id="about">
            <div className="about__section about__section_profile">
                <div className="about__avatar-container" >
                    <span className="about__avatar-cursor" onClick={handleRightClick}>&#10227;</span>

                    <div className="about__avatar-line">
                        <img src={avatar} className="about__avatar" alt="avatar" />
                        <img src={army} className="about__avatar" alt="avatar" />
                        <img src={elbrus} className="about__avatar_elbrus" alt="avatar" />
                    </div>
                </div>

                <p className="about__text">
                    Привет, я начал заниматься разработкой около года назад.
                    Закончил курс Яндекс.Практикум(веб-разработка), где научился использовать JavaScript и React.
                    Закончил МГУПП по направлению "Сервис", прошел службу в армии.
                    В основном работал в заведениях общественного питания.
                  Сейчас готов поменять сферу деятельности и ищу любую возможность трудоустройства или стажировки в IT. </p>
            </div>
            <div className="about__section about__section_skiiz">
                <div className="about__container">
                    <div className="about__icon-container about__icon-container_type_roсket"></div>
                    <div className="about__text-container">
                        <p>Всегда стремлюсь выполнить задачу в срок. Работаю быстро и качественно.</p>
                    </div>
                </div>
                <div className="about__container">
                    <div className="about__icon-container about__icon-container_type_book"></div>
                    <div className="about__text-container">
                        <p>Постоянно развиваюсь. Осваиваю новые технологии, изучаю документации, читаю habr и слушаю подкасты.</p>
                    </div>
                </div>
                <div className="about__container">
                    <div className="about__icon-container about__icon-container_type_emphany"></div>
                    <div className="about__text-container about__text-container_type_emphany">
                        <p>Высокий уровень Soft skills. Ранее работал в ресторанах и кафе,
                        поэтому привык общаться с самыми разными людьми.
                    Я чуткий, мягкий, обходителный. Также я великолепно шучу.</p>
                    </div>
                </div>
                <div className="about__container">
                    <div className="about__icon-container about__icon-container_type_idea"></div>
                    <div className="about__text-container">
                        <p>Отличаюсь сообразительностью. Всегда есть куча задумок, которые можно реализовать в проекте.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About;