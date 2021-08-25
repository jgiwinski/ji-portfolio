import './Navbar.scss'; 
import { NavHashLink } from 'react-router-hash-link';

export const Navbar = () => {
    return (
            <nav className='navbar-container'>
                <NavHashLink smooth to="#home" className='nav-btn'>Home</NavHashLink>
                <NavHashLink smooth to="#projects" className='nav-btn'>Projects</NavHashLink>
                <NavHashLink smooth to="#workexp" className='nav-btn'>Work Experience</NavHashLink>
                <NavHashLink smooth to="#education" className='nav-btn'>Education</NavHashLink>
                <NavHashLink smooth to="#hobbiesmisc" className='nav-btn'>Hobbies & Misc.</NavHashLink>
                <NavHashLink smooth to="#contact" className='nav-btn'>Contact</NavHashLink>
            </nav>
    )
}