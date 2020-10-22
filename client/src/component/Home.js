import React from 'react';
import {NavLink} from 'react-router-dom';
import '../style/Home.scss';

const Home = () => {

    return (
        <div className="home">
            <div className="container">
                <div className="content">
                    <div className="home-title fc-white fw-medium">USER에서 MAKER로<br className="mobile-br"/> 거듭나고자 하는<br/> 당신을 위한 최고의 선택,<br className="mobile-br"/> APP&#38;ME</div>
                    <div className="home-subtitle fc-white fw-regular">2020년, 전공동아리 앱앤미와 함께 할 신입생을 모집합니다.</div>
                    <div className="home-info fc-white fw-regular">
                        <ul>
                            <li>신청기간 : 2020.00.00 - 2020.00.00</li>
                            <li>면접일시 : 2020.00.00</li>
                            <li>면접장소 : 앱창작터 1실 (예정)</li>
                            <li>* 위 내용은 지원자들에게 개별 문자로 재공지될 계획입니다.</li>
                        </ul>
                    </div>
                </div>                
                <NavLink to="/apply">
                    <div className="btn btn-white fw-bold">지원하기</div>
                </NavLink>
                <NavLink to="/confirm">
                    <div className="btn btn-white fw-bold">지원확인</div>
                </NavLink>
            </div>
            <div className="home-layer"></div>
            <div className="home-background"></div>
        </div>
    );
}

export default Home;