import React from 'react';
import styled from 'styled-components';

const Sample = () => {
    return (
        <Wrap>
            <div className='title'>
                <h1>쓰는 사람도 보는 사람도 편하게</h1>
            </div>
            <div className='box'>
                <div className='exampleBox'>
                    <div className='summary'>
                        <h1>김티드</h1>
                        <div className='email'>
                            이메일: wanted@wantedlab.com <br />
                            연락처: 000-0000-0000
                            <div className='tag'>
                                성별, 사진 등 불필요한 개인정보 최소화
                            </div>
                        </div>
                        <p>Next.js, TypeScript, React 기반의 5년차 프론트엔드 개발자 김티드입니다. <br />
                            새로운 기술을 활용해 비즈니스 문제를 해결하는 것에 관심이 많습니다.
                        </p>
                        <div className='detail'>
                            <ul>
                                <li>웹/앱 서비스의 프론트엔드 설계, 개발, 운영 경험</li>
                                <li>다수의 UI 구현 경험으로 사용자 인터렉션에 대한 높은 이해도</li>
                                <li>제한된 리소스 환경에서 기획 단계부터 참여한 프로젝트 다수</li>
                                <li>프로젝트 리딩 및 다양한 팀과의 협업 경험</li>
                            </ul>
                            <div className='tag'>
                                깔끔한 UI와 가독성 높은 디자인
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='career'>
                            <div className='careerLeft'>
                                <h5>경력</h5>
                            </div>
                            <div className='careerRight'>
                                <div className='top'>
                                    <div>
                                        <h5>원티드랩</h5>
                                        <p className='sub'>프론트엔드팀 / 팀원</p>
                                    </div>
                                    <p>2020.7 - 현재 재직중</p>
                                </div>
                                <ul>
                                    <li className='first-career'>
                                        <div>
                                            <h6>웹사이트 SEO 2022.05 - 2022.06</h6>
                                            <p>도메인 정책 수립 및 URL 표준화(canonical) 및 페이지 별 메타태그/키워드 검증 <br />
                                                - 성과: 오가닉 트래픽 30% 증가 <br />
                                                - 사용 기술: Next.js, Google Search console <br />
                                                - 링크: https://www.wanted.co.kr
                                            </p>
                                            <p></p>
                                        </div>
                                        <div className='tag'>
                                            업무 강점과 경력을 강조하는 템플릿
                                        </div>
                                    </li>
                                    <li className='second-career'>
                                        <div>
                                            <h6>글로벌 채용 서비스 신규 개발 2021.08 - 2022.04</h6>
                                            <p>메인 프론트엔드 개발자로 프로젝트 구조 설계 및 각종 컴포넌트 개발 (기여도 70%) <br />
                                                - 성과: 일본/싱가폴/대만 3개국 대상 채용 서비스 출시 <br />
                                                - 사용 기술: React.js, Next.js, redux, styled-component <br />
                                                - 링크: https://www.wantedglobal.com
                                            </p>
                                            <p></p>
                                        </div>
                                    </li>
                                </ul>
                                <div className='line'></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='bottom'>
                        <div>
                            <h5>한국빅컴퍼니</h5>
                            <p>디지털기술개발팀 / 사원</p>
                        </div>
                        <p className='date'>2018.03 - 2020.06</p>
                    </div>
                    <div className='bottom-btn'>
                            <button className='white'>샘플 다운로드</button>
                            <button className='blue'>새 이력서 작성</button>
                        </div> 
                </div>
            </div>
            
        </Wrap>
    )
}

const Wrap = styled.div`
    margin-top: 70px;
    padding-top: 100px;
    position: relative;
    background-color: #f2f4f7;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

    .title{
        text-align: center;
        max-width: 1060px;
        margin: 0 auto;

        h1{
        font-weight: 600;
        font-size: 40px;
        margin: 0;
        }
    }

    .box{
        margin-top: 50px;
    }

    .exampleBox{
        max-width: 1060px;
        margin: 0 auto;
        background-color: #fff;
    }

    .summary{
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: .0056em;
        padding: 90px 90px 20px;
        color: #8a8a8a;

        h1{
            font-weight: 700;
            font-size: 28px;
            line-height: 135.7%;
            letter-spacing: -.023em;
        }
    }

    .email{
        color: #333;
        font-weight: 600;
        line-height: 150%;
        letter-spacing: .0056em;
        transition: color 1s linear .1s;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .tag{
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            padding: 0 15px;
            width: fit-content;
            height: 36.35px;
            background-color: #f8f8f8;
            border-radius: 5px;
            font-weight: 600;
            font-size: 14px;
            line-height: 138.5%;
            text-align: center;
            letter-spacing: .025em;
            color: #08ba9c;
            box-shadow: 5px 5px 20px rgb(0 0 0 / 5%), 5px 5px 15px rgb(0 0 0 / 10%);
        }
    }

    .detail{
        display: flex;
        justify-content: space-between;
        align-items: center;

        ul{
            margin: 0;
            list-style-type: disc;
            padding-left: 25px;
            letter-spacing: .0056em;

            li{
                margin-top: 15px;
                color: #333;
                font-weight: 600;
                line-height: 150%;
            }
        }
    }

    .tag{
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            padding: 0 15px;
            width: fit-content;
            height: 36.35px;
            background-color: #f8f8f8;
            border-radius: 5px;
            font-weight: 600;
            font-size: 14px;
            line-height: 138.5%;
            text-align: center;
            letter-spacing: .025em;
            color: #08ba9c;
            box-shadow: 5px 5px 20px rgb(0 0 0 / 5%), 5px 5px 15px rgb(0 0 0 / 10%);
    }

    .line{
        margin: 50px 0;
        height: 1px;
        background-color: #c2c4c8;;
    }

    .career{
        display: flex;
        position: relative;
        color: #8a8a8a;
    }

    .careerLeft{
        width: 78px;

        h5{
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            letter-spacing: .0056em;
        }
    }

    .careerRight{
        width: 100%;
    }

    .top{
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        font-size: 16px;

        h5{
            font-weight: 600;
            font-size: 16px;
            line-height: 150%;
            letter-spacing: .0056em;
        }

        .sub{
            margin-top: -20px;
            font-weight: 400;
            font-size: 14px;
            line-height: 142.9%;
            letter-spacing: .0145em;
        }
    }

    ul{
        margin-top: 20px;
        letter-spacing: .0145em;
        margin: 0;
        padding: 0;
        border: 0;
    }

    .first-career{
        color: #333;
        font-weight: 600;
        line-height: 150%;
        letter-spacing: .0056em;
        transition: color 1s linear .1s;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h6{
            font-weight: 600;
            font-size: 14px;
            margin-right: 10px;
            margin-top: -0.5px;
        }

        p{
            font-weight: 600;
            color: #333;
            letter-spacing: .0056em;
            font-size: 14px;
            margin-top: -20px;
        }

        li::before{
            content: "·";
            position: absolute;
            top: 100px;
            left: 40;
            font-size: 55px;
            line-height: 14px;
        }
    }

    .second-career{
        color: #8A8A8A;
        font-weight: 600;
        line-height: 150%;
        letter-spacing: .0056em;
        transition: color 1s linear .1s;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 3px;

        h6{
            font-weight: 600;
            font-size: 14px;
            margin-right: 10px;
            margin-bottom: 30px;
        }

        p{
            font-weight: 600;
            color: #333;
            letter-spacing: .0056em;
            font-size: 14px;
            margin-top: -20px;
            color: #8A8A8A;
        }

        li::before{
            content: "·";
            position: absolute;
            top: 100px;
            left: 40;
            font-size: 55px;
            line-height: 14px;
        }
    }

    .bottom{
        max-width: 1060px;
        margin: 0 auto;
        padding-top: 50px!important;
        padding-bottom: 100px!important;
        padding-left: 160px;
        padding-right: 90px;
        background-color: #f8f8f8;
        display: flex;
        justify-content: space-between;

        div{
            margin: 0;
            padding: 0;
            border: 0;

            h5{
                font-weight: 600;
                font-size: 16px;
                margin: 0;
                letter-spacing: .0056em;
                color: #8a8a8a;
            }

            p{
                margin-top: 5px;
                font-weight: 400;
                font-size: 14px;
                margin: 5px 0 0;
                line-height: 142.9%;
                letter-spacing: .0145em;
                color: #8a8a8a;
            }
        }

        .date{
            font-weight: 600;
            margin: 0;
            font-size: 16px;
            line-height: 150%;
            letter-spacing: .0056em;
            color: #8a8a8a;
        }
    }

    .bottom-btn{
        width: 100%;
        margin: 0 auto;
        padding-bottom: 100px!important;
        background-color: #f8f8f8;
        display: flex;
        justify-content: center;

        .white{
            width: fit-content;
            height: 54px;
            padding: 12px 32px;
            font-weight: 600;
            font-size: 20px;
            line-height: 150%;
            letter-spacing: .0056em;
            border-radius: 30px;
            background-color: #ffffff;
            margin-right: 10px;
            border: 1px solid #e1e2e3;
            
        }

        .blue{
            width: fit-content;
            height: 54px;
            padding: 12px 32px;
            font-weight: 600;
            font-size: 20px;
            line-height: 150%;
            letter-spacing: .0056em;
            border-radius: 30px;
            background-color: #3366ff;
            color: #fff;
            border: none;
        }
    }

`

export default Sample;