import React from 'react';
import {Link} from "react-router-dom";

function LogoItem(props) {
    return (
        <div className="brand-logo-item">
            <Link to={`${process.env.PUBLIC_URL + props.URL}`}>
                <img src={require('../../assets/img/logos' + props.logoSrc)} style={{height:"120px"}} alt=" Degussa Goldhandel AG-Logo"/>
            </Link>
        </div>
    );
}

export default LogoItem;