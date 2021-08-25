import './Header.scss'; 
import  profile from './prof.jpeg'; 

export const Header = () => {
    return (
        <header id='home'>
            <section>
                <img src={profile} alt='Julia' className='prof-photo'/>
            </section>
            <section className="site-title">
                <h1 className="julia-name">J u l i a &nbsp; I w i n s k i</h1>
                <div className="ms-slider">
                    <ul className="ms-slider__words">
                        <li className="ms-slider__word">Software Engineer</li>
                        <li className="ms-slider__word">Hiker & Plant Mom</li>
                        <li className="ms-slider__word">Web Developer</li>
                        <li className="ms-slider__word">Software Engineer</li>
                    </ul>
                    </div>
            </section>
        </header>
    )
}