import './Contact.scss'; 
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";
import oldManShirt from './oldManShirt.jpeg'; 

export const Contact = () => {
    return (
        <section id='contact'>
            <h1 className='section-title'>CONTACT ME</h1>
            <hr></hr>
            <section className='project-card contact-card'>
                <img src={oldManShirt} className='contact-photo' alt='julia in an old man shirt'></img>
                <h3>Let's connect!</h3>
                <div className='contact-icons'>
                    <FaLinkedin size={40} onClick={() => window.open("https://www.linkedin.com/in/julia-iwinski-898540138/")}/>
                    <FaEnvelope size={40} onClick={() => window.open("https://www.juliaiwinski@gmail.com")}/>
                    <FaGithubSquare size={40} onClick={() => window.open("https://github.com/jgiwinski/")}/>
                </div>
            </section>
        </section>
    )
}