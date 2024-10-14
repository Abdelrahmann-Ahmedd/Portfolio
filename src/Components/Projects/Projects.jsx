import React, { PureComponent } from 'react';
import "./Projects.css";
import Card from '../Card/Card';
import imagSrc1 from "../../assets/calage.png";
import $ from 'jquery';
import imagSrc2 from "../../assets/Screenshot (336).png";
import imagSrc3 from "../../assets/Screenshot (337).png";
import imagSrc4 from "../../assets/Screenshot (338).png";
import imagSrc5 from "../../assets/Screenshot (340).png";
import imagSrc6 from "../../assets/Screenshot (341).png";
import imagSrc7 from "../../assets/Screenshot (339).png";
class Projects extends PureComponent {

    state = {
        allProjects: [
            {key:1, imgSrc: imagSrc1, title: "Age Calculator", details: ['HTML', 'CSS', 'Bootstrap', 'JS'], tech: ['Responsive'], codeSrc: "https://github.com/Abdelrahmann-Ahmedd/age-calculator-app", projSrc: "https://abdelrahmann-ahmedd.github.io/age-calculator-app/"},
            {key:2, imgSrc: imagSrc2, title: "Calculator", details: ['HTML', 'CSS', 'JS'], tech: ['Responsive'], codeSrc: "https://github.com/Abdelrahmann-Ahmedd/calculator-app", projSrc: "https://abdelrahmann-ahmedd.github.io/calculator-app/"},
            {key:3, imgSrc: imagSrc3, title: "Ecommerce Product", details: ['HTML', 'CSS', 'Bootstrap', 'JS'], tech: ['Responsive'], codeSrc: "https://github.com/Abdelrahmann-Ahmedd/ecommerce-product-page", projSrc: "https://abdelrahmann-ahmedd.github.io/ecommerce-product-page/"},
            {key:4, imgSrc: imagSrc4, title: "To Do App", details: ['HTML', 'CSS', 'Bootstrap', 'JS'], tech: ['Responsive'], codeSrc: "https://github.com/Abdelrahmann-Ahmedd/To-Do-App", projSrc: "https://abdelrahmann-ahmedd.github.io/To-Do-App/"},
            {key:5, imgSrc: imagSrc5, title: "Loopstudios", details: ['HTML', 'CSS', 'JS'], tech: ['Desktop', 'Mobile'], codeSrc: "https://github.com/Abdelrahmann-Ahmedd/loopstudios-responsive", projSrc: "https://abdelrahmann-ahmedd.github.io/loopstudios-responsive/"},
            {key:6, imgSrc: imagSrc6, title: "huddle-landing-page", details: ['HTML', 'CSS'], tech: ['Desktop', 'Mobile'], codeSrc: "https://github.com/Abdelrahmann-Ahmedd/huddle-landing-page-responsive", projSrc: "https://abdelrahmann-ahmedd.github.io/huddle-landing-page-responsive/"},
            {key:7, imgSrc: imagSrc7, title: "Easybank", details: ['React', 'Bootstrap'], tech: ['Responsive'], codeSrc: "https://github.com/Abdelrahmann-Ahmedd/Easybank", projSrc: "https://abdelrahmann-ahmedd.github.io/Easybank/#"}
        ]
    } 


    render() {
        return (
            <div className="projects container p-5">
                <div className="row mt-4 gy-3">
                    {this.state.allProjects.map( (project) => {return <Card key={project.key} pro = {project}/>})}
                </div>
            </div>
        )
    }
}

export default Projects;