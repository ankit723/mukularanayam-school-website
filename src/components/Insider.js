import React from 'react';
import cbse from './about-icons/cbse.png';
import fee from './about-icons/fee.png';
import gl from './about-icons/gl.png';
import lb from './about-icons/lb.png';
import mg from './about-icons/mg.png';
import tc from './about-icons/tc.png';

export function Insider(){
    return (
        <div class="cont-insider">
        
            <div class="head-title">
                <h2>School Insider's</h2>
                <div class="title-discription">
                    <p>Find out what more on the school and get to know more about the school</p>
                    <p id="next-p">Welcome to Mukularanayam English School</p>
                </div>
            </div>

            <div class="insiders1">
                <div class="management">
                    <img src={mg} alt=""/>
                    <h3>Management</h3>
                    <p className="manage-p">
                        Every school needs to have systems
                        that help create the conditions for 
                        staff and students to work effectively together...
                    </p>
                </div>
                
                <div class="Transfer">
                    <img src={tc} alt=""/>
                    <h3>Transfer Certificate</h3>
                    <p className="manage-p">
                        Here you can verify issued transfer
                        certificate, The certificate is used 
                        when you change your board or school
                    </p>
                </div>
                
                <div class="fee">
                    <img src={fee} alt=""/>
                    <h3>Fee Structure</h3>
                    <p className="manage-p">
                        Each human being is a repository of most 
                        knowledge and efficiency in an unmanliness 
                        form and a teacher is there only to help the students 
                    </p>
                </div>
            </div>  

            <div class="insiders2">
                <div class="library">
                    <img src={lb} alt=""/>
                    <h3>Library</h3>
                    <p className="manage-p">
                        The concept of the library is undergoing 
                        a Meta (Reader's paradise). Beyond books 
                        and journals, the library today has to be 
                        the repository of information...
                    </p>
                </div>
                
                <div class="galary">
                    <img src={gl} alt=""/>
                    <h3>Galary</h3>
                    <p className="manage-p">
                        Here you will find a large collection of some 
                        of our best photos to give you a peek at some 
                        of our amazing Bamboo buildings, a sense of
                        the activities within ...
                    </p>
                </div>
                
                <div class="cbse">
                    <img src={cbse} alt=""/>
                    <h3>CBSE Details</h3>
                    <p className="manage-p">
                        Affiialiated to CBSE(10+2), New Delhi
                    </p>
                </div>
            </div>       
        </div>
    )
}