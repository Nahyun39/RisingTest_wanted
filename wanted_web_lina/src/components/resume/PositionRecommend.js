import React from 'react'
import styled from 'styled-components'

const PositionRecommend = () => {
  return (
    <Section>
        <div className='box'>
            <div className='left'>
                <div className='top'>이력서 완성하면 <br />
                    <p><img src='https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_logo.png' />
                    가 포지션 추천까지</p>
                </div>
                <p className='middle'>이력서를 분석하여 딱 맞는 포지션을 찾아드려요. <br />
                    원티드 AI가 추천한 포지션은 서류합격률이 일반 지원 대비 4배 높습니다.
                </p>
                <button className='bottom'>지금 시작하기</button>
            </div>
            <div className='right'>
                <img src='https://static.wanted.co.kr/images/userweb/resume_intro/resume_ai_sample.png' />
            </div>
        </div>
    </Section>
  )
}

const Section = styled.div`
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    max-width: 1060px;
    margin: 0 auto;
    height: 452px;
    padding: 0!important;
    

    .box{
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        text-align: left;

        .top{
            font-weight: 700;
            font-size: 36px;
            line-height: 130%;
            letter-spacing: -.024em;

            p{
                display: flex;
                height: 47px;
                align-items: baseline;
                grid-gap: 5px;
                gap: 5px;
                margin-top: 1px;
                margin-bottom: 3px;

                img{
                    width: 198px;
                    height: 33px;
                    vertical-align: middle;
                }
            }
        }

        .middle{
            font-weight: 400;
            font-size: 18px;
            line-height: 160%;
            margin-top: 20px;
        }

        .bottom{
            height: 54px;
            margin-top: 16px;
            font-weight: 600;
            font-size: 20px;
            line-height: 150%;
            letter-spacing: .0056em;
            color: #fff;
            background-color: #36f;
            border: none;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
            padding: 0 27px;
            box-sizing: border-box;
            border-radius: 25px;
            cursor: pointer;
        }
        .right{
            img{
                width: 516px;
                height: 352px;
                position: absolute;
                bottom: 0;
                left: 575px;
            }
        }

    }
`

export default PositionRecommend