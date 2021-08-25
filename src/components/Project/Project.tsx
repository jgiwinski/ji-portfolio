import './Project.scss'; 

type project = {
    name: string, 
    github: string, 
    deploy: string, 
    desc: string, 
    stack: string[],
    media: string[]
}

export const Project = ({ name, github, deploy, desc, stack, media }: project ) => {

    return (
        <article>
            <h3>{name}</h3>
            <div>
                <section>
                    <p>{desc}</p>
                </section>
                <section>
                    <h5>TECH STACK</h5>
                    {stack.map(name => <li key={name}><p>{name}</p></li>)}
                </section>
                <section>
                    <img></img>
                </section>
            </div>
            <div>
                <button>CODE</button>
                <button>DEPLOYED</button>
            </div>
        </article>
    )
}