import React from 'react';
import './Projects.css'
import ProjectItem from '../ProjectItem/ProjectItem'
const Projects = () => {
    const [filterName, setFilterName] = React.useState('all')
    const [trainingCards, setTrainingCards] = React.useState([])
    const [testcards, setTestcards] = React.useState([])
    const [cards, setCards] = React.useState([{
        url: 'https://github.com/smaginalexander/movies-explorer-frontend',
        name: 'movie-explorer',
        banner: 'https://ltdfoto.ru/images/movies.png',
        type: "training"

    }, {
        url: 'https://github.com/smaginalexander/frontend-challenge',
        name: 'cats',
        banner: 'https://ltdfoto.ru/images/2021-04-27_19-48-07.png',
        type: "test"
    }, {
        url: 'https://github.com/smaginalexander/mesto-react',
        name: 'mesto',
        banner: 'https://ltdfoto.ru/images/2021-04-27_19-54-54.png',
        type: "training"
    }, {
        url: 'https://github.com/smaginalexander/tochka-test/tree/dev',
        name: 'Tochka',
        banner: 'https://ltdfoto.ru/images/2021-04-27_19-58-42.png',
        type: "test"
    }, {
        url: 'https://github.com/smaginalexander/creative-frontend-test',
        name: 'Creativ',
        banner: 'https://ltdfoto.ru/images/2021-04-27_20-02-15.png',
        type: "test"
    }, {
        url: 'https://github.com/smaginalexander/russian-travel',
        name: 'travel',
        banner: 'https://ltdfoto.ru/images/2021-04-27_20-04-58.png',
        type: "training"
    }])

    const onAllTrainingClick = () => {
        setFilterName('training')
        setTrainingCards(cards.filter((card) => card.type === 'training'))
    }

    const onAllTestClick = () => {
        setFilterName('test')
        setTestcards(cards.filter((card) => card.type === 'test'))
    }

    const onAllClick = () => {
        setFilterName('all')
        setCards(cards)
    }


    return (
        <div className="projects" id="projects">
            <div className="projects__nav-section">
                <ul className="projects__list">
                    <li>
                        <p id='all' className={`normal ${filterName === 'all' && 'active'}`} onClick={onAllClick}>
                            все проекты
                    </p>
                    </li>
                    <li>
                        <p id='training' className={`normal ${filterName === 'training' && 'active'}`} onClick={onAllTrainingClick}>
                            учебные
                    </p>
                    </li>
                    <li>
                        <p id='test' className={`normal ${filterName === 'test' && 'active'}`} onClick={onAllTestClick}>
                            тестовые
                    </p>
                    </li>
                </ul>
            </div>
            <div className="projects__section">
                <div className="projects__grid">
                    {filterName === 'training' &&
                        trainingCards.map((card) => (
                            <ProjectItem
                                key={card.id}
                                card={card}
                            />))
                    }
                    {filterName === 'test' &&
                        testcards.map((card) => (
                            <ProjectItem
                                key={card.id}
                                card={card}
                            />))
                    }
                    {filterName === ('all' || '') &&
                        cards.map((card) => (
                            <ProjectItem
                                key={card.id}
                                card={card}
                            />))
                    }
                </div>
            </div>
        </div>
    )
}
export default Projects;
