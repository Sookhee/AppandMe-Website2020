import React from 'react';
import Titlebar from './Titlebar';

const Members = () => {
    return (
        <div className="members">
            <div className="container">
                <Titlebar
                    title={"MEMBERS"}
                    note1={"여러분과 함께 할 앱앤미 부원들을 소개합니다."}
                    note2={"사진을 클릭하면 페이스북으로 이동할 수 있어요 :)"}
                />
                Members
            </div>
        </div>
    );
}

export default Members;