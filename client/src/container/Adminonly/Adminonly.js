import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Titlebar from '../../component/Titlebar/Titlebar';
import './Adminonly.scss';

const AdminOnly = () => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [applyCount, setApplyCount] = useState(0);
    const [applyList, setApplyList] = useState([]);
    const [isToggleFAQ, setIsToggleFAQ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/api/adminonly')
        .then(function(response){
            setApplyList(response.data.data);
            setApplyCount(response.data.data.length);
        })
    }, [])

    const adminIdentifierHandler = (event) => {
        event.preventDefault();
        if(event.target.appandme_admin_code.value === 'app#{NXL4RD;!Kh8<;kme'){
            setIsAdmin(true);
        } else{
            alert('당신, 앱앤미 부원 아니지!! ლ(ಠ益ಠლ)')
        }
    }

    const searchHandler = (event) => {
        event.preventDefault();
        axios.post('/api/adminonly', {
            name: event.target.name.value
        })
        .then(function(response){
            setApplyList(response.data.data);
        })
    }

    const isAddFAQHandler = () => {
        setIsToggleFAQ(!isToggleFAQ);
    }

    const addFAQHandler = (event) => {
        event.preventDefault();
        axios.post('/api/faq', {
            question: event.target.question.value,
            answer: event.target.answer.value
        })
        .then(function(response){
            if(response.data.success){isToggleFAQ(false)}
            alert(response.data.message);
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
                {
                    isAdmin ? (
                        <div className="admin-true">
                            <div className="admin-status">
                                <h2 style={{margin: '0px'}}>현재까지 지원자는 {applyCount}명입니다.</h2>
                                <form onSubmit={searchHandler} style={{height: '30px'}}>
                                    <input type="text" name="name" placeholder="찾고 싶은 지원자의 이름"/>
                                    <button type="submit" className="btn-search fc-pink">검색</button>
                                </form>
                                <div onClick={isAddFAQHandler}>{isToggleFAQ ? "FAQ 폼 닫기 ▲" : "FAQ 추가하기 ▼"}</div>
                            </div>
                            {
                                isToggleFAQ ? (
                                    <div className="admin-addFAQ">
                                        <form onSubmit={addFAQHandler}>
                                            <input type="text" name="question" placeholder="자주 묻는 질문"/> <br/>
                                            <input type="text" name="answer" placeholder="답변"/> <br/>
                                            <button type="submit" className="btn btn-pink">SUBMIT</button>
                                        </form>
                                        <div style={{clear: 'both'}}></div>
                                    </div>
                                ) : <span></span>
                            }
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
                                                tel = {apply.tel}
                                            />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    ) : (
                        <div className="admin-false">
                            <div className="wrap-admin-identify">
                                <h3>인증 코드를 입력해주세요</h3>
                                <form onSubmit={adminIdentifierHandler}>
                                    <input type="text" name="appandme_admin_code" placeholder="앱앤미 부원이시라면 아시죠?"></input>
                                    <button type="submit" class="btn-pink">submit</button>
                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}


const ApplyForm = (props) => {
    return (
        <div className="apply-form">
            <div className="apply-content fw-bold" style={{fontSize: '1.2em'}}>{props.uid}<span>{props.name}</span></div>
            <div className="apply-q fw-bold">전화번호</div>
            <div className="apply-content">0{props.tel}</div>
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