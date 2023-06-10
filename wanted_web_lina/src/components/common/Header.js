import React from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import { openMoAction } from '../../redux/actions/Modal'
import search from '../../assets/search.png'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import axios from "axios";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const isLogin = localStorage.getItem("jwt");

    // const [onHover, setOnHover] = useState(false);
    // const [category, setCategory] = useState([]);
    // const [jobgroup, setJobGroup] = useState([]);
    const [clickProfile, setClickProfile] = useState(false);
    // const [onMenu, setOnMenu] = useState(false);


    const openMoRedux = () => {
        dispatch(
            openMoAction()
        );
    };

    const onProfileClick = () => {
        setClickProfile(!clickProfile);
    }


    const onLogout = () => {
        localStorage.removeItem("jwt");
        navigate(`/`);
    }

    const onProfile = () => {
        navigate(`/profile`);
    }

    const resume = () => {
        navigate(`/resume`);
    }

    const recruitment = () => {
        navigate(`/recruitment`);
    }

    const event = () => {
        navigate(`/event`);
    }

    const main = () => {
        navigate(`/`);
    }

  return (
    <>
        <Wrap>
            <Menu>
                <Navbox>
                    <div className='leftmenu'>
                        <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75' className='dropdown-img' />
                        <svg className='logo' width="74" height="21" viewBox="0 0 140 32" onClick={main}><path fill="currentColor" d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"></path></svg>  
                    </div>
                    <ul className='menulist'>
                        <li onClick={recruitment}>채용</li>
                        <li onClick={event}>이벤트</li>
                        <li>직군별 연봉</li>
                        <li onClick={resume}>이력서</li>
                        <li>커뮤니티</li>
                        <li>프리랜서</li>
                        <li>AI 합격예측</li>
                    </ul>
                    <div className='asidemenu'>
                        <img src={search} className='search-btn' />
                        {/* 로그인 되었을 때 로그인 안되었을 때 메뉴 구분 */}
                        {isLogin ? (
                               <>
                               <button className="noti-btn"><svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18"><defs><path id="bpnpn3yn0a" d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"></path></defs><g fill="none" fill-rule="evenodd"><g transform="translate(-1079 -16) translate(224 7) translate(855 9)"><mask id="1dencd96ob" fill="#fff"><use xlinkHref="#bpnpn3yn0a"></use></mask><use fill-rule="nonzero" stroke="currentColor" stroke-width=".3" xlinkHref="#bpnpn3yn0a"></use><g fill="currentColor" mask="url(#1dencd96ob)"><path d="M0 0H18V18H0z"></path></g></g></g></svg></button>
                               <Profile className="profile" onClick={onProfileClick} isClick={clickProfile}>
                                        <img width="28" height="28" alt="" src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png" />
                                       {clickProfile && 
                                       <>
                                           <div className="drop-container">
                                               <div className="profile-drop">
                                                   <ul>
                                                       <li className="drop-menu">My 원티드</li>
                                                       <li className="drop-menu" onClick={onProfile}>프로필</li>
                                                       <hr />
                                                       <li className="drop-menu">지원 현황</li>
                                                       <li className="drop-menu">제안받기 현황</li>
                                                       <li className="drop-menu">좋아요</li>
                                                       <li className="drop-menu">북마크</li>
                                                       <hr />
                                                       <li className="drop-menu">추천</li>
                                                       <li className="drop-menu">포인트</li>
                                                       <li className="logout" onClick={onLogout}>로그아웃</li>
                                                   </ul>
                                               </div>
                                               <div className="bubble-point"></div>
                                           </div>
                                    </>
                                    }
                                </Profile>
                           </>
                        ) : (   
                            <><button className='signin-btn' onClick={openMoRedux}><div className='signin'>회원가입/로그인</div></button></>
                         )}
                        
                        <button className='service'>기업 서비스</button>
                    </div>
                </Navbox>
            </Menu> 
        </Wrap>
    </>
  )
}

const Wrap = styled.div`

    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
    background-color: white;
    z-index: 800;
    padding-right: initial;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    .section.second{
        display: flex;
        justify-content: end;
    }
    .section.third{
        display: flex;
        justify-content: end;
    }
    .logo{
        margin-left: 15px;
        margin-bottom: 4px;
        cursor: pointer;
    }
    .menubar{
        cursor: pointer;
    }
    .a-section{
        display: flex;
        align-items: center;
    }
    .a-section::before{
        display: block;
        content: "";
        width: 1px;
        height: 10px;
        background-color: #e1e2e3;
        margin: 0px 20px;
    }
    .a-dashboard{
        font-size: 13px;
        color: #666;
        line-height: 30px;
        height: 30px;
        border: 1px solid #e1e2e3;
        border-radius: 15px;
        padding: 0 10px;
        margin-left: 5px;
        font-weight: 400;
        text-decoration: none;
    }
    .search-btn{
        border: 0;
        background: none;
        margin-right: 4px;
    }
    .sign-btn{
        line-height: 1.4;
        border: 0;
        background: none;
        font-weight: 600;
        cursor: pointer;
    }
    .noti-btn{
        border: 0;
        background: none;
        margin: 0px 8px;
    }
    .profile{
        width: 30px;
        height: 31px;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        margin: 0px 5px;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
    }
    .profile > img{
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .drop-container{
        position: absolute;
        top: 100%;
        right: -40px;
        margin-top: 13px;
        padding: 0!important;
        display: block;
        transform: translate(50%,8px);
    }
    .profile-drop{
        width: 192px;
        background-color: #fff;
        box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
        border: 1px solid #cdcdcd;
        border-radius: 10px;
    }
    .profile-drop > ul{
        padding-top: 14px;
        padding-left: 0;
        margin: 0;
        /* border: 1px solid red; */
    }
    .drop-menu{
        /* width: 192px; */
        height: 34px!important;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #333;
        /* border: 1px solid #222; */
        &:hover{
            background-color: #f7f7f7;
            cursor: pointer;
            margin: 0px 5px;
            border-radius: 3px;
        }
    }
    .logout{
        border: 0;
        margin-top: 9px;
        background-color: #f7f7f7;
        overflow: hidden;
        height: 50px!important;
        border-radius: 0 0 10px 10px;
        border-top: 1px solid #ececec;
        display:flex;
        align-items:center;
        justify-content: center;
        font-size: 14px;
        cursor: pointer;
    }
    .profile-drop > ul >hr{
        border: 0;
        border-top: 1px solid #e1e2e3;
    }
    .bubble-point{
        position: absolute;
        right: 50%;
        bottom: 100%;
        height: 11px;
        overflow: hidden;
        margin-bottom: -1px;
        transform: translateX(-47px);
    }
    .bubble-point::after{
        content: "";
        margin-top: 4px;
        border: 1px solid #cdcdcd;
        background-color: #fff;
        height: 14px;
        width: 14px;
        display: block;
        border-top-right-radius: 30%;
        transform: rotate(-55deg) skewX(-20deg);
    }
    
`

const Menu = styled.div`
    margin : 0 auto;
    height: 50px;
    display: flex;
    max-width: 1060px;
    
`

const Navbox = styled.div`
    margin : 10px auto 15px; 
    max-width: 1060px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .leftmenu{
        align-items: center;
        margin-top: -2px;
        margin-right: 18px;
        
        .dropdown-img{
            width: 17px;
            height: 14px;
            vertical-align: middle;
        }
        .logo{
            width: 74px;
            height: 21px;
            vertical-align: middle;
            margin-left: 10px;
            margin-top: -4px;
        }
    }
    .menulist{
        height: inherit;
        text-align: center;
        /* margin-right: 160px; */
    
    
        li{
            display: inline-block;
            padding: 15px;
            font-size: 15px;
            font-weight: 500;
            line-height: 20px;
            vertical-align: middle;
            position: relative;
        }
        li:hover{
            border-bottom : 3px solid #ddd;
        }
    }
    .asidemenu{
        height: 100%;
        padding: 10px 0;
        margin-top: -9px;
        display: flex;

        .noti-btn{
            margin-top: 7px;
            margin-left: -3px;
        }
    
        .signin{
            margin-right: 6px;
            line-height: 1.4;
            position: relative;
            display: inline-block;
            height: 100%;
            vertical-align: center;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }
        .service{
            font-size: 12px;
            color: #666;
            background-color: white;
            line-height: 30px;
            height: 30px;
            border: 1px solid #e1e2e3;
            border-radius: 15px;
            padding: 0 10px;
            margin-left: 15px;
            font-weight: 400;
            margin-top: 2px;
            font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        }
        .line{
            display: block;
            content: "";
            width: 1px;
            height: 10px;
            background-color: #e1e2e3;
            margin: auto 10px;
        }
        .search-btn{
            width: 14.5px;
            height: 14.5px;
            position: relative;
            margin-top: 10px;
            margin-left: 85px;
            margin-right: 18px;
            vertical-align: top;
            
        }
        .signin-btn{
            border: none;
            background-color: white;
            font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
            margin-top: 6px;
        }
    }
`




const Profile = styled.div`
    border: ${(props) => props.isClick ? "1px solid #36f" : "1px solid #e1e2e3"}
`;

export default Header

