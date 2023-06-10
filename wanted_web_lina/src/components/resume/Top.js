import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import { openMoAction } from '../../redux/actions/Modal'

const Top = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMoRedux = () => {
        dispatch(
            openMoAction()
        );
    };

    return(
        <Wrap>
            <Section>
                <div class='txt'>
                    <h1>합격을 부르는 이력서</h1>
                    <h2>원티드 이력서로 지원 시<br />
                        일반 이력서보다 서류 합격률이 2배 높아집니다.
                    </h2>
                    <button className='manage-btn' onClick={openMoRedux}>이력서 관리</button>
                    <button className='write-btn'onClick={openMoRedux}>새 이력서 작성</button>
                </div>
            </Section>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    overflow-x: hidden;
`

const Section = styled.div`
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    width: 100%;
    height: 442px;
    background-image: url(https://static.wanted.co.kr/images/userweb/resume_intro/intro_img_web.png);
    background-size: cover;
    background-repeat: no-repeat;

    .txt{
        width: 100%;
        text-align: center;
        color: #fff;
        padding-top: 80px!important;
        padding-bottom: 0!important;
        
        h1{
            font-weight: 700;
            font-size: 56px;
            line-height: 128.6%;
            letter-spacing: -.027em;
        }

        h2{
            font-weight: 400;
            font-size: 22px;
            line-height: 127.3%;
            letter-spacing: -.012em;
            margin-top: -25px;
        }

        .manage-btn{
            background: #fff;
            color: #36f;
            border: 1px solid #36f;
            height: 54px;
            padding: 12px 32px;
            margin-top: 20px;
            font-weight: 600;
            font-size: 20px;
            line-height: 150%;
            letter-spacing: .0056em;
            border-radius: 30px;
            cursor: pointer;
        }

        .write-btn{
            background: #36f;
            color: #fff;
            border: 1px solid #36f;
            height: 54px;
            padding: 12px 32px;
            cursor: pointer;
            font-weight: 600;
            font-size: 20px;
            line-height: 150%;
            letter-spacing: .0056em;
            border-radius: 30px;
            margin-left: 10px;
        }
    }
`

export default Top