import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="wrap-contact">
                    <div className="contact">
                        <div className="title">CONTACT</div>
                        <div>010-4799-6081</div>
                        <div>s2019s15@e-mirim.hs.kr</div>
                    </div>
                    <div className="contact">
                        <div className="title">CONTACT</div>
                        <div>010-9921-4459</div>
                        <div>s2019s39@e-mirim.hs.kr</div>
                    </div>
                </div>
                <a href="https://www.facebook.com/APPandME2012" target="blank"><div className="facebook"></div></a>
            </div>
        </footer>
    );
}

export default Footer;