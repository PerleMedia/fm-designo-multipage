import React from 'react';
import { Link } from 'react-router-dom';

// Components
import ProjectsGrid from '../../components/ProjectsGrid';
import ProjectsLink from '../../components/ProjectsLink';
import ContactModule from '../../components/ContactModule';

// Images
import phone from '../../includes/images/home/desktop/image-hero-phone.png';
import bgCircle from '../../includes/images/home/desktop/bg-pattern-hero-home.svg';
import bgCircleSm from '../../includes/images/shared/desktop/bg-pattern-small-circle.svg';
import leaf from '../../includes/images/shared/desktop/bg-pattern-leaf.svg';
import illuPassion from '../../includes/images/home/desktop/illustration-passionate.svg';
import illuResource from '../../includes/images/home/desktop/illustration-resourceful.svg';
import illuFriendly from '../../includes/images/home/desktop/illustration-friendly.svg';

const Home = () => {
    const targetTop = () => {
        window.scrollTo(0,0)
    }
    return (
        <main id="home">
            
                <section id="welcome">
                    <div className="maxwidth-container mobile-full">

                        <div className="module peach row v-center mobile-full">
                            <div className="content">
                                <h1 className="primary-heading">
                                    Award-winning custom designs and digital branding solutions
                                </h1>
                                <p>
                                    With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                                </p>
                                <Link to="/our-company" className="button light" onClick={targetTop}>Learn More</Link>
                            </div>
                            <div className="image">
                                <img src={phone} alt="Graphic of modern digital design on mobile phone" />
                            </div>
                            <div className="bg-pattern">
                                <img src={bgCircle} aria-hidden="true"/>
                            </div>
                        </div>

                    </div>
                    <img src={leaf} className="leaf" aria-hidden="true"/>
                </section>  
                
                <ProjectsGrid>
                    <ProjectsLink type="Web"/>
                    <ProjectsLink type="App"/>
                    <ProjectsLink type="Graphic"/>
                </ProjectsGrid>

                <section id="values">
                    <div className="maxwidth-container row v-top">

                        <div className="col">
                            <div className="image-wrapper">
                                <img src={illuPassion} className="illustration" alt="Illustration of an artist happily working on a tablet" />
                                <img src={bgCircleSm} className="spotlight-left" aria-hidden="true"/>
                            </div>
                            
                            <div className="content-wrapper">
                                <h3 className="tertiary-heading">Passionate</h3>
                                <p>
                                    Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
                                </p>
                            </div>
                            
                        </div>
                        <div className="col">
                            <div className="image-wrapper">
                            <img src={illuResource} className="illustration" alt="Illustration of an artist working independently at their desk" />
                                <img src={bgCircleSm} className="spotlight-bottom" aria-hidden="true"/>
                            </div>

                            <div className="content-wrapper">
                                <h3 className="tertiary-heading">Resourceful</h3>
                                <p>
                                    Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.                            
                                </p>
                            </div>

                        </div>
                        <div className="col">
                            <div className="image-wrapper">
                                <img src={illuFriendly} className="illustration" alt="Illustration of two people smiling and holding a chart together" />
                                <img src={bgCircleSm} className="spotlight-top" aria-hidden="true"/>
                            </div>
                            
                            <div className="content-wrapper">
                                <h3 className="tertiary-heading">Friendly</h3>
                                <p>
                                    We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.                            
                                </p>
                            </div>
                        </div>

                    </div>
                    <img src={leaf} className="leaf" aria-hidden="true"/>
                </section>

                <ContactModule />
        </main>
    )
}

export default Home;