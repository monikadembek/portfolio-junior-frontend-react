import React from 'react';
import '../styles/StartPage.scss';

const StartPage = () => {
    return (
        <div className="start">
            <div className="start__intro--1">
                <div>design</div>
                <div>code</div>
                <div>passion</div>
            </div>
            <div className="start__intro--2">
                <h3>Monika.Dembek</h3>
                <h2>Frontend</h2>
                <h2>Developer</h2>
            </div>
            <div style={{ marginTop: 40 }}>This is a new portfolio coded in React and it is still under contruction. <br />Most pages have its content but there are still some work to be done, especially implementing responsive web design.</div>
        </div >
    );
}

export default StartPage;