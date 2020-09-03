import React from 'react';
import Titlebar from './Titlebar';

const FNA = () => {
    return (
        <div className="fna">
            <div className="container">
                <Titlebar
                    title={"FNA"}
                    note1={"앱앤미에 대하여 자주 물어보는 질문들을 정리했어요."}
                    note2={"더 궁금한 사항은 앱앤미 페이스북 페이지를 이용해주세요!"}
                />
                FNA
            </div>
        </div>
    );
}

export default FNA;