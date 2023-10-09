import React, { Fragment } from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/home-two";
import Services from "../components/Services";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Features from "../components/Features";
import Testimonial from "../components/Testimonials/home-two";
import Team from "../components/Team/home-two";

import ServiceThumb from '../assets/img/about.jpg'
import { About_1, About_3 } from '../components/About/page';
import ServiceThumb_2 from '../assets/img/about_2.jpg'
import Legacy from './../assets/img/about/legacy.webp'
import Mission from './../assets/img/about/ourMission.png'
import Core from './../assets/img/about/core.png'
import Excellence from './../assets/img/about/excell.jpg'
import Transparency from './../assets/img/about/transparency-1.png'

const PageAbout = () => {

    const FeaturesData = [
        {
            "id": 1,
            "title": "Mission",
            "text": "Our mission is clear: to unlock the inherent beauty and value of gold while safeguarding the delicate balance of nature. We strive to be more than just a gold company; we aim to be stewards of the environment, champions of ethical mining, and providers of exquisite gold products that grace your life with elegance.",
            "imgSrc": Mission
        },
        {
            "id": 2,
            "title": "Sustainability as a Core Value",
            "text": "We recognize that gold mining, as with any extractive industry, must be conducted responsibly to ensure a lasting legacy for future generations. We have made it our core value to minimize our environmental footprint by implementing stringent environmental protection measures at every stage of our operations.",
            "imgSrc": Core
        },
        {
            "id": 3,
            "title": "A Legacy of Excellence",
            "text": "With a legacy stretching back through the annals of time, Degusa has amassed a wealth of knowledge and experience in the intricate world of gold. Our journey began with a profound reverence for this precious metal, and it continues with a dedication to innovation and responsible practices that set industry standards.",
            "imgSrc": Legacy
        }, {
            "id": 4,
            "title": "Transparency and Integrity",
            "text": "Transparency and integrity are the cornerstones of our operations. We maintain open lines of communication with our stakeholders, from miners and employees to partners and customers. Our commitment to ethical business practices ensures that every piece of gold we produce is not only beautiful but also ethically sourced and crafted.",
            "imgSrc": Transparency
        },
        {
            "id": 5,
            "title": "Innovation and Excellence",
            "text": "The world of gold is constantly evolving, and we evolve with it. Through cutting-edge technology and a relentless pursuit of excellence, we continuously refine our processes to deliver gold products that stand as testaments to quality and craftsmanship. At Degusa, we invite you to embark on a journey with us—a journey that combines the brilliance of gold with the brilliance of responsible business. Together, we can preserve the Earths treasures for generations to come while adorning your life with the timeless elegance of gold.Thank you for choosing Degusa as your partner in gold. We look forward to a sustainable and prosperous future together",
            "imgSrc": Excellence
        },
        {
            "id": 6,
            "title": "Empowering Communities",
            "text": "We believe that the true value of our work extends beyond the glittering surface of gold. It reaches into the hearts of the communities we serve, bringing economic opportunities and sustainable development. Degusa is proud to contribute to the prosperity of the regions where we operate, fostering growth and well-being.",
            "imgSrc": Excellence
        },

    ]

    function isEven(n) {
        return (n % 2 == 0);
    }
    return (
        <Fragment>
            <Header />
            <PageHeader
                bgImg={require('../assets/img/bc.jpg')}
                title="ABOUT US"
                content=" Degussa Goldhandel AG."
            />
            <About
                title={'Our Team'}
                heading="Meet Our <br/> Expert Member"
                thumb={ServiceThumb}
                content="<b> Degussa Goldhandel AG</b> always try to provide the best Business Solutions for Clinets to grow up their Business very sharply and smoothly. We voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<p>"
            />
            {FeaturesData.map((feature, i) => (
                isEven(i) ? <About_1
                    title={feature.title}
                    heading={feature.title}
                    thumb={feature.imgSrc}
                    content={feature.text}
                /> : <About_3
                    title={feature.title}
                    heading={feature.title}
                    thumb={feature.imgSrc}
                    content={feature.text}
                />
            ))}
            <Services />




            <Funfact classes="sp-top" />

            <Footer />

            <MobileMenu />
        </Fragment>
    );
};

export default PageAbout;