import React from 'react';
import AnimatedPage from '../AnimatedPage/AnimatedPage';

export default function About() {
  return (
    <AnimatedPage>
          <section className="container py-5">
      {/* About Me */}
      <div className="mb-5">
        <h2 className="mb-3 text-start border-warning border-start border-4 ps-3" >About Me</h2>
        <p className="lead">
          I’m a Frontend Developer passionate about crafting dynamic, responsive web applications using modern technologies like React.js, JavaScript, HTML5, and CSS3. I specialize in scalable user interfaces, smooth user experiences, and performance-optimized solutions. My toolkit includes Bootstrap, jQuery, TypeScript, and I follow best practices to build maintainable, component-based systems.
        </p>
        <p>
          I am a quick learner with a strong foundation in web fundamentals and continuously push my skills further. I'm currently enhancing my expertise in Next.js and diving into backend development with ASP.NET to become a more complete full-stack developer.
        </p>
      </div>

      {/* What I Do */}
      <div>
        <h2 className="mb-4 text-start border-start border-warning border-4 ps-3"style={{color:"rgb(201, 169, 63)"}} >What I Do</h2>
        <div className="row g-4">
          <div className="col-xl-4 col-lg-6">
            <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-4 bg-light">
              <i className="fa-solid fa-code fa-2x mb-3 text-primary"></i>
              <h5 className="card-title mb-2">UI Development</h5>
              <p className="card-text">Building clean, modern user interfaces using HTML, CSS, JavaScript, and Bootstrap with responsiveness in mind.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-4 bg-light">
              <i className="fa-brands fa-react fa-2x mb-3 text-info"></i>
              <h5 className="card-title mb-2">React Development</h5>
              <p className="card-text">Developing scalable web apps with React.js, using hooks, context API, and performance optimizations.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-4 bg-light">
              <i className="fa-solid fa-arrow-trend-up fa-2x mb-3 text-success"></i>
              <h5 className="card-title mb-2">Next.js Enhancement</h5>
              <p className="card-text">Improving project performance and structure with Next.js features like SSR, file-based routing, and API routes.</p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-4 bg-light">
              <i className="fa-solid fa-database fa-2x mb-3 text-warning"></i>
              <h5 className="card-title mb-2">.NET Learning</h5>
              <p className="card-text">Exploring backend development using ASP.NET to build full-stack applications and strengthen my backend logic.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </AnimatedPage>
  );
}

