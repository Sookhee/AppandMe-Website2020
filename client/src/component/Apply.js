import React from 'react';
import Titlebar from './Titlebar';

const Apply = () => {
    return (
        <div className="apply">
            <div className="container">
                <Titlebar
                    title={"APPLY"}
                    note1={"앱앤미 지원을 결심하셨군요! 좋은 결과 있길 바랍니다 :)"}
                    note2={"* 제출 후 수정이 불가하니 신중히 작성해주세요."
                }/>
                APPLY
            </div>
        </div>
    );
}

export default Apply;