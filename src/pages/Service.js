import React, { Fragment } from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout, { About_1, About_2 } from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/about.jpg'
import ServiceThumb1 from '../assets/img/about1.jpg'
import ServiceThumb_2 from '../assets/img/about_2.jpg'

const PageService = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader
                bgImg={require('../assets/img/bc.jpg')}
                title="OUR SERVICES"
                content="We offer end-to-end export solutions tailored to your specific needs, ensuring a smooth and hassle-free export experience."
            />
            <PageAbout
                title={'Our Services'}
                heading="<h2>GOLD MINING<h2/> <p  style={{ color: `#d2ac67` }}>Unlocking the Earth's Golden Treasures</p>"
                sub_heading="GOLD MINING <br/> Unlocking the Earth's Golden Treasures"
                thumb={ServiceThumb}
                content="At Degusa, we take pride in our role as stewards of nature's most precious resource—gold. Gold mining is not just an industry for us; it's a passion, a commitment, and a responsibility we hold dear. With a legacy of excellence and a focus on sustainable practices, we embark on a journey beneath the Earth's surface to unearth its golden treasures."
            />
            <About_1
                title={'Our Approach'}
                heading="<p>Responsible Mining Practices</p>"
                thumb={ServiceThumb1}
                content="Our gold mining operations are guided by a deep respect for the environment and the communities in which we operate. We adhere to stringent environmental protection measures, ensuring that every ounce of gold we extract leaves the land as pristine as we found it."
            />
            <PageAbout
                title={'Ethical Sourcing'}
                heading="Ethical Sourcing"
                thumb={ServiceThumb_2}
                content="Ethical mining is at the heart of our operations. We work closely with local communities and governments to ensure that our mining activities benefit all stakeholders. Our commitment to fair labor practices and responsible sourcing is unwavering."
            />
            <About_1
                title={'Cutting-Edge Technology'}
                heading="<p>Cutting-Edge Technology</p>"
                thumb={ServiceThumb1}
                content="In our quest for excellence, we embrace cutting-edge technology to maximize efficiency and minimize environmental impact. From state-of-the-art machinery to advanced geological exploration, we leave no stone unturned in our pursuit of gold."
            />
            <About_2
                title={'Mining Locations'}
                heading="Exploring Rich Terrain"
                thumb={ServiceThumb_2}
                content="Degusa operates in diverse and geographically distinct locations, each offering unique gold deposits and challenges. Our mining sites include:
<ul>
               <li><b> Kalimva, Congo</b></li>
               [Description and image]  
               <li><b> Migori, Kenya</b></li>
                [Description and image]
              <li><b> Kapoeta, Sudan</b></li>
                [Description and image]
                
               <li><b> Budi County, South Sudan</b></li>
                [Description and image]

                </ul>
                "
            />
            <Services classes="sm-top" />
            {/* <PricingTable/> */}
            <Testimonial />
            <BrandLogo />
            <Funfact classes="sp-top" />
            <CallToAction />
            <Footer />
            <LoginRegister />
            <MobileMenu />
        </Fragment>
    );
};

export default PageService;