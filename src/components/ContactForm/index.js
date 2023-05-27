import React from "react";

const ContactForm = () => {
    return (
        <div id="cmp-contactform">

            <form>
                <input placeholder="Name" type="text"></input>
                <input placeholder="Email Address" type="text"></input>
                <input placeholder="Phone" type="text"></input>
                <textarea placeholder="Your Message"></textarea>
                <input type="submit" className="button light" value="Submit"></input>

            </form>

        </div>
    )
}

export default ContactForm;