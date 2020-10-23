import React, { useState, useEffect } from 'react';
import Titlebar from '../../component/Titlebar/Titlebar';
import axios from 'axios';
import './FAQ.scss';

const FAQ = () => {
    const [faqList, setFaqList] = useState([]);

    useEffect(() => {
        axios.get('/api/faq')
        .then(function(response){
            setFaqList(response.data.data);
        })
    }, []);

    return (
        <div className="faq">
            <div className="container">
                <Titlebar
                    title={"FAQ"}
                    note1={"앱앤미에 대하여 자주 물어보는 질문들을 정리했어요."}
                    note2={"더 궁금한 사항은 앱앤미 페이스북 메신저를 이용해주세요!"}
                />
                <div className="wrap-faq">
                    {
                        faqList.map((faq, i) => {
                            return (<Question question={faq.question}
                                            answer={faq.answer}
                                            key={i}
                            />);
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const Question = (props) => {
    return (
        <>
            <div className="wrap-frequently ">
                <details>
                    <summary className="faq-question">Q. {props.question}</summary>
                    <div className="faq-answer">A. {props.answer}</div>
                </details>
            </div>
            <div style={{width: '100%', borderBottom: '1px solid #707070'}}></div>
        </>
    )
}

export default FAQ;