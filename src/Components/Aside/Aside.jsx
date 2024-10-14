import React, { PureComponent } from 'react';
import './Aside.css';
import imgSrc from '../../assets/66468364.jpg';
import { Link } from 'react-router-dom';

class Aside extends PureComponent {
    render() {
        return (
        <aside className="aside vh-100 ">
            {/* Profile Image */}
            <div className='content h-100 position-fixed d-flex flex-column align-items-center justify-content-between py-5 text-white'>
                <figure className="mb-4">
                    <img src={imgSrc} alt="Abdelrahman Ahmed" />
                </figure>
                <h3>Hiring Now</h3>

                {/* Contact Details */}
                <div className="details text-center">
                    <p>Email: <a href="mailto:abdelrahman.w164@gmail.com" className="text-white">abdelrahman.w164@gmail.com</a></p>
                    <p>Phone: <a href="tel:+201004568918" className="text-white">+20 100 456 8918</a></p>
                </div>

                {/* Social Icons */}
                <div className="icon mt-4 d-flex justify-content-center">
                    <a href="https://www.linkedin.com/in/abdelrahman-ahmed-27457a316" className="" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                    <a href="https://github.com/Abdelrahmann-Ahmedd/Abdelrahmann-Ahmedd" aria-label="GitHub">
                        <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                </div>

                {/* Buttons */}
                <div className="but mt-5">
                    <Link to="/contact" className='btn btn-outline-lg me-2'>
                        Contact Me
                    </Link>
                    <Link to="https://drive.google.com/file/d/1ILCFMxu-Wn137lID5WJcuKhAPduEkOtZ/view?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">See My Resume</Link>
                </div>
            </div>
        </aside>
        );
    }
    }

export default Aside;
