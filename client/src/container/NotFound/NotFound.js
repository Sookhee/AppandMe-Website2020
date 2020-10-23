import React from 'react';
import {NavLink} from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="notfound">
                    <h2>존재하지 않는 페이지 입니다.</h2>
                    <p>궁금하신 사항은 앱앤미 페이스북 페이지로 문의해 주시기 바랍니다.</p>
                    <NavLink to="/">
                        <button className="btn btn-pink fw-bold">홈으로</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
