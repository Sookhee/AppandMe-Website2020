import React from 'react';
import '../style/Apply.scss';
import Titlebar from './Titlebar';

const Apply = () => {
    return (
        <div className="apply">
            <div className="container">
                <Titlebar
                    title={"APPLY"}
                    note1={"앱앤미 지원을 결심하셨군요! 좋은 결과 있길 바랍니다 :)"}
                    note2={"* 지원서는 메인화면에서 확인 및 수정 페이지로 이동 가능합니다!"}
                />
                
                <form className="apply-form">
                    <table className="apply-table">
                        <tr>
                            <td>학번</td>
                            <td className="temp"></td>
                            <td>이름</td>
                        </tr>
                        <tr>
                            <td><input type="tel" minLength="4" maxLength="4" name="uid" placeholder="학번을 입력해주세요"/></td>
                            <td className="temp"></td>
                            <td><input type="text" name="name" placeholder="이름을 입력해주세요"/></td>
                        </tr>
                        <tr>
                            <td colSpan="3">비밀번호</td>
                        </tr>
                        <tr>
                            <td colSpan="3"><input type="tel" minLength="4" maxLength="4" name="passwd" placeholder="지원서를 수정할 때 사용할 비밀번호를 알려주세요 (4자리 숫자)"/></td>
                        </tr>
                        <tr>
                            <td colSpan="3">자기소개</td>
                        </tr>
                        <tr>
                            <td colSpan="3"><textarea name="q1" maxLength="220" placeholder="간단히 자신을 소개해주세요(최대 200자)"></textarea></td>
                        </tr>
                        <tr>
                            <td colSpan="3">지원동기</td>
                        </tr>
                        <tr>
                            <td colSpan="3"><textarea name="q2" maxLength="220" placeholder="앱앤미에 지원하게 된 동기를 알려주세요(최대 200자)"></textarea></td>
                        </tr>
                        <tr>
                            <td colSpan="3">다섯글자</td>
                        </tr>
                        <tr>
                            <td colSpan="3"><input type="text" minLength="5" maxLength="5" name="q3" placeholder="다섯글자로 나를 표현한다면?"/></td>
                        </tr>
                    </table>
                    <button type="submit" className="btn btn-pink fw-bold">SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default Apply;