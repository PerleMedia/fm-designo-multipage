import React from "react";

// Images 
import leaf from '../../includes/images/shared/desktop/bg-pattern-leaf.svg';

const InnerpageHeader = (props) => {
    return (
        <section id="cmp-innerpageheader">
            <div className="maxwidth-container mobile-full">

                <div className={`module peach ${props.bgalign} mobile-full`} style={{backgroundImage:`url(${props.bg})`}}>
                    <h1 className="primary-heading">{props.title}</h1>
                    <p>{props.description}</p>
                </div>

            </div>

            <img src={leaf} className="leaf" aria-hidden="true"/>
        </section>
    )
}

export default InnerpageHeader;