import React from 'react';
import Feature from './FeatureItem'
// import FeaturesData from '../../data/Features/features'
const FeaturesData = [
    {
        "id": 1,
        "title": "Mission",
        "text": "Our mission is clear: to unlock the inherent beauty and value of gold while safeguarding the delicate balance of nature. We strive to be more than just a gold company; we aim to be stewards of the environment, champions of ethical mining, and providers of exquisite gold products that grace your life with elegance.",
        "imgSrc": "feature/01.png"
    },
    {
        "id": 2,
        "title": "Sustainability as a Core Value",
        "text": "We recognize that gold mining, as with any extractive industry, must be conducted responsibly to ensure a lasting legacy for future generations. We have made it our core value to minimize our environmental footprint by implementing stringent environmental protection measures at every stage of our operations.",
        "imgSrc": "feature/02.png"
    },
    {
        "id": 3,
        "title": "A Legacy of Excellence",
        "text": "With a legacy stretching back through the annals of time, Degusa has amassed a wealth of knowledge and experience in the intricate world of gold. Our journey began with a profound reverence for this precious metal, and it continues with a dedication to innovation and responsible practices that set industry standards.",
        "imgSrc": "feature/03.png"
    }, {
        "id": 1,
        "title": "Transparency and Integrity",
        "text": "Transparency and integrity are the cornerstones of our operations. We maintain open lines of communication with our stakeholders, from miners and employees to partners and customers. Our commitment to ethical business practices ensures that every piece of gold we produce is not only beautiful but also ethically sourced and crafted.",
        "imgSrc": "feature/01.png"
    },
    {
        "id": 2,
        "title": "Innovation and Excellence",
        "text": "The world of gold is constantly evolving, and we evolve with it. Through cutting-edge technology and a relentless pursuit of excellence, we continuously refine our processes to deliver gold products that stand as testaments to quality and craftsmanship. At Degusa, we invite you to embark on a journey with us—a journey that combines the brilliance of gold with the brilliance of responsible business. Together, we can preserve the Earths treasures for generations to come while adorning your life with the timeless elegance of gold.Thank you for choosing Degusa as your partner in gold. We look forward to a sustainable and prosperous future together",
        "imgSrc": "feature/02.png"
    },

]
const FeaturesData1 = [
    {
        "id": 1,
        "title": "Transparency and Integrity",
        "text": "Transparency and integrity are the cornerstones of our operations. We maintain open lines of communication with our stakeholders, from miners and employees to partners and customers. Our commitment to ethical business practices ensures that every piece of gold we produce is not only beautiful but also ethically sourced and crafted.",
        "imgSrc": "feature/01.png"
    },
    {
        "id": 2,
        "title": "Innovation and Excellence",
        "text": "The world of gold is constantly evolving, and we evolve with it. Through cutting-edge technology and a relentless pursuit of excellence, we continuously refine our processes to deliver gold products that stand as testaments to quality and craftsmanship. At Degusa, we invite you to embark on a journey with us—a journey that combines the brilliance of gold with the brilliance of responsible business. Together, we can preserve the Earths treasures for generations to come while adorning your life with the timeless elegance of gold.Thank you for choosing Degusa as your partner in gold. We look forward to a sustainable and prosperous future together",
        "imgSrc": "feature/02.png"
    },
    // {
    //     "id": 3,
    //     "title": "A Legacy of Excellence",
    //     "text": "With a legacy stretching back through the annals of time, Degusa has amassed a wealth of knowledge and experience in the intricate world of gold. Our journey began with a profound reverence for this precious metal, and it continues with a dedication to innovation and responsible practices that set industry standards.",
    //     "imgSrc": "feature/03.png"
    // }

]
function Features({ classes }) {
    return (
        <div className={`feature-area-wrapper ${classes}`}>
            <div className="container">
                <div className="row mtn-sm-60 mtn-md-5" >
                    {
                        FeaturesData.map(feature => (
                            <Feature key={feature.id} title={feature.title} text={feature.text} img={feature.imgSrc} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export function Features_1({ classes }) {
    return (
        <div className={`feature-area-wrapper ${classes}`}>
            <div className="container">
                <div className="row mtn-sm-60 mtn-md-5">
                    {
                        FeaturesData1.map(feature => (
                            <Feature key={feature.id} title={feature.title} text={feature.text} img={feature.imgSrc} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Features;