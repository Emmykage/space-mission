import React from "react";
import {NavLink} from 'react-router-dom'
import './styles.css'
import logo from './images/planet.png'
const Navigation =  () =>{
    // const NavLinkStyle = ({isActive}) =>{
    //     return{
    //         fontWeight: isActive? '700' : 'normal',
    //         textDecoration: isActive? 'underline' : 'none'
    //     }

    // }

    return (
        <header>
            <nav>
                <NavLink to='/' className="logo"><img src={logo} alt='space-logo'></img> <h1>Space Travelers Hub</h1></NavLink>
                <ul>
                    <li><NavLink  to='/'>Rocket</NavLink></li>
                    <li><NavLink to='/missions'>Mission</NavLink></li>
                    <li><NavLink to='/profile'>Profile</NavLink></li>

                </ul>
            </nav>
        </header>
    )
}
export default  Navigation