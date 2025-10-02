// Skills.jsx
/*const skills = ['MERN Stack', 'FastAPI', 'Bootstrap', 'MongoDB', 'SQL', 'Git', 'GitHub', 'Postman', 'Docker', 'AWS basics'];
      
export default function Skills() {
       return (
             
              <section id="Skills" className="section" data-aos="fade-up">
                     <div className="container">
                            <h2>Skills</h2>
                            <div className="row">
                                   {skills.map((skill) => (
                                          <div className="col-6 col-md-3 mb-3" key={skill}>
                                                 <div className="card text-center shadow-sm">
                                                        <div className="card-body">{skill}</div>
                                                 </div>
                                          </div>
                                   ))}
                            </div>
                     </div>
              </section>
       );
}
*/
      
      
      
      
      
      
      
      
      
      
/*
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiFastapi, SiMongodb } from 'react-icons/si';
      
const skills = [
       { name: 'HTML', level: 90, icon: <FaHtml5 color="#e34c26" /> },
       { name: 'CSS', level: 85, icon: <FaCss3Alt color="#2965f1" /> },
       { name: 'JavaScript', level: 80, icon: <FaJsSquare color="#f0db4f" /> },
       { name: 'React', level: 75, icon: <FaReact color="#61DBFB" /> },
       { name: 'FastAPI', level: 70, icon: <SiFastapi color="#009688" /> },
       { name: 'MongoDB', level: 65, icon: <SiMongodb color="#47A248" /> },
       { name: 'Git', level: 60, icon: <FaGitAlt color="#f1502f" /> },
       { name: 'AWS', level: 55, icon: <FaAws color="#FF9900" /> }
];
      
export default function Skills() {
       return (
              <section id="Skills" className="section" data-aos="fade-up">
                     <div className="container">
                            <h2 className="text-center mb-5 text-light">Skills</h2>
                            <div className="skills-grid">
                                   {skills.map(({ name, level, icon }, index) => (
                                          <div className="skill-item" key={name} data-aos="fade-up" data-aos-delay={index * 100}>
                                                 <div className="skill-icon">{icon}</div>
                                                 <div className="skill-info">
                                                        <div className="d-flex justify-content-between">
                                                               <span className="text-light">{name}</span>
                                                               <span className="text-info fw-bold">{level}%</span>
                                                        </div>
                                                        <div className="progress skill-bar">
                                                               <div
                                                                      className="progress-bar bg-info"
                                                                      role="progressbar"
                                                                      style={{ width: `${level}%` }}
                                                                      aria-valuenow={level}
                                                                      aria-valuemin="0"
                                                                      aria-valuemax="100"
                                                               ></div>
                                                        </div>
                                                 </div>
                                          </div>
                                   ))}
                            </div>
                     </div>
              </section>
       );
}
*/
      
     
import {
       FaReact,
       FaHtml5,
       FaCss3Alt,
       FaJsSquare,
       FaNodeJs,
       FaGithub,
       FaDatabase
} from 'react-icons/fa';
import { SiFastapi, SiMongodb, SiVite } from 'react-icons/si';
import pythonpic from '../assets/Python.png';
import reactpic from '../assets/react.png';
import sqlitepic from '../assets/sqlite.jpg'


import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
      
const frontendSkills = [
       { name: 'HTML', level: 90, icon: <FaHtml5 color="#e34c26" /> },
       { name: 'JavaScript', level: 85, icon: <FaJsSquare color="#f0db4f" /> },
       { name: 'React', level: 80, icon: <FaReact color="#61DBFB" /> },
       { name: 'Bootstrap', level: 75, icon: <FaCss3Alt color="#7952B3" /> }
];
      
const backendSkills = [
       { name: 'FastAPI', level: 82, icon: <SiFastapi color="#009688" /> },
       { name: 'Node.js', level: 78, icon: <FaNodeJs color="#68A063" /> },
       { name: 'MySQL', level: 70, icon: <FaDatabase color="#00758F" /> },
       { name: 'MongoDB', level: 75, icon: <SiMongodb color="#47A248" /> }
];
      
const tools = [
       { name: 'GitHub', level: 88, icon: <FaGithub color="#fff" /> },
       { name: 'VS Code', level: 90, icon: <SiVite color="#007ACC" /> }
];
      
const certifications = [
       {
              name: 'Python Programming',
             
              link: 'https://certificates.ccbp.in/intensive/programming-foundations?id=WNRFFAPVQG',
              image: pythonpic,
              alt:"python logo"
       },
       {
              name: 'React JS',
             
              link: 'https://certificates.ccbp.in/intensive/react-js?id=QTWSDILTEZ',
              image: reactpic,
              alt:"react logo",
       },
       {
              name: 'SQLite',
             
              link: 'https://certificates.ccbp.in/intensive/introduction-to-databases?id=RIKBNBOOHE',
              image: sqlitepic,
              alt:"sqlite logo",
       }
];
      
export default function Skills() {
       useEffect(() => {
              AOS.init({ duration: 1000 });
       }, []);
      
       const renderSkillBlock = (skillsArray) =>
              skillsArray.map(({ name, level, icon }, index) => (
                     <div className="skill-item mb-3" key={name} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="d-flex align-items-center gap-3">
                                         
                                   <div className="skill-icon">{icon}</div>
                                   <div className="skill-info w-100">
                                          <span>{name}</span>
                                          <div className="progress skill-bar mt-2 position-relative">
                                                 <div className="progress-bar bg-info" style={{ width: `${level}%` }}></div>
                                                 <span className="progress-label text-info fw-bold" style={{ left: `${level}%` }}>
                                                        {level}%
                                                 </span>
                                          </div>
                                   </div>
                            </div>
                     </div>
              ));
      
       return (
              <section id="Skills&Cert" style={{scrollMarginTop:'80px'}} className="section pt-0 bg-dark text-light">
                     <div className="container">
                           
                            
                            <div className="row gx-5 gy-4">
                                         
                                  
                                   <div className="col-12 col-md-6 col-lg-3 text-center">
                                          <div ><h4 className="mb-0" style={{color:"#ffffff"}}>FrontEnd</h4>
                                           <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <hr
            style={{
              border: 'none',
              height: '3px',
              backgroundColor: '#ffffff',
              width: '60px',
              boxShadow: '0 0 10px #ffffff',
              marginBottom: '40px',
            }}
          />
        </div>
                                          </div>
                                          <br/>
                                          <div className="skills-grid">{renderSkillBlock(frontendSkills)}</div>
                                   </div>
      
                                   
                                   <div className="col-12 col-md-6 col-lg-3 text-center">
                                          <div ><h4 className="mb-0" style={{color:"#ffffff"}}>BackEnd</h4>
                                          <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <hr
            style={{
              border: 'none',
              height: '3px',
              backgroundColor: '#ffffff',
              width: '60px',
              boxShadow: '0 0 10px #ffffff',
              marginBottom: '40px',
            }}
          />
        </div>
                                          </div>
                                          <br/>
                                          <div className="skills-grid">{renderSkillBlock(backendSkills)}</div>
                                   </div>
      
                                   
                                   <div className="col-12 col-md-6 col-lg-3 text-center">
                                          <div ><h4 className="mb-0" style={{color:"#ffffff"}}>Tools</h4>
                                          <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <hr
            style={{
              border: 'none',
              height: '3px',
              backgroundColor: '#ffffff',
              width: '30px',
              boxShadow: '0 0 10px #ffffff',
              marginBottom: '40px',
            }}
          />
        </div>
                                          </div>
                                          <br/>
                                          <div className="skills-grid">{renderSkillBlock(tools)}</div>
                                   </div>
      
                                  
                                   <div className="col-12 col-md-6 col-lg-3 text-center">
                                          <div ><h4 className="mb-0" style={{color:"#ffffff"}}>Certifications</h4>
                                          <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <hr
            style={{
              border: 'none',
              height: '3px',
              backgroundColor: '#ffffff',
              width: '60px',
              boxShadow: '0 0 10px #ffffff',
              marginBottom: '40px',
            }}
          />
        </div>
                                          </div>
                                          <br/>
                                          <div className="cert-list text-start">
  {certifications.map(({ name, date, link, image }, index) => (
    <div className="cert-item mb-4" key={name} data-aos="fade-up" data-aos-delay={index * 100}>
      <div className="d-flex align-items-center gap-3">
        <img src={image} alt={name} className="cert-img" />
        <div>
          <h6 className="mb-1">{name}</h6>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-info">
            View Certificate
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

                                   </div>
                            </div>
                     </div>
              </section>
       );
}




