import React from 'react';
import PageTitle from '../components/PageTitle.js';
import "../styles/AboutPage.scss";


const AboutPage = () => {
    return (
        <div className="wrapper">
            <PageTitle title="about" />
            <div className="about">
                <img src="img/mina-pic.jpg" alt="bio" className="bio-photo" />
                <div className="about__content">
                    <h2 className="about__header">Facts</h2>
                    <ul className="about__list">
                        <li>Name:</li><li>Monika Dembek</li>
                        <li>City:</li><li>Bydgoszcz, Poland</li>
                        <li>Education:</li><li>IT engeener</li>
                        <li>Professional experience:</li><li>Graphic designer for 13 years, designing mainly DTP materials, working in advertisig agencies and as a freelancer</li>
                        <li>Current job:</li><li>Junior frontend developer</li>
                    </ul>
                    <h2 className="about__header">Goals</h2>
                    <ul className="about__list">
                        <li>General:</li><li>Developing my skills as frontend developer, quickly progressing into regular position</li>
                        <li>Next to learn:</li><li>Redux <br />Google Firebase<br />Styled Components</li>
                    </ul>
                    <h2 className="about__header">Fun facts</h2>
                    <ul className="about__list">
                        <li>Lifestyle:</li><li>Vegetarian</li>
                        <li>Animals:</li><li>one assasin cat</li>
                        <li>Enjoy:</li><li>attending live concerts<br />going to cinema</li>
                        <li>Favoutite cities:</li><li>Prague and Amsterdam</li>
                        <li>Current tv series:</li><li>La casa de papel</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default AboutPage;