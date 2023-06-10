import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <Wrap>
            <Footer1>
                <div className='left'>
                    <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'></img>
                    <span className='info'>기업소개</span>
                    <span>이용약관</span>
                    <span>고객센터</span>
                    <span>개인정보 처리방침</span>
                </div>
                <div className='right'>
                    <Link to ='https://www.instagram.com/wantedjobs.kr/'>
                        <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100' alt='instagram'></img>
                    </Link>
                    <Link to ='https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw'>
                        <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100' alt='youtube'></img>
                    </Link>
                    <Link to ='https://www.facebook.com/wantedkr'>
                        <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100' alt='facebook'></img>
                    </Link>
                    <Link to ='https://apps.apple.com/kr/app/id1074569961'>
                        <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100' alt='apple'></img>
                    </Link>
                    <Link to ='https://play.google.com/store/apps/details?id=com.wanted.android.wanted&pli=1'>
                        <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100' alt='google'></img>
                    </Link>
                </div>
            </Footer1>
            <Footer2>
                <p>(주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147<br/>
                유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | 사업자등록번호 : 299-86-00021 | 02-539-7118<br/>
                © Wantedlab, Inc.</p>
            </Footer2>
        </Wrap>
    </>
  )
}

const Wrap = styled.div`
    border-top: 1px solid #ececec;
    background-color: #fff;
    padding: 18px 0 65px;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

`

const Footer1 = styled.div`
    width: 90%;
    max-width: 1060px;
    margin : 0 auto 15px;
    display: flex;

    .left{
        flex-grow: 1;
        display: flex;
        align-items: center;

        span{
            font-size: 15px;
            color: #3a3a3a;
            font-weight: 500;
            line-height: 2.6;
            margin-right: 40px;
            white-space: nowrap;
        }

        .info{
            font-size: 15px;
            color: #3a3a3a;
            font-weight: 500;
            line-height: 2.6;
            margin-right: 40px;
            white-space: nowrap;
            margin-left: 40px;
        }
    }

    .right{
        display: flex;
        line-height: 2.6;
        flex-wrap: nowrap;

        img{
            margin-left: 14px;
            width: 21px;
            height: 20px;
        }
    }
`

const Footer2 = styled.div`
    border-top: 1px solid #ececec;
    padding-top: 17px;
    width: 90%;
    max-width: 1060px;
    margin: 0 auto 15px;

    p{
        float: left;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.6666666667em;
        color: #767676;
        width: calc(100% - 290px);
        margin-right: 40px;
    }
`

export default Footer