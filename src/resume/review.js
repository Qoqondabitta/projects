// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import './resume.css';
// // import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <div class="resume">
//         <div class="top">
//           <div class="namePart">
//             <h1>Abdulakhad Turgunaliev</h1>
//             <p>FRONTEND DEVELOPER</p>
//           </div>
//           <div class="contactInfo">
//             <p>phone : +998(90)111-65-54</p>
//             <p>email : turgunalievabdulakhad@gmail.com</p>
//             <p>address : tashkent, uzbekistan</p>
//             <p>institution : Web-brain Academy</p>
//           </div>
//         </div>
//         <div class="below">
//           <div class="education">
//             <div class="study skills">
//               <h2>Education</h2>
//               <div>
//                 <p>School #44</p>              
//                 <p>From September, 2012 to May, 2023</p> 
//                 <p>Tashkent, Uzbekistan</p>         
//               </div>       
//             </div>
//             <div class="skills">
//               <h2>Skills</h2>
//               <ul>
//                 <li>Communication</li>
//                 <li>Eloquent</li>
//                 <li>Problem Solving</li>
//                 <li>leadership</li>
//                 <li>Creativity</li>
//                 <li>Time Management</li>
//                 <li>Decision Making</li>
//                 <li>Analytical</li>
//                 <li>Team Oriented</li>
//                 <li>Negotiation</li>
//                 <li>Public Speaking</li>
//                 <li>Calm</li>
//                 <li>Responsible</li>
//                 <li>Punctual</li>  
//               </ul>
//             </div>
//             <div class="awards skills">
//               <h2>Awards</h2>
//               <div>
//                 <p>April 2023</p>
//                 <p>School #44</p>
//                 <p>Winner of Calisthenics Workout Competition</p>                
//               </div>
//               <div>
//                 <p>May 2023</p>
//                 <p>School #44</p>
//                 <p>Winner of IT Programming Competition</p>                
//               </div>
//               <div>
//                 <p>June 2023</p>
//                 <p>School #44</p>
//                 <p>Student of the Year(Accepted to 49 Foreign Universities)</p>                
//               </div>
//               <div>
//                 <p>January 2022</p>
//                 <p>Uchtepa District</p>
//                 <p>Third place at Math Olympiad</p>                
//               </div>
//             </div>
//           </div>
//           <div class="workExperience">
//             <div class="objective">
//               <h2>Career Objective</h2>
//               <p>
//                 Even though, I have knowledge of Frontend developing(HTML, CSS and JavaScript), 
//                 I have a lot to learn, especially backend developing, in order to create an entire
//                 website o  my own. Throughout my education in computer science, I have made number
//                 of figma projects, sliders and solved problems in Codewars.com. 
//               </p>
//             </div>
//             <div class="qualification objective">
//               <h2>Experience</h2>
//               <div class="research">
//                 <h3>Individual Project</h3>
//                 <h6>JUNE 2023 - PRESENT</h6>
//                 <ul>
//                   <li>Created "Filter/Find/Search" section of website using only vanilla JavaScript.</li>
//                   <li>Making website for my father's business (Retail Shop of Plastering products).</li>
//                   <li>Created mini Backend of users using only Vanilla JavaScript.</li>
//                 </ul>
//               </div>
//               </div>
//               <div class="lab research">
//                 <h3>Web-brain Academy Tutor</h3>
//                 <h6>FEBRUARY 2023 - MAY 2023</h6>
//                 <ul>
//                   <li>Made Navbar, Sidebar and Footer of each Page in Projects</li>
//                   <li>Reviewed and corrected works of junior developers</li>
//                 </ul>
//               </div>
            
//             <div class="projects objective">
//               <h3>Projects</h3>
//               <div class="projectOne research">
//                 <h4>Slider</h4>
//                 <h6>JUNE 2023 - PRESENT</h6>
//                 <ul>
//                   <li>Made Slider using only HTML and CSS</li>                  
//                   <li>Made Slider using only Vanilla JavaScript and HTML and CSS</li>
//                   <li>Made Slider using only DOM</li>
//                 </ul>
//               </div>
//               <div class="projectTwo research">
//                 <h3>Figma</h3>
//                 <h6>JANUARY 2023 - FEBRUARY 2023</h6>
//                 <ul>
//                   <li>Made figma project of restaurant</li>                  
//                   <li>Made video tutorials for HTML AND CSS learners</li>
//                   <li>Created Navbar and Footer section templates for 17 students</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//     </div>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// =======================================================================================
// ================================July 11, 2023==========================================
// =======================================================================================
// import React from "react"


// export class Navbar extends React.Component{
//     render(){
//         console.log(this);
//         const {
//             data:{name, title}
//         } = this.props
//         return<div>
//             {/* <div className="fruits">                
//             <h3>{this.props.data[0]}</h3>
//             <h3>{this.props.data[1]}</h3>
//             <h3>{this.props.data[2]}</h3>
//             </div> */}
//             {/* {this.props.data.map((item)=>{
//                 return item
//             })} */}
//             {/* <h1>{this.props.children}</h1> */}
//         </div>
//     }
// }
// =============================================================================================================
// ==================================July 13, 2023==============================================================
// =============================================================================================================
// export class StateLesson extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 1,
//             typedValue: '',
//             surname:'',
//             firstName:'',
//             students: database,
//             isDark: false,
//             language: 'uz'
//         }
//     }
//     render(){
//         const onChangeInfo=({target})=>{
//             this.setState({[target.placeholder]: target.value})
//         }
//         const plus = ()=>{
//             this.setState({count: this.state.count+1})
//         }
//         const minus = ()=>{
//             this.setState({count: this.state.count-1})
//         }
//         const getTypedValue=({target:{value}})=>{
//             this.setState({typedValue: value})
//         }
//         const onSearch=({target:{value}})=>{
//             let filtered= database.filter(student=> student.name.toLowerCase().includes(value.toLowerCase()) )
//             this.setState({students: filtered})
//         }
//         const onCheckbox=()=>{
//             this.setState({
//                 isDark: !this.state.isDark
//             })
//         }
//         const selectLanguage=({target:{value}})=>{
//             this.setState({language: value})
//         }
//         const sayHello=(tongue)=>{
//                 return tongue==='uz'?"Assalomu alekum":tongue==='ru'?'Privet':tongue==='en'?'Hello':'Select'
//         }
//         return(
//             <div style={
//                 {
//                     position: "absolute",
//                     top: 0,
//                     // bottom: 0,
//                     right: 0,
//                     left: 0,
//                     background: this.state.isDark?"black":'white',
//                     color: this.state.isDark?"white":"black"
//                 }
//             }>
//                 <h1>{this.state.count}</h1>
//                 <h1>{this.state.typedValue}</h1>
//                 <button onClick={plus}>Plus</button>
//                 <button onClick={minus}>Minus</button>
//                 <h1>{this.state.name}</h1>
//                 <h1>{this.state.surname}</h1>
//                 <input type="text" name="" id="" onChange={getTypedValue} />
//                 <input type="text" placeholder="name" onChange={onChangeInfo} />
//                 <input type="text" placeholder="surname" onChange={onChangeInfo} />
//                 <input type="text" placeholder="find" onChange={onSearch} />
//                 {this.state.students.map(v => <h1>{v.id}. {v.surname} {v.name}</h1>)}
//                 <input type="checkbox" onClick={onCheckbox} />{""}
//                 <span>{this.state.isDark?'Tungi Rejim':'Kungi Rejim'}</span>
//                 <select name="" id="" onChange={selectLanguage}>
//                     <option value="uz">Uzbek</option>
//                     <option value="ru">Russian</option>
//                     <option value="en">English</option>
//                 </select>
//                 <h2>{sayHello(this.state.language)}</h2>
//             </div>
//             )
//     }
// }
// export class HomeworkComponents extends React.Component{
//     render(){
//         console.log(this);
//         return <div>
//             <div style={{
//                 display:"flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 gap: "40px",
//                 background: "black",
//                 color: "white"
//             }}>
//                 {/* <h3>{this.props.data[0]}</h3>
//                 <h3>{this.props.data[1]}</h3>
//                 <h3>{this.props.data[2]}</h3>
//                 <h3>{this.props.data[3]}</h3> */}
//             {this.props.data.map((item)=> {
//                 return item
//                 })}    
//             </div>
//             {/* <h2>{this.props.data}</h2> */}
//             {/* <h2>{this.props.children}</h2> */}
//         </div>
//      }   
// }

// export default StateLesson