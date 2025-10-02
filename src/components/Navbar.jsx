import { scroller } from 'react-scroll';
import '../GlobalStyles.css';
    
export default function Navbar() {
     const scrollToSection = (section) => {
          scroller.scrollTo(section.replace(/\s/g, ''), {
               duration: 500,
               smooth: true,
               offset: -70,
          });
     };
    
     return (
          <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
               <div className="container">
                    <button
     className="navbar-brand btn btn-link text-decoration-none"
     onClick={() => scrollToSection('Home')}
>
     Portfolio
</button>
    
    
                    {/* Mobile Toggle Button */}
                    <button
                         className="navbar-toggler bg-white"
                         type="button"
                         data-bs-toggle="collapse"
                         data-bs-target="#navbarSections"
                         aria-controls="navbarSections"
                         aria-expanded="false"
                         aria-label="Toggle navigation"
                    >
                         <span className="navbar-toggler-icon"></span>
                    </button>
    
                    {/* Collapsible Section Buttons */}
                    <div className="collapse navbar-collapse" id="navbarSections">
                         <ul className="navbar-nav ms-auto">
                              {['Home', 'About Me', 'Skills&Cert', 'Projects', /*'Services'*/, 'Contact'].map((section) => (
                                   <li className="nav-item" key={section}>
                                        <button
                                             className="nav-button "
                                             onClick={() => scrollToSection(section)}
                                        >
                                             {section}
                                        </button>
                                   </li>
                              ))}
                         </ul>
                    </div>
               </div>
          </nav>
     );
}