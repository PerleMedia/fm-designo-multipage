import React, {useState} from "react";
import { Link } from 'react-router-dom';

// Images
import logoDark from '../../includes/images/shared/desktop/logo-dark.png';
import logoLight from '../../includes/images/shared/desktop/logo-light.png';
import hamburger from '../../includes/images/shared/mobile/icon-hamburger.svg';
import close from '../../includes/images/shared/mobile/icon-close.svg';

const Navigation = (props) => {

    const targetTop = () => {
        window.scrollTo(0,0)
    }

    const [mobileOpen, setMobileOpen] = useState(false);

    const mobileToggle = () => {
        if (!mobileOpen) {
            setMobileOpen(true)
        } else {
            setMobileOpen(false)
        }
    }

    const clickToClose = () => {
        setMobileOpen(false)
    }

    console.log(mobileOpen)

    return (
        <div id="cmp-navigation" className={"row v-center " + props.style}>
            <Link to="/" aria-label="Home" id="logo" className="row v-center" onClick={targetTop}>
                <img src={props.style == "footer" ? logoLight : logoDark} alt="Designo logo"/>
            </Link>
            <button id="mobile-toggle" onClick={mobileToggle}><img src={mobileOpen ? close : hamburger} alt="Open mobile menu icon" /></button>
            <div className="navbar"></div>
            <nav className={mobileOpen ? 'true' : 'false'}>
                <ul>
                    <li>
                        <Link to="/our-company" aria-label="Home" onClick={() => {targetTop(), clickToClose()}}>Our Company</Link>
                    </li>
                    <li>
                        <Link to="/locations" aria-label="Locations" onClick={() => {targetTop(), clickToClose()}}>Locations</Link>
                    </li>
                    <li>
                        <Link to="/contact" aria-label="Contact" onClick={() => {targetTop(), clickToClose()}}>Contact</Link>
                    </li>
                </ul>
                <div className="mobile-overlay" onClick={clickToClose}></div>
            </nav>
            
        </div>
        
    )
}

export default Navigation;