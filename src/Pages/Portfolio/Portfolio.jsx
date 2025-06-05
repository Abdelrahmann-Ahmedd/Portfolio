import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedPage from '../AnimatedPage/AnimatedPage';
import imageSrc01 from '../../assets/Screenshot (122).png';
import imageSrc02 from '../../assets/Screenshot (123).png';
import imageSrc03 from '../../assets/Screenshot (124).png';
import imageSrc04 from '../../assets/Screenshot (125).png';
import imageSrc05 from '../../assets/Screenshot (126).png';
import imageSrc06 from '../../assets/Screenshot (127).png';
import imageSrc07 from '../../assets/Screenshot (128).png';
export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Movie App',
      description: 'A responsive Movie website using React and Bootstrap.',
      category: 'frontend',
      url: 'https://abdelrahmann-ahmedd.github.io/movie/',
      image: imageSrc03
    },
    {
      id: 2,
      title: 'Employee System',
      description: 'A RESTful API built with Java and Springboot and React.',
      category: 'fullstack',
      url: 'https://github.com/Abdelrahmann-Ahmedd/React-Spring-FullStack-CRUD-System',
      image: imageSrc07
    },
    {
      id: 3,
      title: 'WorkOut',
      description: 'Make and control the training plan with React and Redux',
      category: 'frontend',
      url: 'https://abdelrahmann-ahmedd.github.io/WorkOut/',
      image: imageSrc06
    },
    {
      id: 4,
      title: 'E-commerce Store',
      description: 'Full e-commerce store with React and ContextAPI.',
      category: 'frontend',
      url: 'https://abdelrahmann-ahmedd.github.io/e-commerce/',
      image: imageSrc05
    },
    {
      id: 5,
      title: 'Rest Country',
      description: 'A responsive Country website using React and Bootstrap.',
      category: 'frontend',
      url: 'https://abdelrahmann-ahmedd.github.io/RestCountry/',
      image: imageSrc04
    },
    {
      id: 6,
      title: 'To-Do-App',
      description: 'A responsive todolist website using Html Css Bootstrap Js.',
      category: 'design',
      url: 'https://abdelrahmann-ahmedd.github.io/To-Do-App/',
      image: imageSrc01
    },
    {
      id: 7,
      title: 'Product Page',
      description: 'A responsive Product page website using Html Css Js and Bootstrap.',
      category: 'design',
      url: 'https://abdelrahmann-ahmedd.github.io/ecommerce-product-page/',
      image: imageSrc02
    },
  ];

  const categories = ['all', 'frontend', 'fullstack', 'design'];
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  return (
    <AnimatedPage>
      <div className="container py-5" style={{ minHeight: '70vh' }}>
        {/* Header */}
        <h1
          className="mb-4"
          style={{
            borderBottom: '3px solid rgba(201, 169, 63, 0.67)',
            paddingBottom: '8px',
            fontWeight: '700',
            width: 'fit-content',
            color: 'white',
          }}
        >
          My Projects
        </h1>

        {/* Categories */}
        <div className="mb-4 d-flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn ${
                selectedCategory === cat ? 'btn-warning text-dark' : 'btn-outline-light'
              } btn-sm px-3`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.length === 0 && (
            <p className="text-light">No projects found in this category.</p>
          )}
          {filteredProjects.map(project => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div
                  className="card h-100 bg-dark border-0 shadow-lg"
                  style={{
                    borderRadius: '10px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                  }}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-img-top"
                      style={{
                        height: '200px',
                        width: '100%',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        transition: 'opacity 0.3s',
                      }}
                    />
                  )}
                  <div className="card-body">
                    <h6 className="text-warning">{project.category.toUpperCase()}</h6>
                    <h5 className="card-title text-white">{project.title}</h5>
                    <p className="card-text text-light" style={{ fontSize: '0.95rem' }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}
