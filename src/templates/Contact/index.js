import React from 'react';
import From from "./From";
import ContactInfo from "./ContactInfo";
import Logo from '../../components/Header/Logo';

const ContactPage = () => {
    return (
        <div className={'contact-page-area-wrapper sp-y'}>
            <div className="container">
                <div className="contact-content-wrap">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-form-area contact-method">
                                <h3>Send us a Message</h3>
                                <From />
                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="contact-information contact-method" style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifyItems: 'center', alignContent: 'center' }}><Logo /></div>
                                <div className="contact-info-con">

                                    <h3>Contact Info</h3>
                                    <ContactInfo
                                        address="4H9V+4GC, Kalimva, DRC || Runda Grove, Runda, Nairobi, KE<br/>https://degusagoldhandelag.com/ <br/>+243 974 933 239(DRC) / +254 750 850 356 (KE)

                                        info@degusagoldhandelag.com"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;