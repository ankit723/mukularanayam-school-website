import React from 'react';
import { Link } from 'react-router-dom';

export function Extreme(){
    return (
        <nav>
          <div class="left">
              <ul>
                  <li><Link to="contact.html">Have a questions?</Link></li>
                  <li><Link to="www.google.com">+979721050626</Link></li>
                  <li><Link to="www.google.com">info@mukularanayam.com</Link></li>
              </ul>
          </div>

          <div class="right">
              <ul>
                  <li><a href="teacher-login.html">Teacher's Login</a></li>
                  <li><a href="student-login">Student's Login</a></li>
              </ul>
          </div>
      </nav>
    )
}