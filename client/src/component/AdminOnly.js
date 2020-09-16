import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Titlebar from './Titlebar';
import '../style/AdminOnly.scss';

const AdminOnly = () => {

    const [applyCount, setApplyCount] = useState(0);
    const [applyList, setApplyList] = useState([]);

    useEffect(() => {
        axios.get('/api/list')
        .then(function(response){
            setApplyList(response.data.data);
            setApplyCount(response.data.data.length);
        })
    }, [])

    const searchHandler = (event) => {
        event.preventDefault();
        axios.post('/api/search', {
            name: event.target.name.value
        })
        .then(function(response){
            setApplyList(response.data.data);
        })
    }

    return(
        <div>
            <div className="container">
                <Titlebar
                    title="ADMIN ONLY"
                    note1 = "앱앤미에 지원한 신입생들의 지원서를 확인할 수 있습니다."
                    note2 = "이름 검색을 지원합니다"
                />
                <div className="admin-status">
                    <h2>현재까지 지원자는 {applyCount}명입니다.</h2>
                    <form onSubmit={searchHandler}>
                        <input type="text" name="name" placeholder="찾고 싶은 지원자의 이름"/>
                        <button type="submit" className="btn-search fc-pink">검색</button>
                    </form>
                </div>
                <hr/>
                <div className="wrap-apply-list">
                    {
                        applyList.map((apply, i) => {
                            return (
                                <ApplyForm
                                    uid = {apply.uid}
                                    name = {apply.name}
                                    q1 = {apply.q1}
                                    q2 = {apply.q2}
                                    q3 = {apply.q3}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}


const ApplyForm = (props) => {
    return (
        <div className="apply-form">
            <div className="apply-content fw-bold" style={{fontSize: '1.2em'}}>{props.uid}<span>{props.name}</span></div>
            <div className="apply-q fw-bold">자기소개</div>
            <div className="apply-content">{props.q1}</div>
            <div className="apply-q fw-bold">지원동기</div>
            <div className="apply-content">{props.q2}</div>
            <div className="apply-q fw-bold">다섯글자로 자신을 표현한다면?</div>
            <div className="apply-content">{props.q3}</div>
        </div>
    )
}

export default AdminOnly;