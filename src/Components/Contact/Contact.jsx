import React, { PureComponent } from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';
import $ from "jquery";

class Contact extends PureComponent {
    constructor(props) {
        super(props);
        // Create a ref for the form
        this.formRef = React.createRef();
    }
    load(){
        $('.contact').fadeIn(3000)
    }


    componentDidMount() {
        this.load();
    }

    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_drs4iyo', 
            'template_8919lfp', 
            this.formRef.current, 
            'pIudS756R9EQNHk3d'
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset(); // Reset the form after submission
    };

    render() {
        return (
            <div className="contact text-white" id="here">
                <div className="formContent  m-auto w-75 text-center">
                    <h1 className="w-50 m-auto mb-4">Contact</h1>
                    <p className="opacity-50 w-75 m-auto mb-5">
                        I would love to hear about your project and how I could help. Please 
                        fill in the form, and I'll get back to you as soon as possible.
                    </p>
                    <form ref={this.formRef} onSubmit={this.sendEmail} className="d-flex flex-column align-items-center">
                        <input className="mb-5 form-control w-50" type="text" name="user_name" placeholder="NAME" required/>
                        <input className="mb-5 form-control w-50" type="email" name="user_email" placeholder="EMAIL" required/>
                        <textarea className="mb-5 form-control w-50" name="message" placeholder="Message" required/>
                        <input type="submit" value="SEND MESSAGE" className="btn btn-outline-warning btn-lg" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;