import React from 'react';
import Project from '../components/Project.js';
import PageTitle from '../components/PageTitle.js';

const api = "data/data.json";

class PortfolioPage extends React.Component {
    state = {
        portfolio: [],
        isLoaded: false
    };

    componentDidMount() {
        fetch(api)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    portfolio: resp.portfolio,
                    isLoaded: true
                })
            })
            .catch(error => console.log("Error:" + error));
    }

    render() {
        const portfolio = this.state.portfolio.map(project => (
            <Project
                key={project.id}
                title={project.title}
                tech={project.technologies}
                desc={project.description}
                imgSrc={project.thumbSrc}
                codeLink={project.codeLink}
                pageLink={project.pageLink}
            />
        ));
        return (
            <div>
                <PageTitle title="skills" />
                <div className="skills-cnt">
                    {this.state.isLoaded ? portfolio : <p>No portfolio projects to display</p>}
                </div>
            </div>
        );
    }
}

export default PortfolioPage;