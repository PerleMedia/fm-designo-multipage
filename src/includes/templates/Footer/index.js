import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Navigation from '../../../components/Navigation';

// Images
import logo from '../../images/shared/desktop/logo-light.png';
import { FacebookIcon, YoutubeIcon, TwitterIcon, PinterestIcon, InstagramIcon } from '../../../components/SocialIcons';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="maxwidth-container">

                <Navigation style="footer"/>

                <span class="divider"></span>

                <div className="contact row v-bottom">
                    <div className="col">
                        <p>
                            <strong>Designo Central Office</strong><br/>
                            3886 Wellington Street<br />
                            Toronto, Ontario M9C 3J5
                        </p>
                    </div>
                    <div className="col">
                        <p>
                            <strong>Contact Us (Central Office)</strong><br/>
                            P : +1 253-863-8967<br />
                            M : contact@designo.co
                        </p>
                    </div>
                    <div className="col">
                        <div className="socials row v-bottom h-right">
                            <Link to="/" aria-label="Facebook">
                                <FacebookIcon />
                            </Link>
                            <Link to="/" aria-label="YouTube">
                                <YoutubeIcon />
                            </Link>
                            <Link to="/" aria-label="Twitter">
                                <TwitterIcon />
                            </Link>
                            <Link to="/" aria-label="Pinterest">
                                <PinterestIcon />
                            </Link>
                            <Link to="/" aria-label="Instagram">
                                <InstagramIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
