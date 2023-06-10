import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import item from '../../data/ThemeList.json'

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

const Theme = () => {
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
                <h2>테마로 모아보는 요즘 채용</h2>
            </div>
        <Slick>
        <Slider {...settings}>
                {
                    item.themeList.map(items => {
                        return (
                            <div className='box'>
                                <img src={items.image} />
                                <h3 className='h3'>{items.title}</h3>
                                <p className='date'>{items.subtitle}</p>
                                <div className='icon'>
                                    <img src={items.icon1} />
                                    <img src={items.icon2} />
                                    <img src={items.icon3} />
                                    <img src={items.icon4} />
                                    <img src={items.icon5} />
                                    <img src={items.icon6} />
                                    <img src={items.icon7} />
                                    <img src={items.icon8} />
                                    <img src={items.icon9} />
                                    <img src={items.icon10} />
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
    padding: 60px 0 80px;
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
            margin-bottom: 40px;
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
        margin-top: -453px;
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

    .h3{
        font-size: 16px;
        font-weight: 600;
    }

    .h3-transparent{
        -webkit-filter: opacity(10%) brightness(90%);
        filter: opacity(10%) brightness(90%);
        font-size: 16px;
        font-weight: 600;

    }

    .icon{
        margin-top: 8px;
        display: flex;

        img{
            width: 30px;
            height: 30px;
            margin-right: 8px;
        }

        span{
            font-size: 14px;
            font-weight: 500;
            color: #666;
            margin-top: 6px;
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


export default Theme;