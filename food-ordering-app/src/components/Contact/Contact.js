import { useState } from "react";
import "./Contact.css";
const Contact = () => {
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) =>{
        setFormData({...formdata, [e.target.name]:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formdata);
        alert("Message sent!!!");
        //Reset form
        setFormData({name: "", email:"", message:""});
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Have any questions? Please send us a message.</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <input 
                type="text"
                name="name"
                placeholder="Your Name"
                value={formdata.name}
                onChange={handleChange}
                required
                />
                <input 
                type="text"
                name="email"
                placeholder="Your Email"
                value={formdata.email}
                onChange={handleChange}
                required
                />
                <textarea 
                type="text"
                name="message"
                placeholder="Your Message"
                value={formdata.message}
                onChange={handleChange}
                required>
               </textarea>
               <button type="submit">Send Message</button> 
            </form>
        </div>
    );
};

export default Contact;