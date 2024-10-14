import React, { PureComponent } from 'react';
import "./About.css";
import $ from "jquery";
import imgSrc from "../../assets/jquery-4.svg";
class About extends PureComponent {

    load(){
        $('.about').animate({
            width:'100%',
            height:"100%",
        },2000)
    }


    componentDidMount() {
        this.load();
    }



    render() {
        return (
            <div className="about d-flex flex-wrap justify-content-center align-items-center align-content-around">
                <div className='html w-25 d-flex flex-column align-items-center'>
                    <i class="fa-brands fa-5x fa-html5"></i>
                    <div className='text-white fs-2 fw-bold'>HTML</div>
                </div>
                <div className='text-info  w-25 d-flex flex-column align-items-center'>
                    <i class="fa-brands fa-5x fa-css3-alt"></i>
                    <div className='text-white fs-2 fw-bold'>CSS</div>
                </div>
                <div className='bootstrap w-25 d-flex flex-column align-items-center'>
                    <i class="fa-brands fa-5x fa-bootstrap"></i>
                    <div className='text-white fs-2 fw-bold'>Bootstrap</div>
                </div>
                <div className='text-warning w-25  d-flex flex-column align-items-center'>
                    <i class="fa-brands fa-5x fa-square-js"></i>
                    <div className='text-white fs-2 fw-bold'>JavaScript</div>
                </div>
                <div className='jquery text-white fs-2 fw-bold w-25 d-flex flex-column align-items-center '>
                    <img src={imgSrc} alt="jquery logo" />
                    <div className='text-white fs-2 fw-bold'>jQuery</div>
                </div>
                <div className='text-info w-25 d-flex flex-column align-items-center'>
                    <i class="fa-brands fa-5x fa-react"></i>
                    <span className='text-white fs-2 fw-bold w-25 '>React</span>
                </div>
            </div>
        )
    }
}

export default About;