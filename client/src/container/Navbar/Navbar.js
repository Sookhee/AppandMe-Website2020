import React, {useState} from 'react';
import './Navbar.scss';
import {NavLink} from 'react-router-dom';
import IconDropTrue from '../../image/navbar/icon_drop-true.png';
import IconDropFalse from '../../image/navbar/icon_drop-false.png';

const Navbar = () => {
    const [isDrop, setIsDrop] = useState(false);
    const toggleIsDropHandler = () => {setIsDrop(!isDrop);}

    const [isHome, setIsHome] = useState(true);
    const setIsHomeTrue = () => {setIsHome(true)}
    const setIsHomeFalse = () => {setIsHome(false)}

    const setBoth = () => {setIsHome(true); setIsDrop(false);}
    const setBothFalse = () => {setIsHome(false); setIsDrop(false);}

    return (
        <div className="navbar">
            <div className="container">
                <div className="wrap-navbar">
                    <div className="nav-brand">
                        <div className="nav-logo"></div>
                        <NavLink to="/" onClick={setBoth}>APP&#38;ME</NavLink>
                    </div>
                    <div className="nav-menu-pc">
                        <NavLink to="/" className="nav-item" onClick={setIsHomeTrue} style={isHome ? {color: '#ff6b79'} : {color: '#707070'}}>ABOUT</NavLink>
                        <NavLink to="/members" className="nav-item" onClick={setIsHomeFalse} activeStyle={{color: '#ff6b79'}}>MEMBERS</NavLink>
                        <NavLink to="/apply" className="nav-item" onClick={setIsHomeFalse} activeStyle={{color: '#ff6b79'}}>APPLY</NavLink>
                        <NavLink to="/mypage" className="nav-item" onClick={setIsHomeFalse} activeStyle={{color: '#ff6b79'}}>MYPAGE</NavLink>
                        <NavLink to="/faq" className="nav-item" onClick={setIsHomeFalse} activeStyle={{color: '#ff6b79'}}>FAQ</NavLink>
                    </div>
                    <div className="nav-menu-mobile">
                        <div className="toggle-button" onClick={toggleIsDropHandler} style={isDrop ? {backgroundImage: `url(${IconDropTrue})`} : {backgroundImage: `url(${IconDropFalse})`}}></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="nav-drop" style={isDrop ? {display: 'flex'} : {display: 'none'}}>
                    <NavLink to="/" className="nav-item" onClick={setBoth} style={isHome ? {color: '#ff6b79'} : {color: '#707070'}}>ABOUT</NavLink>
                    <NavLink to="/members" className="nav-item" onClick={setBothFalse} activeStyle={{color: '#ff6b79'}}>MEMBERS</NavLink>
                    <NavLink to="/apply" className="nav-item" onClick={setBothFalse} activeStyle={{color: '#ff6b79'}}>APPLY</NavLink>
                    <NavLink to="/mypage" className="nav-item" onClick={setBothFalse} activeStyle={{color: '#ff6b79'}}>MYPAGE</NavLink>
                    <NavLink to="/faq" className="nav-item" onClick={setBothFalse} activeStyle={{color: '#ff6b79'}}>FAQ</NavLink>
                </div>
            </div>
            <div style={{width: '100%', borderBottom: '1px solid #aaaaaa'}}></div>
        </div>
    );
};

export default Navbar;