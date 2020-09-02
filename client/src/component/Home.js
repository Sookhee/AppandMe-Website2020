import React from 'react';
import {NavLink} from 'react-router-dom';
import '../style/Home.scss';

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <h1 className="home-title fc-black">USER에서 MAKER로 거듭나고자 하는 당신을 위한 최고의 선택, APP&#38;ME</h1>
                <h4 className="home-subtitle fc-black">2020년, 전공동아리 앱앤미와 함께 할 신입생을 모집합니다.</h4>
                <div className="home-info">
                    <ul>
                        <li>신청기간 : 2020.00.00 - 2020.00.00</li>
                        <li>면접일시 : 2020.00.00</li>
                        <li>면접장소 : 앱창작터 1실 (예정)</li>
                        <li>* 위 내용은 지원자들에게 개별 문자로 공지될 계획입니다.</li>
                    </ul>
                </div>
                <NavLink to="/apply">
                    <div className="btn btn-white">지원하기</div>
                </NavLink>
                <NavLink to="/apply">
                    <div className="btn btn-white">신청확인</div>
                </NavLink>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Home;