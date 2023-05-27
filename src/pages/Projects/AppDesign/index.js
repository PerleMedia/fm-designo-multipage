import React from "react";

// Components
import InnerpageHeader from '../../../components/InnerpageHeader';
import ProjectsGrid from '../../../components/ProjectsGrid';
import ProjectsLink from '../../../components/ProjectsLink';
import ContactModule from '../../../components/ContactModule';
import PortfolioGrid from '../../../components/PortfolioGrid';
import PortfolioItem from '../../../components/PortfolioItem';

// Images
import bg from '../../../includes/images/app-design/desktop/bg-pattern-intro-app.svg';
import airfilter from '../../../includes/images/app-design/desktop/image-airfilter.jpg'
import eyecam from '../../../includes/images/app-design/desktop/image-eyecam.jpg'
import faceit from '../../../includes/images/app-design/desktop/image-faceit.jpg'
import todo from '../../../includes/images/app-design/desktop/image-todo.jpg'
import loopstudios from '../../../includes/images/app-design/desktop/image-loopstudios.jpg'

const AppDesign = () => {
    let portfolioItems = [
        {
            title:'Airfilter',
            description:"Solving the problem of poor indoor air quality by filtering the air",
            image: airfilter
        },
        {
            title:'Eyecam',
            description:'Product that lets you edit your favorite photos and videos at any time',
            image: eyecam
        },
        {
            title:'Faceit',
            description:'Get to meet your favorite internet superstar with the faceit app',
            image: faceit
        },
        {
            title:'Todo',
            description:'A todo app that features cloud sync with light and dark mode',
            image: todo
        },
        {
            title:'Loopstudios',
            description:'A VR experience app made for Loopstudios',
            image: loopstudios
        }
    ]
    return (
        <main id="portfolio">
            <InnerpageHeader
                title="App Design"
                description="Our mobile designs bring intuitive digital solutions
                to your customers right at their fingertips."
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
                <ProjectsLink type="Web"/>
                <ProjectsLink type="Graphic"/>
            </ProjectsGrid>

            <ContactModule />
        </main>
    )
}

export default AppDesign;