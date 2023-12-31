import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";

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

const AIPosition = () => {
  const isLogin = localStorage.getItem('jwt');

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
      {isLogin ? (
        <>
        </>
      ) : (
        <>
          <div className='box'>
            <div className='head'>
              <div className='logo'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink"><rect width="80" height="79.322" fill="url(#pattern0)"></rect><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image0_35_742" transform="translate(-0.338983 -0.444444) scale(0.00423729)"></use></pattern><image id="image0_35_742" width="405" height="405" xlinkHref="data:image/png;base64,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"></image></defs></svg>
                <img src='https://static.wanted.co.kr/images/ai/logo-wantedai.png' />
              </div>
              <h2 className='title'><img src='https://static.wanted.co.kr/images/ai/logo-wantedai.png' />가 제안하는 합격률 높은 포지션<svg width="24" height="24" class="MatchedJobList_questionMark__pcXLi" viewBox="0 0 17 17"><defs><filter id="bfoh3u0w3a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><g><g transform="translate(-1080 -374) translate(1080 374)"><g><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745" transform="translate(1 1)"></path><path fill="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671" transform="translate(1 1) rotate(-180 7.053 10.408)"></path><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783" transform="translate(1 1)"></path></g></g></g></g></g></svg></h2>
            </div>
            <div className='recommend'>
              <h3>회원가입하면 포지션을 추천해드려요.</h3>
              <button>지금 시작하기</button>
            </div>
            
          </div>
        </>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  .box{
    max-width: 100vw;
    width: 100%;
    background: #f4f8fb;
    background-image: url(https://wanted-dev.static.wanted.co.kr/banner/Jobsfeed_ai_banner.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 60px;
  }

  .head{
    margin-bottom: 4px;

    .logo{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding-top: 60px;
      padding-bottom: 40px;

      svg{
        width: 80px;
        height: 80px;
      }

      img{
        width: 170px;
        height: 28px;
        margin-bottom: 3px;
      }
    }

    .title{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      line-height: 1.05;
      letter-spacing: normal;
      text-align: left;
      color: #111;

      img{
        width: 114px;
        height: 19px;
        vertical-align: -4px;
        margin-right: 3px;
      }

      svg{
        width: 24px;
        height: 24px;
        margin-left: 5px;
      }
    }
  }

  .recommend{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: transparent;
      padding: 0;
      margin: 0 auto;
      gap: 5px;
    

      h3{
        color: #555;
        font-size: 16px;
        line-height: 19.2px;
      }

      button{
        padding: 10px 20px;
        border-radius: 25px;
        background-color: #36f;
        font-size: 16px;
        font-weight: 700;
        color: #fefefe;
        line-height: 22px;
        flex: 0 0 auto;
        border: none;
        cursor: pointer;
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
        margin-top: -75px;
        right: calc((100% - 1210px)/2);
        transform: rotate(180deg);
        margin-left: 1015px;
        justify-content: center;
        width: 36px;
        height: 36px;
        opacity: .5;
        border: 1px solid #e1e2e3;
        border-radius: 50px;
        margin-top: -450px;
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

export default AIPosition