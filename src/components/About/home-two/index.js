import React from 'react';
import parse from "html-react-parser";

import aboutThumb from '../../../assets/img/about-2-bg.jpg'
import { Link } from "react-router-dom";

const aboutData = {
    "title": "ABOUT US",
    "heading": "We're Your Gold Experts",
    "since": "Since 2010",
    "text": "<p>At Degusa, we are driven by a profound respect for the Earth's treasures and a commitment to sustainable practices in the gold industry. Our journey in the world of gold mining, refining, and product distribution has been one marked by unwavering dedication and a deep understanding of our responsibilities to the planet and our communities.</p>",
    "btnText": "MORE DETAILS",
    "btnLink": "/about",
    "thumb": "about_logo.jpg"
}
const About = () => {
    return (
        <div className="home-two-about-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 d-lg-none" style={{ backgroundColor: 'red' }}>
                        <figure className="about-thumb">
                            <img src={require('../../../assets/img/next/' + aboutData.thumb)} alt="Businex-About" />
                        </figure>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content about-content--2">
                            <h6>{aboutData.title}</h6>
                            <h2>{parse(aboutData.heading)}</h2>
                            <span className="about-since">{aboutData.since}</span>
                            <p>{parse(aboutData.text)}</p>
                            <Link to={`${process.env.PUBLIC_URL + aboutData.btnLink}`} className="btn-about">{aboutData.btnText} <i className="fa fa-angle-double-right" /></Link>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center" style={{ paddingTop: '0px', marginTop: '0px' }}>
                    <div className="col-12 d-lg-none" style={{ backgroundColor: 'red' }}>
                        <figure className="about-thumb">
                            <img src={require('../../../assets/img/next/' + aboutData.thumb)} alt="Businex-About" />
                        </figure>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content about-content--2">
                            <h6>{aboutData.title}</h6>
                            <h2>{parse(aboutData.heading)}</h2>
                            <span className="about-since">{aboutData.since}</span>
                            <p>{parse(aboutData.text)}</p>
                            <Link to={`${process.env.PUBLIC_URL + aboutData.btnLink}`} className="btn-about">{aboutData.btnText} <i className="fa fa-angle-double-right" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
