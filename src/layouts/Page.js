import React from 'react';
import { Route } from 'react-router-dom';
import StartPage from '../pages/StartPage.js';
import AboutPage from '../pages/AboutPage.js';
import SkillsPage from '../pages/SkillsPage.js';
import PortfolioPage from '../pages/PortfolioPage.js';
import ContactPage from '../pages/ContactPage.js';


import '../styles/index.scss';
import '../styles/Page.scss';

const Page = () => {
    return (
        <React.Fragment>
            <div className="page">
                <Route path="/" exact component={StartPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/skills" component={SkillsPage} />
                <Route path="/portfolio" component={PortfolioPage} />
                <Route path="/contact" component={ContactPage} />
            </div>
        </React.Fragment>
    );
}

export default Page;