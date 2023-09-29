import React from 'react';

function FeatureItem(props) {
    return (
        <div className="col-md-4">

            <div className="" style={{ padding: '20px' }}>
                <h5 className='' style={{fontWeight:'bold',color:''}}>{props.title}</h5>
                <p>{props.text.substring(0,333)+"..."}</p>
            </div>

        </div>
    );
}

export default FeatureItem;