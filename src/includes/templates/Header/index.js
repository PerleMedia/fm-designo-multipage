import React from 'react';

// Components
import Navigation from '../../../components/Navigation';

const Header = () => {

    const targetTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <header id="header">
            <div className="maxwidth-container">

                <Navigation style="light"/>

            </div>
        </header>
    )
}

export default Header;