import React from 'react';
import AnimatedPage from './../AnimatedPage/AnimatedPage';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Resume.css'

export default function Resume() {
  return (
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -50 }}
  transition={{
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94], // easeInOutQuad
  }}
  style={{
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
  }}
  >
      <div className="container py-5 text-white">
        <h2 className="text-start border-start border-4 border-warning ps-3 mb-5 fw-bold" >Resume</h2>
        <section className="resume-section mt-5">
          <h2 className="mb-4  " style={{color:"rgb(201, 169, 63)"}}>Education</h2>
          <div className="position-relative ps-4 ms-3 border-start border-2 border-warning">
            <div className="position-relative mb-5">
              <span className="position-absolute translate-middle p-2 bg-warning rounded-circle"
                style={{top:"15px" ,left:"-24.5px"}}>
              </span>
              <h4 className="mb-1">Bachelor of Computers and Artificial Intelligence</h4>
              <h5 className="text-muted">Information Technology – Cairo University</h5>
              <p className="mb-1"><strong>Sep 2020 – Jun 2024</strong> — Cairo, Egypt</p>
              <ul className="mb-0">
                <li>Majored in Artificial Intelligence, Software Development, and Data Structures</li>
                <li>Proficient in Java, Python, C++, JavaScript, and MySQL</li>
                <li>Strong foundation in Algorithms, OOP, and DBMS</li>
                <li>Completed projects in web dev, AI systems, and algorithm problems</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Experience Timeline */}
        <section className="mb-5">
          <h3 className=" mb-4" style={{color:"rgb(201, 169, 63)"}}>Experience</h3>
          <div className="position-relative border-start border-3 border-warning ps-4">
          <div className="mb-4 position-relative">
              <span className="position-absolute  translate-middle p-2 bg-warning rounded-circle" style={{top:"12px" ,left:"-25px"}}></span>
              <h5 className="fw-bold">Web Developer Intern <small className="text-muted">@ CodSoft</small></h5>
              <p className="text-muted mb-1">Sep 2023 – Oct 2023 · Remote</p>
              <ul>
                <li>Optimized HTML, CSS, and JS to increase workflow efficiency.</li>
                <li>Delivered 3+ project modules ahead of schedule.</li>
                <li>Received certificate of completion for outstanding performance.</li>
              </ul>
            </div>
            <div className="mb-4 position-relative">
              <span
                className="position-absolute translate-middle p-2 bg-warning rounded-circle hiring-pulse"
                style={{ top: "12px", left: "-25px" }}
              ></span>
              <h5 className="fw-bold">Frontend Instructor <small className="text-muted">@ Black Horse</small></h5>
              <p className="text-muted mb-1">Present · Cairo</p>
              <ul>
                <li>Designed and delivered a frontend development course (HTML, CSS, Bootstrap, JS, React.js).</li>
                <li>Provided hands-on training and real-world projects to students.</li>
                <li>Focused on web app development and responsive design.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h3 className=" mb-4" style={{color:"rgb(201, 169, 63)"}}>Skills</h3>
          <div className="row">
            <div className="col-xl-6 mb-3">
              <h5 className="fw-bold">Frontend Technologies</h5>
              <p>JavaScript, ReactJS, Next.js, HTML5, CSS3, SCSS/SASS, TypeScript, ContextAPI</p>
            </div>
            <div className="col-xl-6 mb-3">
              <h5 className="fw-bold">Libraries & Frameworks</h5>
              <p>React Router, Axios, Formik, YUP, jQuery, Bootstrap, Redux, tailwindcss, FarmerMotion</p>
            </div>
            <div className="col-xl-6 mb-3">
              <h5 className="fw-bold">Version Control & Tools</h5>
              <p>Git, GitHub, Vite, Postman</p>
            </div>
            <div className="col-xl-6 mb-3">
              <h5 className="fw-bold">Programming Knowledge</h5>
              <p>Data Structures, Algorithms, OOP, Java, Python, C#, Datebase</p>
            </div>
            <div className="col-xl-6 mb-3">
              <h5 className="fw-bold">Soft Skills</h5>
              <p>Team Collaboration, Communication Skills, Time Management, Problem Solving</p>
            </div>
            <div className="col-xl-6 mb-3">
              <h5 className="fw-bold">Languages</h5>
              <p>English, Arabic</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
