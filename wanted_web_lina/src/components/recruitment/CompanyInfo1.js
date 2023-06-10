import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import item from '../../data/CompanyInfo1.json'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <Arrow>
        <button className='right' onClick={onClick}>
          <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
        </button>
      </Arrow>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <Arrow>
        <button className='left' onClick={onClick}>
            <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
        </button>
      </Arrow> 
    );
  }

const CompanyInfo1 = () => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 500,
        arrows: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
      };

  return (
    <Wrap>
        <Section>
            <div className='title'>    
                <h2>#50인 이상 <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&w=75&q=75" /> 회사를 소개합니다</h2>
                <p>포지션으로 더보기<svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg></p>
            </div>
        <Slick>
        <Slider {...settings}>
                {
                    item.companyInfo1.map(items => {
                        return (
                            <div className='box'>
                                <img src={items.image} />
                                <div className='txt'>
                                    <img src={items.icon} className='icon'/>
                                    <div className='titlebox'>
                                        <h3 className='h3'>{items.title}</h3>
                                        <p className='date'>{items.subtitle}</p>
                                    </div>
                                    <button>팔로우</button>
                                </div>
                                <div className='icon'>
                                    <span>{items.plus}</span>
                                </div>
                            </div>
                        )
                    })
                }
        </Slider>
        </Slick>
    </Section>
    </Wrap>
  )
}

const Wrap = styled.div`
    padding: 20px 0 80px;
    margin-bottom: 300px;
`

const Section = styled.div`
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    max-width: 1060px;
    margin: 0 auto;
    width: 100%;

    .title{
        justify-content: center;
        align-items: center;
        text-align: center;

        h2{
            font-size: 22px;
            margin-bottom: 20px;

            img{
                width: 24px;
                height: 24px;
                vertical-align: top;
            }
        }

        p{
            font-size: 14px;
            font-weight: 500;
            line-height: normal;
            vertical-align: middle;
            color: #8a8a8a!important;
            margin-top: -10px;
            vertical-align: middle;
            margin-bottom: 35px;

            svg{
                width: 15px;
                height: 15px;
                vertical-align: top;
            }
        }
    }
`

const Arrow = styled.div`

    .left{
        left: calc((100% - 1210px)/2);
        position: absolute;
        justify-content: center;
        width: 36px;
        height: 36px;
        opacity: .5;
        border-radius: 30px;
        font-size: 16px;
        z-index: 10;
        display: flex;
        align-items: center;
        margin-top: -75px;
        margin-left: 75px;
        margin-right: 100px;
        cursor: pointer;
        border: 1px solid #e1e2e3;
        background-color: #fff;
    }

    .right{
        margin-top: -65px;
        right: calc((100% - 1210px)/2);
        transform: rotate(180deg);
        margin-left: 1005px;
        justify-content: center;
        width: 36px;
        height: 36px;
        opacity: .5;
        border: 1px solid #e1e2e3;
        border-radius: 50px;
        margin-top: -460px;
        font-size: 16px;
        border-radius: 30px;
        background-color: #fff;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    svg{
      right: calc((100% - 1200px)/2);
      width: 1em;
      height: 1em;
    }
`

const Slick = styled.div`
    img{
        width: 510px;
        height: 268px;
        object-fit: cover;
        border-radius: 5px;
        margin-bottom: 12px;
        margin-right: 20px;
    }

    .icon{
        width: 42px;
        height: 42px;

    }

    .h3{
        font-size: 18px;
        font-weight: 700;
    }

    .h3-transparent{
        -webkit-filter: opacity(10%) brightness(90%);
        filter: opacity(10%) brightness(90%);
        font-size: 16px;
        font-weight: 600;

    }

    .txt{
        display: flex;
        align-items:flex-start;
        justify-content: space-between;
        margin-top: 15px;
        width: 500px;

        .titlebox{
            margin-top: -15px;
        }

        button{
            font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
            color: #36f;
            background-color: #fff;
            border: 1px solid #e1e2e3;
            padding: 12px 25.5px 11px;
            line-height: 1;
            height: 40px;
            font-size: 15px;
            font-weight: 600;
            border-radius: 30px;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
            margin-left: 200px;
        }
    }

    .date{
        font-size: 13px;
        font-weight: 500;
        color: #aaa;
        margin-top: -9px;
    }

    .date-transparent{
        -webkit-filter: opacity(10%) brightness(90%);
        filter: opacity(10%) brightness(90%);
        font-size: 13px;
        font-weight: 500;
        color: #aaa;
        margin-top: -9px;
    }

    .transparent{
        -webkit-filter: opacity(10%) brightness(90%);
        filter: opacity(10%) brightness(90%);
    }

    .plus{
        display : flex;
        position: absolute;
        top: 30%;
        margin-left: 220px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
        svg{
            width: 16px;
            height: 16px;
            padding: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 9px;
            border-radius: 20px;
            background-color: #fff;
            border: 1px solid #e1e2e4;
            font-size: 14px;
        }
        span{
            font-size: 16px;
            font-weight: 600;
        }
    }
`        


export default CompanyInfo1;