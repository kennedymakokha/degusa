import React from 'react';

const Thumbnail = ({ imgSrc, classes }) => {
    return (

        <figure className={classes} style={{ padding: '2px' }}>
            <img src={imgSrc} alt=" Degussa Goldhandel AG" style={{ borderRadius: '50px' }} />
        </figure>
    );
};

export default Thumbnail;