import React from 'react';
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import { Link } from "react-router-dom";
import Ke from "./ke.png"
import DRC from "./DRC.png"
import Logo from '../../assets/img/logo1.png'

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row mtn-40">
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                                    <img src={Logo} alt="Logo" />
                                </Link>

                                {/* <Text>
                                    During the summer my wife and I got to go on an amazing road trip in Vancouver.
                                </Text> */}

                                <Text classes="copyright-txt">
                                    &copy; {new Date().getFullYear()}Degusa gold handelag. All Rights Reserved.
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Information">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/about"}`}>Our company</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/contact"}`}>Contact us</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/services"}`}>Our services</Link></LI>
                                {/* <LI><Link to={`${process.env.PUBLIC_URL + "/"}`}>Careers</Link></LI> */}
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Social Links">
                            <List classes="widget-list">
                                <LI><Link to="https://facebook.com/hasthemes/" target={'_blank'}>Facebook</Link></LI>
                                <LI><Link to="https://twitter.com/hasthemes/" target={'_blank'}>Twitter</Link></LI>
                                <LI><Link to="https://dribbble.com/hastech/" target={'_blank'}>Dribbble</Link></LI>
                                <LI><Link to="https://www.instagram.com/" target={'_blank'}>Instagram</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Widget title="Contact Us">
                            <address>
                            <img src={DRC} alt="" height={20} width={20} /> 4H9V+4GC, Kalimva, Democratic Republic of the Congo <br />
                                <img src={Ke} alt="" height={20} width={20} />Runda Grove, Runda, Nairobi, KE  <br />
                                info@degusagoldhandelag.com <br />
                                +243 974 933 239/+254 750 850356
                            </address>
                        </Widget>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;