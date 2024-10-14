import React, { PureComponent } from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';
import $ from "jquery";
class Card extends PureComponent {

    load(){
        $('.projects .content').animate({
            // width:'100%',
            height:"100%"
        },2000);
    }


    componentDidMount() {
        this.load();
    }
    
    imgSrc = this.props.imgSrc;
    
    render() {
        let {imgSrc, title, details, tech, codeSrc, projSrc} = this.props.pro;
        return (
            <div className="col-lg-4">
                <div className="content p-2 text-white text-center">
                    <figure>
                        <img src={imgSrc} alt="project1" />
                        <figcaption className='mt-4 fs-3 fw-bold'>{title}</figcaption>
                    </figure>
                    <div className="details w-100 opacity-50 d-flex justify-content-center flex-wrap">
                        {details.map( (detail) => {return <span className='me-3 opacity-50'>{detail}</span>})}
                    </div>
                    <div className="tech mt-3 w-100 d-flex justify-content-center flex-wrap">
                        {tech.map( (detail) => {return <span className='ps-3 pe-3 me-2 mt-2'>{detail}</span>})} 
                    </div>
                    <div className="view mt-4">
                        <Link to={projSrc} target='_blank'>
                            <button className='btn btn-outline w-50 '>VIEW PROJECT</button>
                        </Link>
                        <Link to={codeSrc} target='_blank'>
                            <button className='btn btn-outline w-50 '>VIEW CODE</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card