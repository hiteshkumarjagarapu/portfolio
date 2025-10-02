const projects = [

     {
              title: 'Portfolio',
              tech: 'React, CSS, Bootstrap, React Icons, AOS Animations ',
              desc: 'A personal Portfolio to showcase Skills and Projects.',
              link: 'https://hiteshkumarjportfolio.netlify.app/'
       },
      
      
       {
              title: 'Jobby App',
              tech: 'React, Bootstrap, CSS, Js',
              desc: 'Developed a comprehensive job search solution,  Jobby App',
              link: 'https://hiteshjobby.ccbp.tech/'
       },
       {
              title: 'To-Do App',
              tech: 'JavaScript, CSS, Responsive layout, Bootstrap',
              desc: ' A task management solution, designed to make life easier.',
              link: 'https://hiteshtodo.ccbp.tech/'
       },
       {
              title: 'BMI Calculator',
              tech: 'JavaScript, CSS, Bootstrap, Local storage',
              desc: 'Conversational AI bot for customer support.',
              link: 'https://hiteshbmi.ccbp.tech/'
       },
       {
              title: 'Emoji Game',
              tech: 'JavaScript, Bootstrap, CSS',
              desc: 'Ranks resumes using AI based on job descriptions.',
              link: 'https://hiteshemoji.ccbp.tech/'
       },
      
       {
              title: 'Dockerized API',
              tech: 'FastAPI, Docker',
              desc: 'Containerized backend with RESTful endpoints.',
              link: 'none'
       }
];
      
export default function Projects() {
       return (
              <section id="Projects" className="section pt-0  bg-dark text-light">
                     <div className="container">
                            <div ><h2 className="text-center mb-1 fs-bold" style={{color:"#ffffff"}}>Projects</h2>


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
              width: '100px',
              boxShadow: '0 0 10px #ffffff',
              marginBottom: '40px',
            }}
          />
        </div>
                    
                            </div>



                            <div className="row gy-4">
                                   {projects.map((p, index) => (
                                          <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={p.title} data-aos="zoom-in-up" data-aos-delay={index * 100}>
                                                 <div className="project-card p-4 rounded-9 h-100">
                                                        <h4 className="project-title" style={{color:"#00ffff"}}>{p.title}</h4>
                                                        <p className="mb-1"><strong>Tech Stack:</strong> {p.tech}</p>
                                                        <p className="text-white-50">{p.desc}</p>
                                                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn project-btn btn-outline-info mt-2">
                                                               View Project
                                                        </a>
                                                 </div>
                                          </div>
                                   ))}
                            </div>
                     </div>
              </section>
       );
}