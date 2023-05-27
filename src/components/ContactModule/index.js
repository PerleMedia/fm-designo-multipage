import React from "react";
import { Link } from "react-router-dom";

// Images
import bg from '../../includes/images/shared/desktop/bg-pattern-call-to-action.svg';

const ContactModule = () => {
    const targetTop = () => {
        window.scrollTo(0,0)
    }
    return (
        <section id="cmp-contactmodule">
            <div className="maxwidth-container">
                
                <div className="module peach row v-center" style={{backgroundImage:`url(${bg})`}}>
                    <div className="content">
                        <h3 className="primary-heading">
                            Let's talk about your project
                        </h3>
                        <p>
                            Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                        </p>
                        
                    </div>
                    <div className="cta">
                        <Link to="/contact" className="button light" onClick={targetTop}>Get in Touch</Link>
                    </div>
                </div>

            </div>
            <div className="footer-top"></div>
        </section>
    )
}

export default ContactModule;