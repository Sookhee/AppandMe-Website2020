import React from 'react';
import Titlebar from './Titlebar';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <Titlebar
                    title={"ABOUT"}
                    note1={"미림여자정보과학고 최고의 전공동아리 앱앤미!"}
                    note2={"어떤 활동을 하나요?"}
                />
                About
            </div>
        </div>
    );
}

export default About;