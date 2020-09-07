import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Titlebar from './Titlebar';
import '../style/Members.scss';

import Profile7th1 from '../image/members/7th/정민지.jpg';
import Profile7th2 from '../image/members/7th/소민지.jpg';
import Profile7th3 from '../image/members/7th/이현수.jpg';
import Profile7th4 from '../image/members/7th/서채원.jpg';
import Profile7th5 from '../image/members/7th/윤주하.jpg';
import Profile7th6 from '../image/members/7th/주선우.jpg';

import Profile8th1 from '../image/members/8th/이수빈.jpg';
import Profile8th2 from '../image/members/8th/함형연.jpg';
import Profile8th3 from '../image/members/8th/김아라.png';
import Profile8th4 from '../image/members/8th/맹수연.jpg';
import Profile8th5 from '../image/members/8th/권유빈.jpg';
import Profile8th6 from '../image/members/8th/오연서.jpg';




const Members = () => {
    const [is7th, setIs7th] = useState(true);
    const setIs7thTrueHandler = () => {setIs7th(true);}
    const setIs7thFalseHandler = () => {setIs7th(false);}

    const memberList =  {
        th7: [
            {
                name: '정민지',
                major: '뉴미디어 소프트웨어과',
                profileImg: Profile7th1,
                facebookUrl: 'https://www.facebook.com/MinjiJeong02'
            },{
                name: '소민지',
                major: '뉴미디어 소프트웨어과',
                profileImg: Profile7th2,
                facebookUrl: 'https://www.facebook.com/profile.php?id=100009610962191'
            },{
                name: '이현수',
                major: '뉴미디어 솔루션과',
                profileImg: Profile7th3,
                facebookUrl: 'https://www.facebook.com/profile.php?id=100009075758105'
            },{
                name: '서채원',
                major: '뉴미디어 디자인과',
                profileImg: Profile7th4,
                facebookUrl: 'https://www.facebook.com/profile.php?id=100009601390266'
            },{
                name: '윤주하',
                major: '뉴미디어 디자인과',
                profileImg: Profile7th5,
                facebookUrl: 'https://www.facebook.com/profile.php?id=100000911379372'
            },{
                name: '주선우',
                major: '뉴미디어 디자인과',
                profileImg: Profile7th6,
                facebookUrl: 'https://www.facebook.com/profile.php?id=100004550599183'
            },
        ],
        th8: [
            {
                name: '이수빈',
                major: '뉴미디어 소프트웨어과',
                profileImg: Profile8th1,
                facebookUrl: 'https://www.facebook.com/profile.php?id=100005096685966'
            },{
                name: '함형연',
                major: '뉴미디어 소프트웨어과',
                profileImg: Profile8th2,
                facebookUrl: 'https://www.facebook.com/profile.php?id=100008652840731'
            },{
                name: '김아라',
                major: '뉴미디어 솔루션과',
                profileImg: Profile8th3,
                facebookUrl: 'https://www.facebook.com/profile.php?id=100034567932008'
            },{
                name: '맹수연',
                major: '뉴미디어 솔루션과',
                profileImg: Profile8th4,
                facebookUrl: 'https://www.facebook.com/profile.php?id=100011719852951'
            },{
                name: '권유빈',
                major: '뉴미디어 디자인과',
                profileImg: Profile8th5,
                facebookUrl: 'https://www.facebook.com/profile.php?id=100024626683649'
            },{
                name: '오연서',
                major: '뉴미디어 디자인과',
                profileImg: Profile8th6,
                facebookUrl: 'https://www.facebook.com/profile.php?id=100009078326333'
            },
        ]
    }

    return (
        <div className="members">
            <div className="container">
                <Titlebar
                    title={"MEMBERS"}
                    note1={"여러분과 함께 할 앱앤미 부원들을 소개합니다."}
                    note2={"사진을 클릭하면 페이스북으로 이동할 수 있어요 :)"}
                />
                <div className="members-profile">
                    <div className="members-menu">
                        <div onClick={setIs7thTrueHandler} style={is7th ? {color: '#ffb0b8'} : {color: 'black'}}>7기 앱앤미</div>
                        <div onClick={setIs7thFalseHandler} style={is7th ? {color: 'black'} : {color: '#ffb0b8'}}>8기 앱앤미</div>
                    </div>
                    <div className="members-wrap">
                        {
                            is7th ? (
                                memberList.th7.map((member, i) => {
                                    return (<Member name={member.name}
                                                    major={member.major}
                                                    profileImg={member.profileImg}
                                                    facebookUrl={member.facebookUrl}
                                                    key={i}
                                    />);
                                })
                            ) : (
                                memberList.th8.map((member, i) => {
                                    return (<Member name={member.name}
                                                    major={member.major}
                                                    profileImg={member.profileImg}
                                                    facebookUrl={member.facebookUrl}
                                                    key={i}
                                    />);
                                })
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

const Member = (props) => {
    return (
        <div className="member">
            <a href={props.facebookUrl} target="_blank">
                <div className="member-img" style={{backgroundImage: `url(${props.profileImg})`}}></div>
                <div className="member-name fw-bold">{props.name}</div>
                <div className="member-major fc-gray">{props.major}</div>
            </a>
        </div>
    )
}

export default Members;