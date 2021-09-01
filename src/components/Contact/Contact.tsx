import './Contact.scss'; 
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
    return (
        <section id='contact'>
            <h1 className='section-title'>CONTACT ME</h1>
            <hr></hr>
            <img ></img>
            <h3>Let's connect!</h3>
            <div>
                <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/julia-iwinski-898540138/")}/>
                <FaGithubSquare onClick={() => window.open("https://github.com/jgiwinski/")}/>
                <FaEnvelope onClick={() => window.open("https://www.juliaiwinski@gmail.com")}/>
            </div>
        </section>
    )
}