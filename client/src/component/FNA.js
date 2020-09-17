import React from 'react';
import Titlebar from './Titlebar';
import '../style/FNA.scss';

const FNA = () => {

    const fna = [
        {
            question: '앱앤미에 대한 질문1 입니다',
            answer: '네, 질문에 대한 대답1 입니다'
        }, {
            question: '앱앤미에 대한 질문2 입니다',
            answer: '네, 질문에 대한 대답2 입니다'
        }, {
            question: '앱앤미에 대한 질문3 입니다',
            answer: '네, 질문에 대한 대답3 입니다'
        },
    ];

    return (
        <div className="fna">
            <div className="container">
                <Titlebar
                    title={"FNA"}
                    note1={"앱앤미에 대하여 자주 물어보는 질문들을 정리했어요."}
                    note2={"더 궁금한 사항은 앱앤미 페이스북 메신저를 이용해주세요!"}
                />
                <div className="wrap-fna">
                    {
                        fna.map((fna, i) => {
                            return (<Question question={fna.question}
                                            answer={fna.answer}
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
                    <summary className="fna-question fw-bold">Q. {props.question}</summary>
                    <div className="fna-answer fc-gray">A. {props.answer}</div>
                </details>
            </div>
            <hr/>
        </>
    )
}

export default FNA;