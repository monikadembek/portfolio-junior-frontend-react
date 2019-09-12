import React from 'react';

const Skill = ({ name, info, imgSrc }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{info}</p>
            <p>{imgSrc}</p>
        </div>
    );
}

export default Skill;