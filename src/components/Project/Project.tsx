import './Project.scss'; 

type project = {
    name: string, 
    github: string, 
    deploy: string, 
    desc: string, 
    stack: string[],
    media: string
}

export const Project = ({ name, github, deploy, desc, stack, media }: project ) => {

    return (
        <article className='project-card'>
            <h3 className='project-title'>{name}</h3>
            <div className='project-details'>
                <section className='project-desc'>
                    <p className='bottom-space'>{desc}</p>
                    <div className='tech-card'>
                        <h4>TECH STACK:</h4>
                        <div className='tech-stack'>
                        {stack.map(name => <p>{name}</p>)}
                        </div>
                    </div>
                </section>
                <section>
                    <img src={media} className='project-media' alt={name}/>
                    <div className='project-links'>
                        <a href={github} className='code-link'>CODE</a>
                        <a href={deploy} className='deploy-link'>DEPLOYED</a>
                    </div>
                </section>
            </div>
        </article>
    )
}