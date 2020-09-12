import React, { useState } from 'react';
import axios from 'axios';
import Titlebar from './Titlebar';
import '../style/Confirm.scss';

const Confirm = (props) => {

    const [applyForm, setApplyForm] = useState('');
    const [isIdentified, setIsIdentified] = useState(false);

    const applyHandler = (event) => {
        event.preventDefault();
        axios.post('/api/confirm', {
            uid: event.target.uid.value,
            passwd: event.target.passwd.value
        })
        .then(function(response) {
            if(response.data.success){
                setApplyForm(response.data.data);
                setIsIdentified(true);
            } else{
                alert(response.data.message)
            }
        })
    }

    return (
        <div className="confirm">
            <div className="container">
                <Titlebar
                    title={"CONFIRM"}
                    note1={"제출한 지원서를 확인하거나 수정할 수 있습니다"}
                    note2={"비밀번호를 잊어버렸다면 앱앤미 페이스북 페이지를 통해 문의해주세요"}
                />

                {
                    // isIdentified ? (
                    true ? (
                        <form className="confirm-true">
                            <table>
                                <tr>
                                    <td className="first-td">학번</td>
                                    <td>{applyForm.uid}asdf</td>
                                    <td className="first-td">이름</td>
                                    <td>{applyForm.name}asdf</td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td colSpan="4">자기소개</td>
                                </tr>
                                <tr>
                                    <td colSpan="4"><textarea name="q1" maxLength="220" placeholder="간단히 자신을 소개해주세요(최대 200자)"></textarea></td>
                                </tr>
                                <tr>
                                    <td colSpan="4">지원동기</td>
                                </tr>
                                <tr>
                                    <td colSpan="4"><textarea name="q2" maxLength="220" placeholder="앱앤미에 지원하게 된 동기를 알려주세요(최대 200자)"></textarea></td>
                                </tr>
                                <tr>
                                    <td colSpan="4">다섯글자</td>
                                </tr>
                                <tr>
                                    <td colSpan="4"><input type="text" minLength="5" maxLength="5" name="q3" placeholder="다섯글자로 나를 표현한다면?"/></td>
                                </tr>
                            </table>
                            <button type="submit" className="btn btn-pink fw-bold">SUBMIT</button>
                        </form>
                    ) : (
                        <form onSubmit={applyHandler} className="confirm-false">
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

export default Confirm;