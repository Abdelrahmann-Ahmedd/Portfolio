import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
class Navbar extends PureComponent {

    render() {
        return (
            <nav className='position-fixed shadow-lg'>
                <ul className='h-100 m-auto list-unstyled d-flex justify-content-evenly align-items-center'>
                    <li className='h-100 d-flex align-items-center'><Link className='text-decoration-none text-white' to="/home">Home</Link></li>
                    <li className='h-100 d-flex align-items-center'><Link className='text-decoration-none text-white' to="/about">Skills</Link></li>
                    <li className='h-100 d-flex align-items-center'><Link className='text-decoration-none text-white' to="/projects">Projects</Link></li>
                    <li className='h-100 d-flex align-items-center'><Link className='text-decoration-none text-white' to="/contact">Contact</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar