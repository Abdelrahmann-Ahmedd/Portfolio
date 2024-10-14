import React, { PureComponent } from 'react';
import "./Home.css";
import Typed from 'typed.js';
import $ from 'jquery';

class Home extends PureComponent {
    load(){
        $('.home').animate({
            // width:'100%',
            height:"100%"
        },2000);
    }


    componentDidMount() {
        const options = {
            strings: [' Front-End Developer.', ' React Developer.', ' UI Developer.'], // Add any titles you want
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            loop: true,
            showCursor: true,
        };
        this.typed = new Typed(this.el, options);
        this.load();
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
            <div className="home bg-dark d-flex">
                <div className="layer  text-center d-flex align-items-center">
                    <div className="p-5 text-white w-75 m-auto">
                        <h2 className='fs-4'>Hello, I'm 
                            <div className="name fs-1 fw-bolder">Abdelrahman Ahmed</div>
                            And I'm a <span> </span>  
                            <span className="title" ref={el => { this.el = el; }}></span>
                        </h2>
                        <p className='opacity-50'>
                            I have a solid understanding of network fundamentals and cloud technologies,
                            and I’m always eager to learn more and stay updated with the latest advancements in tech.
                            My core strategy is to continuously develop my web technology skills 
                            by enhancing my knowledge in modern technologies and staying updated with advancements.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;