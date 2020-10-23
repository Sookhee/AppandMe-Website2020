import React from 'react';
import '../style/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="wrap-footer">
                        <div className="contact">
                            <div>
                                <div className="fc-white fw-black">CONTACT</div>
                                <div className="fc-white fw-regular">010-4799-6081</div>
                                <div className="fc-white fw-regular">s2019s15@e-mirim.hs.kr</div>
                            </div>
                            <div>
                                <div className="fc-white fw-black">CONTACT</div>
                                <div className="fc-white fw-regular">010-9921-4459</div>
                                <div className="fc-white fw-regular">s2019s39@e-mirim.hs.kr</div>
                            </div>
                        </div>
                        <a href="https://web.facebook.com/APPandME2012" rel="noopener noreferrer" target="_blank">
                            <div className="logo-facebook"></div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;