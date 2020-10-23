import React from 'react';
import './About.scss';
import {NavLink} from 'react-router-dom';

const About = () => {
    return(
        <div className="about">
            <div className="wrap-banner">
                <div className="background">
                    <div className="container">
                        <div className="image"></div>
                        <div className="wrap-content">
                            <div className="title">USER에서 MAKER로<br/>거듭나고자 하는 당신을 위한<br/>최고의 선택, APP&ME.</div>
                            <div className="li"><span>신청기간</span>2020.00.00 - 2020.00.00</div>
                            <div className="li"><span>면접일시</span>2020.00.00 오전7시</div>
                            <div className="li"><span>면접장소</span>무한상상카페</div>
                            <NavLink to="/apply"><div className="apply"></div></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap-intro">
                <div className="container">
                    <div className="title">동아리 소개</div>
                    <div style={{width: '100%', borderBottom: '1px solid #aaaaaa'}}></div>
                    <div className="subtitle">'USER에서 MAKER로 거듭나고자 하는 당신을 위한 최고의 선택, APP & ME'</div>
                    <div className="content">
                        앱앤미는 미림여자정보과학고등학교의 대표적인 전공동아리 중 하나로
                        다양한 차세대 IT개발 흐름에 따른 기술들을 익히고 연구하며 실제
                        서비스 구현을 통해 학교 및 사회에 기여하는동아리 입니다.
                        개발자와 디자이너, 기획자의 협업을 통해 전공실력을 보다 더
                        키워나갈 수 있을뿐만 아니라 각종 IT 관련 공모전 및 대외 활동을 통해
                        전공 실력과 발표 경험을 쌓을 수 있습니다. 또한 동아리 담당 전공
                        선생님과 함께하는 동아리 시간을 활용하여 각의 전공 실력을 
                        기를 수 있습니다.
                    </div>
                </div>
            </div>
            <div className="wrap-work">
                <div className="container">
                    <div className="title">2019년 활동 이력</div>
                    <div style={{width: '100%', borderBottom: '1px solid #aaaaaa'}}></div>
                    <div className="wrap-worktable">
                        <div className="monthly">
                            <div className="month">3월</div>
                            <div className="work">
                                <div>신입부원 모집</div>
                                <div>Women Tech Makers 참가 및 스텝</div>
                            </div>
                        </div>
                        <div className="monthly">
                            <div className="month">4월</div>
                            <div className="work">
                                <div>상반기 스터디(Git/Github, Java)</div>
                                <div>스마틴 앱 챌린지 공모전 준비</div>
                            </div>
                        </div>
                        <div className="monthly">
                            <div className="month">5월</div>
                            <div className="work">
                                <div>비즈쿨 마켓 운영</div>
                                <div></div>
                            </div>
                        </div>
                        <div className="monthly">
                            <div className="month">6월</div>
                            <div className="work">
                                <div>Google I/O Extended 2019 Seoul 참가</div>
                                <div>미림 IT쇼, "미림에 이런 일이" 개발, 디자인 및 전시</div>
                            </div>
                        </div>
                        <div className="monthly">
                            <div className="month">7월</div>
                            <div className="work">
                                <div>스마틴 앱 챌린지 부트캠프 참가</div>
                                <div>하반기 스터디</div>
                            </div>
                        </div>
                        <div className="monthly">
                            <div className="month">8월</div>
                            <div className="work">
                                <div>메이커페어 준비 및 신청</div>
                                <div></div>
                            </div>
                        </div>
                        <div className="monthly">
                            <div className="month">9월</div>
                            <div className="work">
                                <div>스마틴 앱 챌린지 생활부문 대상 수상</div>
                                <div>(DonorPets)</div>
                            </div>
                        </div>
                        <div className="monthly">
                            <div className="month">10월</div>
                            <div className="work">
                                <div>동아리 발표회(VR전시)</div>
                                <div>메이커페어 부스 전시 및 참가</div>
                            </div>
                        </div>
                        <div className="monthly">
                            <div className="month">11월</div>
                            <div className="work">
                                <div>미림 소프트웨어 챌린지 참가</div>
                                <div>(최우수작 선정 1)</div>
                            </div>
                        </div>
                        <div className="strip">
                            <div className="point m3"></div>
                            <div className="point m4"></div>
                            <div className="point m5"></div>
                            <div className="point m6"></div>
                            <div className="point m7"></div>
                            <div className="point m8"></div>
                            <div className="point m9"></div>
                            <div className="point m10"></div>
                            <div className="point m11"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;