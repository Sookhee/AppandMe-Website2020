import React from 'react';
import './Titlebar.scss';

const Titlebar = (props) => {
    return (
        <div className="titlebar">
            <div className="title">{props.title}</div>
            <div className="note">{props.note1}</div>
            <div className="note">{props.note2}</div>
            <div className="hr" style={{width: '100%', borderBottom: '1px solid #707070'}}></div>
        </div>
    )
}

export default Titlebar;