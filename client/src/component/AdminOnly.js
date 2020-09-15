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
    })

    return(
        <div>
            <div className="container">
                <Titlebar
                    title="ADMIN ONLY"
                    note1 = "앱앤미에 지원한 신입생들의 지원서를 확인할 수 있습니다."
                    note2 = "이름으로 지원자를 검색할 수도 있어요 ^ㅇ^"
                />
                <h3>현재까지 지원자는 {applyCount}명입니다.</h3>
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
            {props.uid}
            {props.name}
            {props.q1}
            {props.q2}
            {props.q3}
        </div>
    )
}

export default AdminOnly;