import React, { Fragment } from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/page";
import TeamMember from '../templates/Team'
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/about.jpg'

const PageTeam = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader
                bgImg={require('../assets/img/bc.jpg')}
                title="KNOW ABOUT Our TEAM"
                content="Degusagoldhandelag always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
            />
            <About
                title={'Our Team'}
                heading="Meet Our <br/> Expert Member"
                thumb={ServiceThumb}
                content="<b>Degusagoldhandelag</b> always try to provide the best Business Solutions for Clinets to grow up their Business very sharply and smoothly. We voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            />
            <TeamMember />
            <BrandLogo />
            <Funfact classes="sp-top" />
            <CallToAction />
            <Footer />
            <LoginRegister />
            <MobileMenu />
        </Fragment>
    );
};

export default PageTeam;