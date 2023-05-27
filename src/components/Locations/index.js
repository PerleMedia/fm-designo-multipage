import React from "react";
import { Link } from "react-router-dom";

// Images
import canada from '../../includes/images/shared/desktop/illustration-canada.svg';
import australia from '../../includes/images/shared/desktop/illustration-australia.svg';
import uk from '../../includes/images/shared/desktop/illustration-united-kingdom.svg';
import bgCircle from '../../includes/images/shared/desktop/bg-pattern-small-circle.svg';
import leaf from '../../includes/images/shared/desktop/bg-pattern-leaf.svg';

const LocationSection = () => {

    const targetTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <section id="cmp-locations">
            <div className="maxwidth-container row v-top">

                <div className="col">
                    <div className="image-wrapper">
                        <img src={canada} alt="Illustration of CN Tower in Canada" />
                        <img src={bgCircle} className="spotlight-left" aria-hidden="true"/>
                    </div>
                    
                    <h3 className="tertiary-heading">Canada</h3>
                    <Link to="/locations" className="button dark" onClick={targetTop}>See Location</Link>

                </div>
                <div className="col">
                    <div className="image-wrapper">
                        <img src={australia} alt="Illustration of the Sydney Opera House in Australia" />
                        <img src={bgCircle} className="spotlight-left" aria-hidden="true"/>
                    </div>                            
                    <h3 className="tertiary-heading">Australia</h3>
                    <Link to="/locations" className="button dark" onClick={targetTop}>See Location</Link>

                </div>
                <div className="col">
                    <div className="image-wrapper">
                        <img src={uk} alt="Illustration of the London Tower Bridge in the UK" />
                        <img src={bgCircle} className="spotlight-bottom" aria-hidden="true"/>
                    </div>
                    <h3 className="tertiary-heading">United Kingdom</h3>
                    <Link to="/locations" className="button dark" onClick={targetTop}>See Location</Link>

                </div>

            </div>
            <img src={leaf} className="leaf" aria-hidden="true"/>
        </section>
    )
}

export default LocationSection;