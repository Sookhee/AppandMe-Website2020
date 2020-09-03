import React from 'react';
import '../style/Titlebar.scss';

const Titlebar = (props) => {
    return (
        <div className="titlebar">
            <div className="title fw-bold">{props.title}</div>
            <div className="note fw-regular fc-gray">{props.note1}</div>
            <div className="note fws-regular fc-gray">{props.note2}</div>
            <div className="titlebar-br"/>
        </div>
    )
}

export default Titlebar;