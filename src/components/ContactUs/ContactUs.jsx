import { useContext, useRef } from "react";
import emailjs from '@emailjs/browser';

import { AuthContext } from "../../AuthProvider/AuthProvider";
import { PropTypes } from 'prop-types';

import Footer from "../../SharedComponents/Footer/Footer";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import toast from "react-hot-toast";


const ContactUs = () => {
    const form = useRef();
    const { user } = useContext(AuthContext)


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nbmux6f', 'template_t3455i9', form.current, 'N7sCXhxC1NSQ36mKf')
            .then((result) => {
                console.log(result.text);
                if(result.text){
                    toast.success("Your Message Has been sent", {duration: 5000})
                }
            }, (error) => {
                console.log(error.text);
            });
    };





    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-3xl mx-auto bg-white mt-24 mb-24 p-5">
                <p className="text-center mb-8 font-bold text-3xl text-green-500">Contact Us</p>
                <form className="flex flex-col space-y-4" ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered input-info w-full" />
                    <label>Email</label>
                    <input type="email" defaultValue={user?.email} name="user_email" placeholder="Name" className="input input-bordered input-info w-full" />
                    <label>Message</label>
                    
                    <textarea name="message" className="textarea textarea-accent" placeholder="What You Want to know?"></textarea>
                    <input className="btn btn-block bg-lime-400 text-white font-bold hover:bg-green-600" type="submit" value="Send" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};
ContactUs.propTypes = {
    sendEmail: PropTypes.func,
    form: PropTypes.object
}

export default ContactUs;