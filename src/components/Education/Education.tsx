import './Education.scss'; 
import { FaCode, FaChartBar, FaRegClipboard } from 'react-icons/fa'; 

export const Education = () => {
    return (
        <section id='education'> 
            <h2 className='section-title'>EDUCATION</h2>
            <hr></hr>
            <section className='edu-container'>
                <article className='project-card edu-card'>
                    <h3 className='edu-program'>Software Engineering</h3>
                    <div className='edu-icon'><FaCode/></div>
                    <h4>Turing School of Software & Design</h4>
                    <h4>Certification</h4>
                    <h5>Oct 2020 - June 2021</h5>
                </article>
                <article className='project-card edu-card'>
                    <h3 className='edu-program'>Data Analysis</h3>
                    <div className='edu-icon'><FaChartBar/></div>
                    <h4>University of Arizona</h4>
                    <h4>Certification</h4>
                    <h5>Aug 2019 - Feb 2020</h5>
                </article>
                <article className='project-card edu-card'>
                    <h3 className='edu-program'>Project Management</h3>
                    <div className='edu-icon'><FaRegClipboard/></div>
                    <h4>Liberty University</h4>
                    <h4>Bachelors of Science</h4>
                    <h5>Aug 2015 - May 2017</h5>
                </article>
            </section>
        </section>
    )
}