import React, { useState } from 'react';
import axios from 'axios';
import Titlebar from '../../component/Titlebar/Titlebar';
import './Mypage.scss';

const Mypage = (props) => {

    const [applyForm, setApplyForm] = useState('');
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [tel, setTel] = useState('');
    const [isIdentified, setIsIdentified] = useState(false);

    const checkHandler = (event) => {
        event.preventDefault();
        axios.post('/api/mypage/check', {
            uid: event.target.uid.value,
            passwd: event.target.passwd.value
        })
        .then(function(response) {
            if(response.data.success){
                setApplyForm(response.data.data);
                setIsIdentified(true);
                setQ1(response.data.data.q1);
                setQ2(response.data.data.q2);
                setQ3(response.data.data.q3);
                setTel('0' + response.data.data.tel);
            } else{
                alert(response.data.message);
            }
        })
    }

    const editHandler = (event) => {
        event.preventDefault();
        axios.post('/api/mypage/edit', {
            uid: applyForm.uid,
            q1: event.target.q1.value,
            q2: event.target.q2.value,
            q3: event.target.q3.value,
            tel: event.target.tel.value
        })
        .then(function(response) {
            if(response.data.success){
                alert("지원서 수정이 성공적으로 완료되었습니다.");
                window.location.replace("/mypage");
            } else{
                alert("지원서 수정에 실패했습니다.\n다시 시도해주세요ㅠㅠ")
            }
        })
    }

    return (
        <div className="mypage">
            <div className="container">
                <Titlebar
                    title={"MYPAGE"}
                    note1={"제출한 지원서를 확인하거나 수정할 수 있습니다."}
                    note2={"비밀번호를 잊어버렸다면 앱앤미 페이스북 페이지를 통해 문의해주세요;-)"}
                />

                {
                    isIdentified ? (
                        <form className="mypage-true" onSubmit={editHandler}>
                            <div className="wrap-flex">
                                <div className="wrap-input">
                                    <div className="title">학번</div>
                                    <div className="info">{applyForm.uid}</div>
                                </div>
                                <div className="wrap-input">
                                    <div className="title">이름</div>
                                    <div className="info">{applyForm.name}</div>
                                </div>
                            </div>
                            <div className="wrap-input">
                                <div className="title">자기소개</div>
                                <input type="text" name="q1" placeholder="자기소개를 입력해주세요. (200자 이내)" value={q1} onChange={e => setQ1(e.target.value)}/>
                            </div>
                            <div className="wrap-input">
                                <div className="title">지원동기</div>
                                <input type="text" name="q2" placeholder="지원동기를 입력해주세요. (200자 이내)" value={q2} onChange={e => setQ2(e.target.value)}/>
                            </div>
                            <div className="wrap-input">
                                <div className="title">다섯글자</div>
                                <input type="text" name="q3" placeholder="자신을 다섯글자로 표현한다면?" value={q3} onChange={e => setQ3(e.target.value)}/>
                            </div>
                            <div className="wrap-input">
                                <div className="title">전화번호</div>
                                <input type="number" name="tel" placeholder="면접 안내 용도로만 사용됩니다. (숫자만 입력)" value={tel}  onChange={e => setTel(e.target.value)}/>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}><button type="submit">제출하기</button></div>
                        </form>
                    ) : (
                        <form onSubmit={checkHandler} className="mypage-false">
                            <div className="wrap-input">
                                <div className="title">학번</div>
                                <input type="number" name="uid" placeholder="자신의 학번을 입력해주세요."></input>
                            </div>
                            <div className="wrap-input">
                                <div className="title">비밀번호</div>
                                <input type="tel" minLength="4" maxLength="8" name="passwd" placeholder="비밀번호를 입력해주세요. (4-8자리)"></input>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}><button>제출 확인</button></div>
                        </form>
                    )
                }
            </div>
        </div>
    )
}

export default Mypage;