import React, {useState, useEffect} from 'react';

// Components
import ContactModule from '../../components/ContactModule';
import LocationSection from '../../components/Locations';

// Images
import heroImg from '../../includes/images/about/desktop/image-about-hero.jpg';
import heroImgTab from '../../includes/images/about/tablet/image-about-hero-t.jpg';
import heroImgMob from '../../includes/images/about/mobile/image-about-hero-m.jpg';
import heroBg from '../../includes/images/about/desktop/bg-pattern-hero-about-desktop.svg';
import talentImg from '../../includes/images/about/desktop/image-world-class-talent.jpg';
import talentImgTab from '../../includes/images/about/tablet/image-world-class-talent-t.jpg'
import talentImgMob from '../../includes/images/about/mobile/image-world-class-talent-m.jpg'
import talentBg from '../../includes/images/shared/desktop/bg-pattern-three-circles.svg';
import businessImg from '../../includes/images/about/desktop/image-real-deal.jpg';
import businessImgTab from '../../includes/images/about/tablet/image-real-deal-t.jpg';
import businessImgMob from '../../includes/images/about/mobile/image-real-deal-m.jpg';
import businessBg from '../../includes/images/shared/desktop/bg-pattern-two-circles.svg';
import leaf from '../../includes/images/shared/desktop/bg-pattern-leaf.svg';

const About = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [heroImage, setHeroImage] = useState();
    const [talentImage, setTalentImage] = useState();
    const [businessImage, setBusinessImage] = useState();

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
        };    
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    useEffect(() => {
        if (windowSize < 575) {
            setHeroImage(heroImgMob)
            setTalentImage(talentImgMob)
            setBusinessImage(businessImgMob)
        } else if (windowSize < 991) {
            setHeroImage(heroImgTab)
            setTalentImage(talentImgTab)
            setBusinessImage(businessImgTab)
        } else {
            setHeroImage(heroImg)
            setTalentImage(talentImg)
            setBusinessImage(businessImg)
        } 
    }, [windowSize]);
 
    

    return (
        <main id="about">
            
                <section id="our-story">
                    <div className="maxwidth-container mobile-full">

                        <div className="module peach row v-center mobile-full">
                            <div className="content">
                                <h1 className="primary-heading">
                                    About Us
                                </h1>
                                <p>
                                    Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.
                                </p>
                                <div className="bg-pattern">
                                    <img src={heroBg} aria-hidden="true"/>
                                </div>
                            </div>
                            <div className="image">
                                <img src={heroImage} alt="Photo from above of team collaborating on wood grain desk, with multiple devices and notebooks strewn around." />
                            </div>
                            
                        </div>

                    </div>
                    <img src={leaf} className="leaf" aria-hidden="true"/>
                </section>  
                
                <section id="talent">
                    <div className="maxwidth-container mobile-full">

                        <div className="module lightpeach row v-center mobile-full">
                            <div className="image">
                                <img src={talentImage} alt="Woman looking at photos in a modern gallery" />
                            </div>
                            <div className="content">
                                <h2 class="secondary-heading">World-class talent</h2>
                                <p>
                                    We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
                                </p>
                                <p>
                                    Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.
                                </p>
                            </div>
                            <div className="bg-pattern">
                                <img src={talentBg} aria-hidden="true"/>
                            </div>
                        </div>

                    </div>
                </section>

                <LocationSection />

                <section id="business">
                    <div className="maxwidth-container mobile-full">

                        <div className="module lightpeach row v-center mobile-full">
                            <div className="content">
                                <h2 class="secondary-heading">The real deal</h2>
                                <p>
                                    As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
                                </p>
                                <p>
                                    We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                                </p>
                            </div>
                            <div className="image">
                                <img src={businessImage} alt="Closeup of a person's hands as they tape photos to a gallery wall" />
                            </div>
                            <div className="bg-pattern">
                                <img src={businessBg} aria-hidden="true"/>
                            </div>
                        </div>

                    </div>
                </section>

                <ContactModule />
        </main>
    )
}

export default About;