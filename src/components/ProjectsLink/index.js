import React from 'react';
import { Link } from 'react-router-dom';

// Images
import bgWeb from '../../includes/images/home/desktop/image-web-design-large.jpg';
import bgApp from '../../includes/images/home/desktop/image-app-design.jpg';
import bgGraphic from '../../includes/images/home/desktop/image-graphic-design.jpg';
import arrow from '../../includes/images/shared/desktop/icon-right-arrow.svg';

const ProjectsLink = (props) => {
    let bg = "";
    let pagePath = "#"

    if (props.type == "Web") {
        bg = bgWeb;
        pagePath = "/projects/web-design"
    } else if (props.type == "App") {
        bg = bgApp;
        pagePath = "/projects/app-design"
    } else if (props.type == "Graphic") {
        bg = bgGraphic;
        pagePath = "/projects/graphic-design"
    }

    const targetTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <Link to={pagePath} id="cmp-projectlink" onClick={targetTop()} className="module" style={{backgroundImage:`url(${bg})`}} aria-role="button" aria-label={`View ${props.type} design projects`}>
            <div className="overlay"></div> 
            <div className="content-wrap">
                <h2 className="secondary-heading">
                    {props.type} Design
                </h2>
                <span className="link tertiary-heading">View Projects <img src={arrow} aria-hidden="true" /></span>
            </div>
            
        </Link>
    )
}

export default ProjectsLink;