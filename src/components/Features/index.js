import React from 'react';
import Feature from './FeatureItem'
// import FeaturesData from '../../data/Features/features'
const FeaturesData = [
    {
        "id": 1,
        "title": "Creative Team",
        "text": "We have creative team, they always ready to help you.",
        "imgSrc": "feature/01.png"
    },
    {
        "id": 2,
        "title": "Best Service",
        "text": "We have creative team, they always ready to help you.",
        "imgSrc": "feature/02.png"
    },
    {
        "id": 3,
        "title": "Online Support",
        "text": "We have creative team, they always ready to help you.",
        "imgSrc": "feature/03.png"
    }
]
function Features({ classes }) {
    return (
        <div className={`feature-area-wrapper ${classes}`}>
            <div className="container">
                <div className="row mtn-sm-60 mtn-md-5">
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

export default Features;