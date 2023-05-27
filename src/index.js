import React from 'react';
import * as ReactDOMClient from 'react-dom/client'
import {HashRouter, Routes, Route} from 'react-router-dom';

// Components
import Header from './includes/templates/Header';
import Footer from './includes/templates/Footer';
import Home from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import WebDesign from './pages/Projects/WebDesign';
import AppDesign from './pages/Projects/AppDesign';
import GraphicDesign from './pages/Projects/GraphicDesign';

// Assets
import './includes/images/favicon-32x32.png';
import './includes/fonts/Jost-Medium.ttf';
import './includes/fonts/Jost-Regular.ttf';
import './styles.css';



const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HashRouter basename="/">
            <Header />

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/our-company" element={<About/>} />
                <Route path="/locations" element={<Locations/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects/web-design" element={<WebDesign />} />
                <Route path="/projects/app-design" element={<AppDesign />} />
                <Route path="/projects/graphic-design" element={<GraphicDesign />} />
            </Routes>

            <Footer />
        </HashRouter>
    </React.StrictMode>
) 