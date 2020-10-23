import React from 'react';
import './Apply.scss';
import axios from 'axios';

const Apply = (props) => {
    const applyHandler = (event) => {
        event.preventDefault();
        if(
            event.target.name.value === '' ||
            event.target.passwd.value === '' ||
            event.target.uid.value === '' ||
            event.target.q1.value === '' ||
            event.target.q2.value === '' ||
            event.target.q3.value === '' ||
            event.target.tel.value === ''
        ){alert('빠진 항목이 없는지 확인해주세요.')}
        else{
            axios.post('/api/apply', {
                uid: event.target.uid.value,
                passwd: event.target.passwd.value,
                name: event.target.name.value,
                q1: event.target.q1.value,
                q2: event.target.q2.value,
                q3: event.target.q3.value,
                tel: event.target.tel.value
            })
            .then(function(response) {
                if(response.data.success){
                    alert('지원서가 접수되었습니다.\n면접 일시 및 장소 안내는 개별 문자로 안내할 예정입니다.\n제출 확인 및 수정을 원하신다면 MYPAGE를 이용해주세요 :)')
                    props.history.push('/mypage');
                } else{
                    alert(response.data.message);
                }
            })
        }
    }

    return(
        <div className="apply">
            <div className="container">
                <form onSubmit={applyHandler}>
                    <div className="wrap-input">
                        <div className="title">이름</div>
                        <input type="text" name="name" placeholder="이름 입력해주세요."/>
                    </div>
                    <div className="wrap-flex">
                        <div className="wrap-input">
                            <div className="title">학번</div>
                            <input type="tel" minLength="4" maxLength="4" name="uid" placeholder="학번을 입력해주세요."/>
                        </div>
                        <div className="wrap-input">
                            <div className="title">비밀번호</div>
                            <input type="tel" minLength="4" maxLength="4" name="passwd" placeholder="지원서 제출 확인 및 수정에 사용됩니다. (4자리 숫자)"/>
                        </div>
                    </div>
                    <div className="wrap-input">
                        <div className="title">자기소개</div>
                        <input type="text" name="q1" placeholder="자기소개를 입력해주세요. (200자 이내)"/>
                    </div>
                    <div className="wrap-input">
                        <div className="title">지원동기</div>
                        <input type="text" name="q2" placeholder="지원동기를 입력해주세요. (200자 이내)"/>
                    </div>
                    <div className="wrap-input">
                        <div className="title">다섯글자</div>
                        <input type="text" name="q3" placeholder="자신을 다섯글자로 표현한다면?"/>
                    </div>
                    <div className="wrap-input">
                        <div className="title">전화번호</div>
                        <input type="number" name="tel" placeholder="면접 안내 용도로만 사용됩니다. (숫자만 입력)"/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}><button type="submit">제출하기</button></div>
                </form>
            </div>
        </div>
    );
};

export default Apply;