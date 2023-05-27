import React from "react";

// Components
import ContactModule from "../../components/ContactModule";

// Images
import canada from '../../includes/images/locations/desktop/image-map-canada.png';
import australia from '../../includes/images/locations/desktop/image-map-australia.png';
import uk from '../../includes/images/locations/desktop/image-map-united-kingdom.png';
import bg from '../../includes/images/shared/desktop/bg-pattern-two-circles.svg';

const Locations = () => {
    return (
        <main id="locations">
            <div className="maxwidth-container mobile-full">

                <section className="location-grid">
                    <div className="location row">
                        <div className="module lightpeach mobile-full">
                            <h2 className="secondary-heading">Canada</h2>
                            <div className="contact row v-top">
                                <div class="bg-pattern"><img src={bg} aria-hidden="true" /></div>
                                <div className="col">
                                    <p>
                                        <strong>Designo Central Office</strong><br/>
                                        3886 Wellington Street<br />
                                        Toronto, Ontario M9C 3J5
                                    </p>
                                </div>
                                <div className="col">
                                    <p>
                                        <strong>Contact</strong><br/>
                                        P : +1 253-863-8967<br />
                                        M : contact@designo.co
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="map">
                            <img src={canada} alt="Streetmap of area surrounding the Designo Canada office"/>
                        </div>
                    </div>

                    <div className="location row">
                        <div className="map">
                            <img src={australia} alt="Streetmap of area surrounding the Designo Australia office"/>
                        </div>
                        <div className="module lightpeach mobile-full">
                            <h2 className="secondary-heading">Australia</h2>
                            <div className="contact row v-top">
                            <div class="bg-pattern"><img src={bg} aria-hidden="true" /></div>
                                <div className="col">
                                    <p>
                                        <strong>Designo AU Office</strong><br/>
                                        19 Balonne Street<br/>
                                        New South Wales 2443
                                    </p>
                                </div>
                                <div className="col">
                                    <p>
                                        <strong>Contact</strong><br/>
                                        P : (02) 6720 9092 <br />
                                        M : contact@designo.au
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="location row">
                        <div className="module lightpeach mobile-full">
                            <h2 className="secondary-heading">United Kingdom</h2>
                            <div className="contact row v-top">
                            <div class="bg-pattern"><img src={bg} aria-hidden="true" /></div>
                                <div className="col">
                                    <p>
                                        <strong>Designo UK Office</strong><br/>
                                        13  Colorado Way<br />
                                        Rhyd-y-fro SA8 9GA
                                    </p>
                                </div>
                                <div className="col">
                                    <p>
                                        <strong>Contact</strong><br/>
                                        P : 078 3115 1400<br />
                                        M : contact@designo.uk
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="map">
                            <img src={uk} alt="Streetmap of area surrounding the Designo UK office"/>
                        </div>
                    </div>
                </section>

            </div>

            <ContactModule />
            
        </main>

        
    )
}

export default Locations;