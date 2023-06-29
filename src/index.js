import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './resume.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="resume">
        <div class="top">
          <div class="namePart">
            <h1>Abdulakhad Turgunaliev</h1>
            <p>FRONTEND DEVELOPER</p>
          </div>
          <div class="contactInfo">
            <p>phone : +998(90)111-65-54</p>
            <p>email : turgunalievabdulakhad@gmail.com</p>
            <p>address : tashkent, uzbekistan</p>
            <p>institution : Web-brain Academy</p>
          </div>
        </div>
        <div class="below">
          <div class="education">
            <div class="study skills">
              <h2>Education</h2>
              <div>
                <p>School #44</p>              
                <p>From September, 2012 to May, 2023</p> 
                <p>Tashkent, Uzbekistan</p>         
              </div>       
            </div>
            <div class="skills">
              <h2>Skills</h2>
              <ul>
                <li>Communication</li>
                <li>Eloquent</li>
                <li>Problem Solving</li>
                <li>leadership</li>
                <li>Creativity</li>
                <li>Time Management</li>
                <li>Decision Making</li>
                <li>Analytical</li>
                <li>Team Oriented</li>
                <li>Negotiation</li>
                <li>Public Speaking</li>
                <li>Calm</li>
                <li>Responsible</li>
                <li>Punctual</li>  
              </ul>
            </div>
            <div class="awards skills">
              <h2>Awards</h2>
              <div>
                <p>April 2023</p>
                <p>School #44</p>
                <p>Winner of Calisthenics Workout Competition</p>                
              </div>
              <div>
                <p>May 2023</p>
                <p>School #44</p>
                <p>Winner of IT Programming Competition</p>                
              </div>
              <div>
                <p>June 2023</p>
                <p>School #44</p>
                <p>Student of the Year(Accepted to 49 Foreign Universities)</p>                
              </div>
              <div>
                <p>January 2022</p>
                <p>Uchtepa District</p>
                <p>Third place at Math Olympiad</p>                
              </div>
            </div>
          </div>
          <div class="workExperience">
            <div class="objective">
              <h2>Career Objective</h2>
              <p>
                Even though, I have knowledge of Frontend developing(HTML, CSS and JavaScript), 
                I have a lot to learn, especially backend developing, in order to create an entire
                website o  my own. Throughout my education in computer science, I have made number
                of figma projects, sliders and solved problems in Codewars.com. 
              </p>
            </div>
            <div class="qualification objective">
              <h2>Experience</h2>
              <div class="research">
                <h3>Individual Project</h3>
                <h6>JUNE 2023 - PRESENT</h6>
                <ul>
                  <li>Created "Filter/Find/Search" section of website using only vanilla JavaScript.</li>
                  <li>Making website for my father's business (Retail Shop of Plastering products).</li>
                  <li>Created mini Backend of users using only Vanilla JavaScript.</li>
                </ul>
              </div>
              </div>
              <div class="lab research">
                <h3>Web-brain Academy Tutor</h3>
                <h6>FEBRUARY 2023 - MAY 2023</h6>
                <ul>
                  <li>Made Navbar, Sidebar and Footer of each Page in Projects</li>
                  <li>Reviewed and corrected works of junior developers</li>
                </ul>
              </div>
            
            <div class="projects objective">
              <h3>Projects</h3>
              <div class="projectOne research">
                <h4>Slider</h4>
                <h6>JUNE 2023 - PRESENT</h6>
                <ul>
                  <li>Made Slider using only HTML and CSS</li>                  
                  <li>Made Slider using only Vanilla JavaScript and HTML and CSS</li>
                  <li>Made Slider using only DOM</li>
                </ul>
              </div>
              <div class="projectTwo research">
                <h3>Figma</h3>
                <h6>JANUARY 2023 - FEBRUARY 2023</h6>
                <ul>
                  <li>Made figma project of restaurant</li>                  
                  <li>Made video tutorials for HTML AND CSS learners</li>
                  <li>Created Navbar and Footer section templates for 17 students</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
