import { Project } from '../Project/Project';
import { projectData } from '../../data/projectData'; 

export const Projects = () => {

    const allProjects = projectData.map(project => {
        return <Project 
        name = {project.name}
        github =  {project.github}
        deploy = {project.deploy} 
        desc = {project.desc}
        stack = {project.stack}
        media = {project.media}
    />
})

    return (
        <section id='projects' >
            <h2 className='section-title'>PROJECTS</h2>
            <hr></hr>
            {allProjects}
        </section>
    )
}