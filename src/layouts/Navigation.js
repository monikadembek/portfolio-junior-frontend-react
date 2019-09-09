import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.scss';


const Navigation = () => {
    return (
        <div className="nav-container">
            <div className="nav-title">
                <h1><NavLink to="/" exact>Monika.Dembek</NavLink></h1>
                <h3>junior frontend developer</h3>
            </div>

            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink to="/about" className="main-nav__link" activeClassName="navlink__selected">about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className="main-nav__link" activeClassName="navlink__selected">skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className="main-nav__link" activeClassName="navlink__selected">portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="main-nav__link" activeClassName="navlink__selected">contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;