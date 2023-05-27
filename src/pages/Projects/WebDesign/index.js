import React from "react";

// Components
import InnerpageHeader from '../../../components/InnerpageHeader';
import ProjectsGrid from '../../../components/ProjectsGrid';
import ProjectsLink from '../../../components/ProjectsLink';
import ContactModule from '../../../components/ContactModule';
import PortfolioGrid from '../../../components/PortfolioGrid';
import PortfolioItem from '../../../components/PortfolioItem';

// Images
import bg from '../../../includes/images/web-design/desktop/bg-pattern-intro-web.svg';
import express from '../../../includes/images/web-design/desktop/image-express.jpg';
import transfer from '../../../includes/images/web-design/desktop/image-transfer.jpg';
import photon from '../../../includes/images/web-design/desktop/image-photon.jpg';
import builder from '../../../includes/images/web-design/desktop/image-builder.jpg';
import blogr from '../../../includes/images/web-design/desktop/image-blogr.jpg';
import camp from '../../../includes/images/web-design/desktop/image-camp.jpg';


const WebDesign = () => {
    let portfolioItems = [
        {
            title:'Express',
            description:'A multi-carrier shipping website for ecommerce businesses',
            image: express
        },
        {
            title:'Transfer',
            description:'Site for low-cost money transfers and sending money within seconds',
            image: transfer
        },
        {
            title:'Photon',
            description:'A state-of-the-art music player with high-resolution audio and DSP effects',
            image: photon
        },
        {
            title:'Builder',
            description:'Connects users with local contractors based on their location',
            image: builder
        },
        {
            title:'Blogr',
            description:'Blogr is a platform for creating an online blog or publication',
            image: blogr
        },
        {
            title:'Camp',
            description:'Get expert training in coding, data, design, and digital marketing',
            image: camp
        },
    ]
    return (
        <main id="portfolio">
            <InnerpageHeader
                title="Web Design"
                description="We build websites that serve as powerful marketing tools 
                and bring memorable brand experiences."
                bg={bg}
                bgalign="attach-right" />

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
                <ProjectsLink type="Graphic"/>
            </ProjectsGrid>

            <ContactModule />
        </main>
    )
}

export default WebDesign;