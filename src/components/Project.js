import React from 'react';
import "../styles/Project.scss";

const Project = (props) => {
    const { title, tech, desc, imgSrc, codeLink, pageLink } = props;
    const techStack = tech.join(" / ");
    return (
        <div className="project">
            <h3 className="project__title">{title}</h3>
            <img src={imgSrc} className="project__thumbSrc" alt="project thumbnail" />
            <p className="project__techStack">{techStack}</p>
            <p className="project__desc">{desc}</p>
            <div className="project__links">
                {pageLink.length > 0 ? <a href={pageLink} target="_blank" rel="noopener noreferrer" className="project__button btn--square">Live</a> : null}
                {codeLink.length > 0 ? <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project__button btn--square">Code</a> : null}
            </div>
        </div>
    );
};

export default Project;