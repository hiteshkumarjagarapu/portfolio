import profilePic from '../assets/devimg3.png';
     
export default function About() {
      return (
            <section id="AboutMe" className="section "      data-aos="fade-up">
                  <div className="container">
                       
                        {/* Photo + Text Layout */}
                        <div className="row align-items-center" >
                              <div className="col-md-4 text-center mb-4 mb-md-0" >
                                    <img
                                                src={profilePic}
                                                alt="Developer"
                                                className="profile-img img-fluid glow-aqua"
                                                style={{ border: '2px solid #0BC1C4' }}
                                                width="300"
                                                height="300"
                                                />
                              </div>
                             
     
                              <div className="col-md-8">
                                    <h2>About <span style={{color:'#0BC1C4'}}>Me</span></h2>
                                    <br/>
                                    <h4>Full Stack developer!</h4>
                                    <br/>
                                    <p>
                                          I'm Hitesh Kumar, a Full Stack Developer passionate about building fast, scalable, and user-friendly web applications. I specialize in React for the frontend and FastAPI for the backend, with growing experience in deploying cloud-native solutions as I continue learning AWS. I'm also currently exploring AI technologies — from integrating smart APIs to understanding how machine learning can enhance real-world applications. Whether it's automating workflows or experimenting with intelligent tools, I love turning ideas into impactful digital solutions.
                                    </p>
                              </div>
                        </div>
                  </div>
            </section>
      );
}