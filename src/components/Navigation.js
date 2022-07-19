import React from "react";
// import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import './styles.css'
import logo from './images/planet.png'
const Navigation =  () =>{

    return (
        <header>
            <nav>
                <NavLink to='/' className="logo"><img src={logo} alt='space-logo'></img> <h1>Space Travelers Hub</h1></NavLink>
                <ul>
                    <li><NavLink activeClassName='current' to='/'>Rocket</NavLink></li>
                    <li><NavLink to='/mission'>Missiion</NavLink></li>
                    <li><a href='/profile'>Profile</a></li>

                </ul>
            </nav>
        </header>
    )
}
export default  Navigation