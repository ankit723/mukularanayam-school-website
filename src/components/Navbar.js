import React from 'react';
import logo from './about-icons/logo.png';
import { Link } from 'react-router-dom';


export function Navbar(){
    return(
        <header id="navbar">
            <div class="left1">
                <img src={logo} alt="" id="title"/>
                <h2 id="title-name">Mukularanayam</h2>
            </div>

            <div class="mid">
                <ul>
                    <li><Link to="/" class="mid-js">Home</Link></li>
                    <li><Link to="/Addmissions" class="mid-js">Addmissions</Link></li>
                    <li><Link to="/teacher" class="mid-js">Teacher's Login</Link></li>
                    <li><Link to="/student" class="mid-js">Student's Login</Link></li>
                    <li><Link to="/Contact" class="mid-js">Contact</Link></li>
                </ul>
            </div>

            <div class="right1">
                <Link to="addmissions.html">Enroll Now</Link>
            </div>
        </header>
    )
}