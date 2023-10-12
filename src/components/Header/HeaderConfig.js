import React from 'react';

const HeaderConfig = () => {
    const LoginRegHandler = () => {
        const offCanvasConfig = document.querySelector('.off-canvas-cog');
        offCanvasConfig.classList.add('active');
        document.querySelector('body').classList.add('fix');
    }

    const MobileMenuHandler = () => {
        const offCanvasMenu = document.querySelector('.off-canvas-menu');
        offCanvasMenu.classList.add('active');
    }

    return (
        <div className="header-action mt-lg-3 text-end">
            <a style={{fontSize:'15px'}} href="tel:+254 750 850356" className="tel-no">+243 974 933 2398/+254 750 850356</a>
            {/* <button onClick={LoginRegHandler} className="btn-cog"><i className="fa fa-cog"/></button> */}
            <button onClick={MobileMenuHandler} className="btn-menu d-lg-none"><i className="fa fa-bars"/></button>
        </div>
    );
}

export default HeaderConfig;