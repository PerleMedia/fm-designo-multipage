import React from "react";

// Components
import InnerpageHeader from '../../../components/InnerpageHeader';
import ProjectsGrid from '../../../components/ProjectsGrid';
import ProjectsLink from '../../../components/ProjectsLink';
import ContactModule from '../../../components/ContactModule';
import PortfolioGrid from '../../../components/PortfolioGrid';
import PortfolioItem from '../../../components/PortfolioItem';

// Images
import bg from '../../../includes/images/graphic-design/desktop/bg-pattern-intro-graphic.svg';
import boxedWater from '../../../includes/images/graphic-design/desktop/image-boxed-water.jpg';
import change from '../../../includes/images/graphic-design/desktop/image-change.jpg';
import science from '../../../includes/images/graphic-design/desktop/image-science.jpg';


const GraphicDesign = () => {
    let portfolioItems = [
        {
            title:'Tim Brown',
            description:"A book cover designed for Tim Brown's new release, 'Change'",
            image: change
        },
        {
            title:'Boxed Water',
            description:'A simple packaging concept made for Boxed Water',
            image: boxedWater
        },
        {
            title:'Science!',
            description:'A poster made in collaboration with the Federal Art Project',
            image: science
        }
    ]
    return (
        <main id="portfolio">
            <InnerpageHeader
                title="Graphic Design"
                description="We deliver eye-catching branding materials that are 
                tailored to meet your business objectives."
                bg={bg} />

            <PortfolioGrid>
                {portfolioItems.map(item => {
                    return (
                        <PortfolioItem 
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    )
                })}
            </PortfolioGrid> 

            <ProjectsGrid>
                <ProjectsLink type="App"/>
                <ProjectsLink type="Web"/>
            </ProjectsGrid>

            <ContactModule />
        </main>
    )
}

export default GraphicDesign;