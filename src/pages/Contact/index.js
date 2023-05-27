import React from "react";

// Components
import ContactForm from '../../components/ContactForm';
import LocationSection from "../../components/Locations";

// Images
import heroBg from '../../includes/images/contact/desktop/bg-pattern-hero-desktop.svg';
import canada from '../../includes/images/shared/desktop/illustration-canada.svg';
import australia from '../../includes/images/shared/desktop/illustration-australia.svg';
import uk from '../../includes/images/shared/desktop/illustration-united-kingdom.svg';
import bgCircle from '../../includes/images/shared/desktop/bg-pattern-small-circle.svg';
import leaf from '../../includes/images/shared/desktop/bg-pattern-leaf.svg';

const Contact = () => {
    return (
        <main id="contact">
            <section id="contact">
                <div className="maxwidth-container mobile-full">

                    <div className="module peach row v-center mobile-full">
                        <div className="content">
                            <h1 className="primary-heading">
                                Contact Us
                            </h1>
                            <p>
                                Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
                            </p>
                            <div className="bg-pattern">
                                <img src={heroBg} aria-hidden="true"/>
                            </div>
                        </div>
                        <div className="form">
                            <ContactForm />
                        </div>
                        
                    </div>

                </div>
            </section>  

            <LocationSection />
            
        </main>
    )
}

export default Contact;