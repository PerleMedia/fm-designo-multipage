import React from "react";

const PortfolioGrid = (props) => {
    return (
        <section id="cmp-portfoliogrid">
            <div className="maxwidth-container">
                {props.children}
            </div>
        </section>
    )
}

export default PortfolioGrid;