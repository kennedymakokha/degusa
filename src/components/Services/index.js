import React from 'react';
import SectionTitle from '../UI/SectionTitle'
import ServiceItem from './ServiceItem'


import serviceTopBg from '../../assets/img/service/service-bg.jpg'


const ServicesData = [
    {
        "id": 1,
        "title": "Rehabilitations",
        "shortDesc": "Develop and maintain constructive stakeholder relations to support our regulatory and social licences.",
        "thumb": "service/img-5.jpg",
        "previewImages": [
            "service/details/01.jpg",
            "service/details/02.jpg",
            "service/details/03.jpg"
        ],
        "aboutServiceDesc": "<p>Voluptatum delenitied atqued corrupti is eseted quased stias cepturi sint aete non provident, csimilique sunt dunt labore ete dolored magnam aliquam quaerat Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidun</p>   <p>Corrupti deleniti atque magnam is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat Neque porro quisquam est dolorem</p>",
        "features": [
            "Voluptatum deleniti atque corrupti is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat",
            "Atque corrupti is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat"
        ]
    },
    {
        "id": 2,
        "title": "Explorations",
        "shortDesc": "We establish and maintain a pipeline of economically viable and competitive projects",
        "thumb": "service/img-3.jpg",
        "previewImages": [
            "service/details/01.jpg",
            "service/details/02.jpg",
            "service/details/03.jpg"
        ],
        "aboutServiceDesc": "<p>Voluptatum delenitied atqued corrupti is eseted quased stias cepturi sint aete non provident, csimilique sunt dunt labore ete dolored magnam aliquam quaerat Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidun</p>   <p>Corrupti deleniti atque magnam is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat Neque porro quisquam est dolorem</p>",
        "features": [
            "Voluptatum deleniti atque corrupti is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat",
            "Atque corrupti is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat"
        ]
    },
    {
        "id": 3,
        "title": "Product Sale",
        "shortDesc": "We sell gold and by-products to generate revenue",
        "thumb": "service/img-1.jpg",
        "previewImages": [
            "service/details/01.jpg",
            "service/details/02.jpg",
            "service/details/03.jpg"
        ],
        "aboutServiceDesc": "<p>Voluptatum delenitied atqued corrupti is eseted quased stias cepturi sint aete non provident, csimilique sunt dunt labore ete dolored magnam aliquam quaerat Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidun</p>   <p>Corrupti deleniti atque magnam is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat Neque porro quisquam est dolorem</p>",
        "features": [
            "Voluptatum deleniti atque corrupti is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat",
            "Atque corrupti is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat"
        ]
    }, {
        "id": 4,
        "title": "Mining To Refining",
        "shortDesc": "We operate and maintain mining and processing infrastructure and equipment",
        "thumb": "service/img-2.jpg",
        "previewImages": [
            "service/details/01.jpg",
            "service/details/02.jpg",
            "service/details/03.jpg"
        ],
        "aboutServiceDesc": "<p>Voluptatum delenitied atqued corrupti is eseted quased stias cepturi sint aete non provident, csimilique sunt dunt labore ete dolored magnam aliquam quaerat Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidun</p>   <p>Corrupti deleniti atque magnam is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat Neque porro quisquam est dolorem</p>",
        "features": [
            "Voluptatum deleniti atque corrupti is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat",
            "Atque corrupti is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat"
        ]
    },
    {
        "id": 5,
        "title": "Mine Closure",
        "shortDesc": "We operate, minimise and mitigate our environmental impact and manage closure responsibly",
        "thumb": "service/img-4.jpg",
        "previewImages": [
            "service/details/01.jpg",
            "service/details/02.jpg",
            "service/details/03.jpg"
        ],
        "aboutServiceDesc": "<p>Voluptatum delenitied atqued corrupti is eseted quased stias cepturi sint aete non provident, csimilique sunt dunt labore ete dolored magnam aliquam quaerat Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidun</p>   <p>Corrupti deleniti atque magnam is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat Neque porro quisquam est dolorem</p>",
        "features": [
            "Voluptatum deleniti atque corrupti is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat",
            "Atque corrupti is es et quas stias cepturi sint aete non provident, similique sunt dunt ut labore et dolore magnam aliquam quaerat"
        ]
    }
]
function Services({ classes }) {
    return (
        <div className={`service-area-wrapper ${classes}`}>
            <div className="service-area-top" style={{ backgroundImage: `url("${serviceTopBg}")` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 m-auto text-center">
                            <SectionTitle variant="light" title="Our Services" heading="We make it simple, providing best Services " />
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-content-area">
                <div className="container">
                    <div className="row mtn-30">
                        {
                            ServicesData.map(service => (
                                <ServiceItem key={service.id} id={service.id} title={service.title} text={service.shortDesc} thumb={service.thumb} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;