import React from 'react';

const ProjectsGrid = (props) => {
    return (
        <section id="cmp-projectgrid">
            <div className="maxwidth-container">
                <div className={"grid-items-" + props.children.length}>
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default ProjectsGrid;