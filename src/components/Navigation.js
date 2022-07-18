import React from "react";
import { Link } from 'react-router-dom';
import './styles.css'
import logo from './images/planet-space.png'
const Navigation =  () =>{

    return (
        <header>
            <nav>
                <Link to='/' className="logo"><img src={logo} alt='space-logo'></img> <h1>Space Travelers Hub</h1></Link>
                <ul>
                    <li><Link to='/'>Rocket</Link></li>
                    <li><Link to='/mission'>Missiion</Link></li>
                    <li><a href='/profile'>Profile</a></li>

                </ul>
            </nav>
        </header>
    )
}
export default  Navigation