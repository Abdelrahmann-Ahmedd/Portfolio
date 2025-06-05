import React from 'react';
import imageSrc from "../../assets/stylish-spectacles-guy-3d-avatar-character-illustrations-png.webp";
import './Aside.css';
import { Link } from 'react-router';

export default function Aside() {
  const contactItems = [
    {
      icon: "fa-regular fa-envelope",
      title: "Email",
      detail: "abdelrahman.w164@gmail.com",
    },
    {
      icon: "fa-solid fa-mobile",
      title: "Phone",
      detail: "(+20) 100-456-8918",
    },
    {
      icon: "fa-solid fa-briefcase",
      title: "Experience",
      detail: "Frontend Instructor",
    },
    {
      icon: "fa-solid fa-location-dot",
      title: "Location",
      detail: "Cairo in Egypt",
    },
  ];

  return (
    <aside className="aside-container bg-dark text-white p-4 rounded">
      {/* Profile Image & Info */}
      <div className="profile text-center mb-4">
        {/* Large image on desktop */}
        <div className='w-100 d-flex justify-content-center'>
          <img
            className="profile-img-large rounded-circle mb-3"
            src={imageSrc}
            alt="profile"
          />
        </div>
        {/* Small image for mobile */}
        <div className='smalling'>
          <img
            className="profile-img-small rounded-circle mb-3"
            src={imageSrc}
            alt="profile"
          />
        </div>

        <h2 className="fs-4 mb-1 name">Abdelrahman Ahmed</h2>
        <h3
          className="fs-6 mt-3 p-2 rounded-1 w-75 m-auto fw-light role"
          style={{ backgroundColor: "rgba(105, 105, 105, 0.21)" }}
        >
          Software Engineer
        </h3>
        <hr className="my-3 separator" />
      </div>

      {/* Contact Info */}
      <ul className="list-unstyled contact-list">
        {contactItems.map(({ icon, title, detail }) => (
          <li key={title} className="d-flex align-items-center mb-3 contact-item">
            <div className="icon-container me-3 text-center">
              <i className={`${icon} fs-5`} style={{ color: "rgba(201, 169, 63, 0.67)" }}></i>
            </div>
            <div className="contact-text">
              <h4 className="fs-6 fw-light mb-1 opacity-75 contact-title">{title}</h4>
              <p className="fs-6 mb-0 contact-detail">{detail}</p>
            </div>
          </li>
        ))}
      </ul>

      <ul className="list-unstyled w-100 d-flex justify-content-center social-icons">
        <li className="me-3">
          <Link className='text-white' target='_blank' to="https://github.com/Abdelrahmann-Ahmedd"><i className="fa-brands fa-github fs-5"></i></Link>
        </li>
        <li className="me-3">
          <Link className=' text-white' target='_blank' to= "https://www.linkedin.com/in/abdelrahman-ahmed-27457a316/"><i className="fa-brands fa-linkedin fs-5"></i></Link>
          
        </li>
      </ul>
    </aside>
  );
}
