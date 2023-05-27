import React from "react";

const PortfolioItem = (props) => {
    return (
        <div class="cmp-portfolioitem">
            <img src={props.image} alt={`Screenshot of digital design for the ${props.title} portfolio item`} />
            
            <div class="content">
                <h3 class="tertiary-heading">{props.title}</h3>
                <p>{props.description}</p>
            </div>
            
        </div>
    )
}

export default PortfolioItem;