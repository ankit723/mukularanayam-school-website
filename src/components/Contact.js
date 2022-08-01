import React from 'react';
import { Link } from 'react-router-dom';

export function Contact(){
    return (
        <>
        <div class="contact-container">
        </div>

        <div className="contact-details">
            <div className="contact-details-container">
                <div className="contact-details-container-left">
                    <div className="contact-details-container-left-top">
                        <h2>Contact info: </h2>
                        <ul>
                            <li><Link to="/" className='contact-email'>Email: info@mukularanayam.com</Link></li>
                            <li><Link to="/" className='contact-phone'>Phone: 97210506266</Link></li>
                        </ul>
                    </div>
                    <div className="contact-details-container-left-mid">
                    <h2>Address: </h2>
                        <ul>
                            <li><Link to="/" className='Address'>Siddhgiribaugh, Sigra, Varanasi, Uttar Pradesh, 221001</Link></li>
                        </ul>
                    </div>
                    <div className="contact-details-container-left-bottom">
                    <h2>Hours Of Work: </h2>
                        <ul>
                            <li><Link to="/" className='Weekdays'>Monday-Saturday</Link></li>
                            <li><Link to="/" className='Time'>9:00 am - 12:00 pm</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="contact-details-container-right">
                    <div class="Contact Us" id="Contact">
                        <div class="discription">
                            <h1> Contact Us</h1>

                            <form action="orders.php" class="contact-form">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name"/>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                                </div>
                                <div class="form-group">
                                    <label for="email">Your Phone</label>
                                    <input type="number" class="form-control" id="phone" placeholder="Phone Number"/>
                                </div>
                                <div class="form-group">
                                    <label for="product">Class</label>
                                    <select name="product" id="product" class="form-control">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="email">Message</label>
                                    <input type="textBox" class="form-control" id="message" placeholder="Message"/>
                                </div>

                                <button type="submit" class="btn-primary">Submit</button>
                             </form>
                        
                        </div>   
                    </div>
                </div>
            </div>
        </div>
                    
                
            
        </>
    )
}