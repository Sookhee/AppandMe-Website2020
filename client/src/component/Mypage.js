import React, { useState } from 'react';
import axios from 'axios';
import Titlebar from './Titlebar';
import '../style/Mypage.scss';

const Mypage = (props) => {

    const [applyForm, setApplyForm] = useState('');
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
                setIsIdentified(false);
            } else{
                alert("지원서 수정에 실패했습니다.\n다시 시도해주세요")
            }
        })
    }

    return (
        <div className="mypage">
            <div className="container">
                <Titlebar
                    title={"MYPAGE"}
                    note1={"제출한 지원서를 확인하거나 수정할 수 있습니다"}
                    note2={"비밀번호를 잊어버렸다면 앱앤미 페이스북 페이지를 통해 문의해주세요"}
                />

                {
                    isIdentified ? (
                        <form className="mypage-true" onSubmit={editHandler}>
                            <table>
                                <tr>
                                    <td className="first-td">학번</td>
                                    <td>{applyForm.uid}</td>
                                    <td className="first-td">이름</td>
                                    <td>{applyForm.name}</td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td colSpan="4">자기소개</td>
                                </tr>
                                <tr>
                                    <td colSpan="4"><textarea name="q1" maxLength="220" placeholder="간단히 자신을 소개해주세요(최대 200자)">{applyForm.q1}</textarea></td>
                                </tr>
                                <tr>
                                    <td colSpan="4">지원동기</td>
                                </tr>
                                <tr>
                                    <td colSpan="4"><textarea name="q2" maxLength="220" placeholder="앱앤미에 지원하게 된 동기를 알려주세요(최대 200자)">{applyForm.q2}</textarea></td>
                                </tr>
                                <tr>
                                    <td colSpan="4">다섯글자</td>
                                </tr>
                                <tr>
                                    <td colSpan="4"><textarea name="q3" className="input" maxLength="5" placeholder="다섯글자로 나를 표현한다면?">{applyForm.q3}</textarea></td>
                                </tr>
                                <tr>
                                    <td colSpan="4">전화번호</td>
                                </tr>
                                <tr>
                                    <td colSpan="4"><input type="number" name="tel" onChange={e => setTel(e.target.value)} placeholder="면접 일시 및 장소 안내에 사용됩니다. (숫자만 입력해주세요)" value={tel}/></td>
                                </tr>
                            </table>
                            <button type="submit" className="btn btn-pink fw-bold">SUBMIT</button>
                        </form>
                    ) : (
                        <form onSubmit={checkHandler} className="mypage-false">
                            <table>
                                <tr>
                                    <td>학번</td>
                                </tr>
                                <tr>
                                    <td><input type="tel" minLength="4" maxLength="4" name="uid"></input></td>
                                </tr>
                                <tr><td className="temp"></td></tr>
                                <tr>
                                    <td>비밀번호</td>
                                </tr>
                                <tr>
                                <td colSpan="3"><input type="tel" minLength="4" maxLength="4" name="passwd" placeholder="4자리 숫자"/></td>
                                </tr>
                            </table>
                            <button className="btn btn-pink fw-bold">제출 확인</button>
                        </form>
                    )
                }
                
            </div>
        </div>
    )
}

export default Mypage;