import React from 'react';
import '../styles/Skill.scss';

const Skill = ({ name, info, imgSrc }) => {
    return (
        <div className="skill">
            <img src={imgSrc} className="skill__img" alt="technology icon" />
            <div>
                <h3 className="skill__name">{name}</h3>
                <p className="skill__info">{info}</p>
            </div>
        </div>
    );
}

export default Skill;