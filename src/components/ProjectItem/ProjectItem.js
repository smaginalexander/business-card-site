import React from 'react';
import './ProjectItem.css';
const ProjectItem = (props) => {
    return (
        <a target="_blank" href={props.card.url}>
            <div className="projectItem">
                <img className="projectItem__img" src={props.card.banner} alt='bunner' />
                <p className="projectItem__text">{props.card.name}</p>

            </div>
        </a>
    )
}
export default ProjectItem;