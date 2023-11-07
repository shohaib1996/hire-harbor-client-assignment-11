import { useContext } from "react";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import { PropTypes } from 'prop-types';


const ContactUs = ({ sendEmail, form }) => {
    const { user } = useContext(AuthContext)
    const message = "Thanks For applying"


    return (
        <form className="hidden" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" defaultValue={user?.displayName} name="user_name" />
            <label>Email</label>
            <input type="email" defaultValue={user?.email} name="user_email" />
            <label>Message</label>
            <textarea name="message" defaultValue={message}/>
            <input type="submit"  value="Send" />
        </form>
    );
};
ContactUs.propTypes = {
    sendEmail: PropTypes.func,
    form: PropTypes.object
}

export default ContactUs;