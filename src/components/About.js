import React from 'react';
import about from './about-icons/about-bg.jpg';


export function About(){
    return(
        <div class="about">
        <div class="about-us">
            <h1>About Us</h1>
            <p>
                Mukularanyam word is a combination of two words & "Mukul"<br />
                means bud (undeveloped flower) and "Araynyam" means forest<br />
                (Van). It means Mukularanyam is  a place where buds (children)<br /> 
                become flowers spreading the fragrance of their knowledge in <br />
                very corner of the world when they take step after completing <br />
                their education.
            </p>
            <ul>
                <li>We Believe in Quality Education</li>
                <li>Library Filled With Immense Plesure</li>
                <li>Well Equipped Science An Computer Lab</li>
            </ul>

            <div class="button3">
                <a href="addmissions.html">Enroll Now</a>
            </div>

        </div>

        <div class="design">
            <div class="des-img"> <img src={about} alt=""/></div>
        </div>
      </div>
    )
}