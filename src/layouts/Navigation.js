import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <h1><NavLink to="/" exact>Monika.Dembek</NavLink></h1>
            <h3>junior frontend developer</h3>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/about" activeClassName="navlink__selected">about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" activeClassName="navlink__selected">skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeClassName="navlink__selected">portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="navlink__selected">contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;