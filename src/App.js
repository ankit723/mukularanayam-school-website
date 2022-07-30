import logo from './about-icons/logo.png';
import cbse from './about-icons/cbse.png';
import fee from './about-icons/fee.png';
import gl from './about-icons/gl.png';
import lb from './about-icons/lb.png';
import mg from './about-icons/mg.png';
import tc from './about-icons/tc.png';
import about from './bg/about-bg.jpg';
import './App.css';

function App() {
  return (  
    <>
    <div className="App">

      {/* extreme top nav bar */}

      <nav>
          <div class="left">
              <ul>
                  <li><a href="contact.html">Have a questions?</a></li>
                  <li><a href="www.google.com">+979721050626</a></li>
                  <li><a href="www.google.com">info@mukularanayam.com</a></li>
              </ul>
          </div>

          <div class="right">
              <ul>
                  <li><a href="teacher-login.html">Teacher's Login</a></li>
                  <li><a href="student-login">Student's Login</a></li>
              </ul>
          </div>
      </nav>

      {/* nav bar */}

      <header id="navbar">
        <div class="left1">
            <img src={logo} alt="" id="title"/>
            <h2 id="title-name">mukularanayam</h2>
        </div>

        <div class="mid">
            <ul>
                <li><a href="index.html" class="mid-js">Home</a></li>
                <li><a href="addmissions.html" class="mid-js">Addmissions</a></li>
                <li><a href="teacher.html" class="mid-js">Teacher's Login</a></li>
                <li><a href="student.html" class="mid-js">Student's Login</a></li>
                <li><a href="contact.html" class="mid-js">Contact</a></li>
            </ul>
        </div>

        <div class="right1">
            <a href="addmissions.html">Enroll Now</a>
        </div>
      </header>

      {/* extreme top section */}

      <div class="container">
          <h1>
              Mukularanayam English <br/> School
          </h1>

          <p>
              We are a school that is dedicated to the education, <br />
              at the highest level of education in lowest price segment,<br />
              including the best teachers and the best environment.
          </p>

          <div class="button">
              <a href="addmissions.html">Enroll Now</a>
          </div>
      </div>

      {/* Insider section */}

      <div class="cont-insider">
        <div class="insider">
            <div class="insider1">
                <h3>Download Centre</h3>
                <p>You can download you study materials here</p>
            </div>
            <div class="insider2">
                <h3>Annual Exam Date Sheet</h3>
                <p>Get your Date Sheet here</p>
            </div>
            <div class="insider3">
                <h3>Study Materials</h3>
                <p>You can download you study materials here</p>
            </div>   

        </div>

        <div class="head-title">
            <h2>School Insider's</h2>
            <div class="title-discription">
                <p>In this section you can find out what more insider the school and get to know insider the infrastucture and more</p>
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

      {/* mid section */}

      <div class="container2">
        <h1>
            Education For Tommorow's Leaders
        </h1>

        <p>
            "The factor that empowers the people and ultimately determines which <br />
            organizations succeed or fail is the leadership of those organizations.""
        </p>
        <p id="auth">Warren Bennis</p>

        <div class="button2">
            <a href="addmissions.html">Enroll Now</a>
        </div>

      </div>

      {/* about section */}

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

    </div>

    </>
  );
}

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("navbar").style.backgroundColor = "rgba(255,255,255,0.98)";
      document.getElementById("navbar").style.boxShadow = "0px 0px 10px rgba(0,0,0,0.6)";
      document.getElementById("title").style.color="black";
      document.getElementsByClassName("mid-js")[0].style.color="black";
      document.getElementsByClassName("mid-js")[1].style.color="black";
      document.getElementsByClassName("mid-js")[2].style.color="black";
      document.getElementsByClassName("mid-js")[3].style.color="black";
      document.getElementsByClassName("mid-js")[4].style.color="black";
      document.getElementById("title-name").style.marginLeft="-210px";
      document.getElementById("title-name").style.transition="0.5s";
      document.getElementById("title-name").style.opacity="0";
      document.getElementById("title-name").style.color="black";
  } 
  else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.boxShadow = "none";
      document.getElementById("title").style.color="white";
      document.getElementsByClassName("mid-js")[0].style.color="white";
      document.getElementsByClassName("mid-js")[1].style.color="white";
      document.getElementsByClassName("mid-js")[2].style.color="white";
      document.getElementsByClassName("mid-js")[3].style.color="white";
      document.getElementsByClassName("mid-js")[4].style.color="white";
      document.getElementById("title-name").style.transition="0.5s";
      document.getElementById("title-name").style.marginLeft="85px";
      document.getElementById("title-name").style.opacity="1";
      document.getElementById("title-name").style.color="white";
  }
}

window.onscroll = function() {scrollFunction()};

export default App;
