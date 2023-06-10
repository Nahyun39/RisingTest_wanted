import React from 'react'
import styled from 'styled-components'

const Advantage = () => {
  return (
    <Wrap>
        <Section>
            <h1>원티드 이력서는 이런 점이 좋아요!</h1>
            <ul className='advantageBox'>
                <li className='box1'>
                    <div>
                        <h2>이력서 하나로 모든 준비 끝</h2>
                        <h3>이력서 작성부터 지원까지 한 곳에서!<br />
                            회사별 양식에 맞출 필요 없이 하나의 이력서만 작성하세요.
                        </h3>
                    </div>   
                    <img src='https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_01.png' />
                </li>
                <li className='box2'>
                    <div>
                        <h2>완성도를 높여주는 이력서 코칭</h2>
                        <h3>이력서 코칭*으로 서류 합격률 30% UP<br />
                            300만 합격 데이터를 분석해 합·불합격 단어를 알려드려요.
                        </h3>
                        <h6>*일부 직군에서는 사용 제한, 추후 확대 예정</h6>
                    </div>   
                    <img src='https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_02.png' />
                </li>
                <li className='box3'>
                    <div>
                        <h2>이력서만 등록해도 찾아오는 면접 제안</h2>
                        <h3>매치업은 서류 전형 없이 바로 면접 진행!<br />
                            채용담당자가 직접 면접을 제안합니다.
                        </h3>
                    </div>   
                    <img src='https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_03.png' />
                </li>
                <li className='box4'>
                    <div>
                        <h2>언제 어디서나 자유롭게 작성</h2>
                        <h3>주말엔 노트북, 출퇴근길엔 스마트폰으로.<br />
                            자유롭게 작성하고 필요할 땐 PDF로 저장하세요.
                        </h3>
                    </div>   
                    <img src='https://static.wanted.co.kr/images/userweb/resume_intro/resume_advantage_04.png' />
                </li>    
            </ul>
        </Section>
    </Wrap>
  )
}

const Wrap = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
`

const Section = styled.div`
    padding-top: 60px;
    width: 1060px;
    margin: 0 auto;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

    h1{
        font-weight: 700;
        font-size: 35px;
        text-align: center;
    }

    .advantageBox{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 50px;
        margin: 0;
        padding: 28px 0;
        border: 0;
    }

    .box1{
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        width: 520px;
        height: 480px;
        padding-top: 50px;
        border-radius: 10px;
        text-align: left;
        background-color: #f1f7fe;
    }

    div{
        padding-left: 50px;

        h2{
            margin-top: 0;
            font-weight: 600;
            font-size: 26px;
            line-height: 135.7%;
        }

        h3{
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            margin-top: 15px;
        }

        h6{
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            margin-top: -8px;
            color: #8a8a8a;
        }
    }

    img{
            width: 520px;
            height: 312px;
            box-sizing: border-box;
            vertical-align: middle;
    }

    .box2{
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        width: 520px;
        height: 480px;
        padding-top: 50px;
        border-radius: 10px;
        text-align: left;
        background-color: #f1f1fe;
    }

    div{
        padding-left: 50px;

        h2{
            margin-top: 0;
            font-weight: 600;
            font-size: 26px;
            line-height: 135.7%;
        }

        h3{
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            margin-top: 15px;
        }
    }

    img{
            width: 520px;
            height: 312px;
            box-sizing: border-box;
            vertical-align: middle;
    }

    .box3{
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        width: 520px;
        height: 480px;
        padding-top: 50px;
        border-radius: 10px;
        text-align: left;
        margin-top: 20px;
        background-color: #f3f8ee;
    }

    div{
        padding-left: 50px;

        h2{
            margin-top: 0;
            font-weight: 600;
            font-size: 26px;
            line-height: 135.7%;
        }

        h3{
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            margin-top: 15px;
        }
    }

    img{
            width: 520px;
            height: 312px;
            box-sizing: border-box;
            vertical-align: middle;
    }

    .box4{
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        width: 520px;
        height: 480px;
        padding-top: 50px;
        border-radius: 10px;
        text-align: left;
        margin-top: 20px;
        background-color: #ecf8fb;
    }

    div{
        padding-left: 50px;

        h2{
            margin-top: 0;
            font-weight: 600;
            font-size: 26px;
            line-height: 135.7%;
        }

        h3{
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            margin-top: 15px;
        }
    }

    img{
            width: 520px;
            height: 312px;
            box-sizing: border-box;
            vertical-align: middle;
    }
`

export default Advantage