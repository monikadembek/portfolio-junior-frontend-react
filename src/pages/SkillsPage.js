import React, { Component } from 'react';
import Skill from '../components/Skill';

const api = 'data/data.json';



class SkillsPage extends Component {

    state = {
        skills: [],
        isLoaded: false
    }

    componentDidMount() {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    skills: data.skills,
                    isLoaded: true
                })
            })
            .catch(error => console.log('Error:', error));
    }

    render() {
        console.log(this.state.skills);

        const skills = this.state.skills.map(skill => (
            <Skill key={skill.id} name={skill.name} info={skill.info} imgSrc={skill.imgSrc} />
        ));

        return (
            <div>
                skills page
                {skills.length > 0 ? skills : <p>Currently there are no skills to show</p>}
            </div>
        );
    }

}

export default SkillsPage;