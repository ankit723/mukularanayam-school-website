import React from 'react';


export function Addmissions() {
    document.title = "Mukularanayam|Addmissions"
    return (
        <>
            <div className="addmissions-container">
                <h1>
                    Addmission Form
                </h1>
            </div>
            <h1 className='addmission-header'>Admission From</h1>
            <table>
                <tr>
                    <td>Student's Name</td>
                    <td><input type="text" placeholder='Enter Student Name' /></td>
                </tr>
                <tr>
                    <td>Mother's Name</td>
                    <td><input type="text" placeholder='Enter Mothers Name' /></td>
                </tr>
                <tr>
                    <td>Father's Name</td>
                    <td><input type="text" placeholder='Enter Fathers Name' /></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="email" placeholder='Enter Email' /></td>
                </tr>
                <tr>
                    <td>Mobile Number</td>
                    <td><input type="number" placeholder='Mobile Number' /></td>
                </tr>
                <tr>
                    <td>WhatsApp Number</td>
                    <td><input type="number" placeholder='WhatsApp Number' /></td>
                </tr>
                <tr className='religion'>
                    <td>Category</td>
                    <td>
                        <select name="category" id="category">
                            <option value>Select Category</option>
                            <option value="general">General</option>
                            <option value="obc">OBC</option>
                            <option value="sc">SC</option>
                            <option value="st">ST</option>
                        </select>
                    </td>
                </tr>
                <tr className='religion'>
                    <td>Religion</td>
                    <td>
                        <select name="religion" id="religion">
                            <option value>Select Religion</option>
                            <option value="Hinduism">Hinduism</option>
                            <option value="Christianity">Christianity</option>
                            <option value="Jainism">Jainism</option>
                            <option value="Sikhism">Sikhism</option>
                            <option value="Islam">Islam</option>
                            <option value="Otder">Other</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Registration for Class</td>
                    <td>
                        <select name="class" id="class">
                            <option value>Select Class</option>
                            <option value="Nursury">Nursury</option>
                            <option value="LKG">LKG</option>
                            <option value="UKG">UKG</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="11">11</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Date of Birth of the Student: (in figure)</td>
                    <td>
                        <select id="d" name="d" onchange="calAge()" required="">

                            <option value="0">Select Date</option>

                            <option value="01">1</option><option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>

                        <select id="m" name="m" onchange="calAge()" required="">
                            <option value="0">Select Month</option>
                            <option value="01">Jan</option>
                            <option value="02">Feb</option>
                            <option value="03">Mar</option>
                            <option value="04">Apr</option>
                            <option value="05">May</option>
                            <option value="06">Jun</option>
                            <option value="07">Jul</option>
                            <option value="08">Aug</option>
                            <option value="09">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>
                        <select id="y" name="y" onchange="calAge()" required="">
                            <option value="0">Select Year</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                        </select>
                    </td>
                </tr>
                <tr className='sex'>
                    <td>Sex of Student</td>
                    <td>
                        <select name="religion" id="religion">
                            <option value>Sex</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </td>
                </tr>
                <h4>DETAILS OF PREVIOUS CLASS</h4>
                <tr>
                    <td>Previous School</td>
                    <td><input type="text" placeholder='Previous School Name' /></td>
                </tr>
                <tr className='previous-class'>
                    <td>Previous Or Appearing Class</td>
                    <td>
                        <select name="previous class" id="previous class">
                            <option value>Previous Class</option>
                            <option value="Nursury">Nursury</option>
                            <option value="LKG">LKG</option>
                            <option value="UKG">UKG</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                        </select>
                    </td>
                </tr>
                <tr className='year-appeared'>
                    <td>Year Of Examination</td>
                    <td>
                        <select name="Year-Of-Examination" id="Year-Of-Examination">
                            <option value>Year Of Examination</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Boards Name(CBSE/ICSE/U.P/NIOS)</td>
                    <td><input type="text" placeholder='Previous School Name' /></td>
                </tr>
                <tr>
                    <td>Decleration By Student</td>
                    <td><p className='declaration'>I hereby certify that all the information given above is correct. I understand that Sanskrit language is a compulsory subject. I also declare herewith that the particulars filed by me on this form are correct and best in my knowledge as per records of previous school or authorised body. I will not request to the school to change the details (e.g. Name, Date of Birth, Father's Name & Mother's Name in future.)</p><input type="checkbox" name="accept" id="accept" /></td>
                </tr>
                        <ol className='information'>
                            <li>The entrance test is completely free.</li>
                            <li>Date and Timing will be informed on your registered E-mail as well as SMS on the registered mobile number.</li>
                            <li>The entrance test will be conducted for English, Mathematics and Science in class IX.</li>
                            <li>
                                The entrance test for class XI will be conducted from the course of class X (NCERT) as follows-
                                <li>(A) Science Stream:- English, Mathematics & Science</li>
                                <li>(B) Commerce Stream: English, General Mathematics and G.K.</li>
                                <li>(C) Humanities: NO ENTRANCE TEST</li>
                            </li>
                            <li>The admission application form will be issued only for those students whose name will fall under the merit list of the entrance test.</li>
                            <li>Eligible candidate can purchase Admission Application Form from the counter after paying Rs 200/-by cash.</li>
                            <li>Students can download fee chart from the website(under the link of FEE STRUCTURE- SESSION 2022-23)</li>
                            <li>Admission totally depends on the Merit of the entrance test and availability of the seats in respective classes.</li>
                            <li>The school has NO TRANSPORT FACILITY. Students are also not allowed to bring means of transport on the school campus during schooling.</li>
                            <li>During school education, students will come to school on the responsibility of parents or from public transport and will go home.</li>
                        </ol>
                        <h4>Read These Information and Instruction Carefully Then Click Submit</h4>
                        <input type="submit" value="Submit" id='submit'/>
                    
            </table>

            </>
            )
}