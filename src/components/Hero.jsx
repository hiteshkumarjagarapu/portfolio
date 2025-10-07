/*
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePic from '../assets/myprofile.jpg';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { color } from 'framer-motion';
export default function Hero() { useEffect(() => {
                 AOS.init({ duration: 1000, once: true });
                 },
      []);
           return (
                        <section id="Home" className="section" data-aos="fade-up">
                        <div className="container">
                                    <div className="row align-items-center">
                                                
                                                <div className="col-md-6 text-center text-md-start" data-aos="zoom-in">
                                                            <h5 className="text-light ">Hello I'm </h5>
                                                            <h3 className=" fw-bold text-light      ">Hitesh Kumar Jagarapu</h3>
                                                            <h5 className="text-light mt-2 ">a <span style={{color:'#0BC1C4'}}>Software Developer</span></h5>
                                                            <p className="text-white mt-4"> Full Stack Developer specializing in React, FastAPI, cloud solutions, and integrating AI APIs. </p>
                                                        
                                                            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
                                                                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                                                                        <i className="bi bi-github"></i> </a>
                                                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                                                                        <i className="bi bi-linkedin"></i> </a>
                                                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                                                                        <i className="bi bi-twitter"></i> </a>
                                                            </div>
                                                            <div className="social-icons">
                                                                             
                                                                        <a href="https://www.linkedin.com/in/contacthiteshkumar" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn /> </a>
                                                                        <a href="https://github.com/hiteshkumarjagarapu" target="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
                                                                        <a href="none" target="_blank" rel="noopener noreferrer"> <FaFacebookF /> </a>
                                                                        <a href="none" target="_blank" rel="noopener noreferrer"> <FaInstagram /> </a>
                                                            </div>
                                                           
     
                                                                        <div className="mt-4 d-flex gap-3 flex-wrap">
      <a
            href="#AboutMe"
            className="btn rounded-pill px-4 py-2 glow-button"
            style={{ backgroundColor: '#0BC1C4', color: '#000000', fontWeight: 'bold' }}
      >
            More About Me
      </a>
      <a
            href="/myresume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-pill px-4 py-2 border border-info text-info zoom-click"
            style={{ backgroundColor: 'transparent', fontWeight: 'bold' }}
      >
            View Resume
      </a>
</div>
     
     
     
                                                            </div>
                                                            
                                                            <div className="col-md-6 text-center mt-5 mt-md-0">
                                                                        <div className="mx-auto">
                                                                                    <img src= {profilePic} alt="Hitesh Kumar" className=" img-fluid hero-img glow-aqua1      " width="300" height="300" style={{border:'1px solid #000000'}}/>
                                                                        </div>
                                                            </div>      
                                                </div>
                                    </div>
                        </section>
                        );
            }
            */



            import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePic from '../assets/mainimg.jpg';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="Home" className="section" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center flex-column flex-md-row">

          {/* Text Content (Always on top / left) */}
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0" data-aos="zoom-in">
            <h5 className="text-light">Hello I'm </h5>
            <h3 className="fw-bold text-light">Hitesh Kumar Jagarapu</h3>
            <h5 className="text-light mt-2">a <span style={{ color: '#0BC1C4' }}>Software Developer</span></h5>
            <h6 className="text-white mt-4">
              Turning ideas into clean code and powerful web experiences.
            </h6>

           {/* Social Icons (Bootstrap icons row) */}
<div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
    <i className="bi bi-github"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
    <i className="bi bi-linkedin"></i>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
    <i className="bi bi-twitter"></i>
  </a>
</div>

{/* Social Icons (React Icons row) */}
<div className="social-icons mt-3 d-flex justify-content-center justify-content-md-start gap-3">
  <a href="https://www.linkedin.com/in/contacthiteshkumar" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
  <a href="https://github.com/hiteshkumarjagarapu" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
  {/*<a href="none" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>*/}
  <a href="https://www.instagram.com/dev_stuff_" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
</div>


            {/* Buttons for large devices */}
            <div className="mt-4 d-none d-md-flex gap-3 flex-wrap">
              <a
                href="#AboutMe"
                className="btn rounded-pill px-4 py-2 glow-button"
                style={{ backgroundColor: '#0BC1C4', color: '#000000', fontWeight: 'bold' }}
              >
                More About Me
              </a>
              <a
                href="/myresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-pill px-4 py-2 border border-info text-info zoom-click"
                style={{ backgroundColor: 'transparent', fontWeight: 'bold' }}
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="col-12 col-md-6 text-center" data-aos="zoom-in">
            <img
              src={profilePic}
              alt="Hitesh Kumar"
              className="img-fluid hero-img glow-aqua1"
              width="300"
              height="300"
              style={{ border: '1px solid #000000' }}
            />

            {/* Buttons for small/medium devices below image */}
            <div className="mt-4 d-flex d-md-none gap-3 flex-wrap justify-content-center">
              <a
                href="#AboutMe"
                className="btn rounded-pill px-4 py-2 glow-button"
                style={{ backgroundColor: '#0BC1C4', color: '#000000', fontWeight: 'bold' }}
              >
                More About Me
              </a>
              <a
                href="/myresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-pill px-4 py-2 border border-info text-info zoom-click"
                style={{ backgroundColor: 'transparent', fontWeight: 'bold' }}
              >
                View Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
