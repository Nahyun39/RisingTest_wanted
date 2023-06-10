import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

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

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        centerMode: true, //slide 중앙정렬
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
      };

      return (
        <>
        <Slick>
          <Slider {...settings}>
            <div>
              <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1958%2Fb670c991.jpg&w=1060&q=100' />
            </div>
            <div>
              <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1974%2Fc3bc1b35.jpg&w=1060&q=100' />
            </div>
            <div>
              <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1975%2Fdebe424c.jpg&w=1060&q=100' />
            </div>
            <div>
              <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1968%2Fb194fd92.jpg&w=1060&q=100' />
            </div>
            <div>
              <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1966%2Fa7e54eea.jpg&w=1060&q=100' />
            </div>
          </Slider>
        </Slick>
        </>
      );
}

const Slick = styled.div`
    position: relative;
    padding-top: 18px;

    img{
      border-radius: 5px;
      width: 1060px;
      height: 299px;
      margin: 10px 10px;
    }
`

const Arrow = styled.div`
    margin-left: 245px;

    .left{
      left: calc((100% - 1210px)/2);
      position: absolute;
      justify-content: center;
      width: 30px;
      height: 60px;
      opacity: .5;
      border-radius: 15px;
      background-color: #fff;
      font-size: 16px;
      z-index: 10;
      top: 120px;
      z-index: 10;
      display: flex;
      align-items: center;
      margin-top: 10px;
      cursor: pointer;
      border: none;
    }

    .right{
      right: calc((100% - 1210px)/2);
      transform: rotate(180deg);
      position: absolute;
      justify-content: center;
      width: 30px;
      height: 60px;
      opacity: .5;
      border-radius: 15px;
      background-color: #fff;
      font-size: 16px;
      z-index: 10;
      top: 120px;
      border-radius: 15px;
      background-color: #fff;
      z-index: 10;
      display: flex;
      align-items: center;
      border: none;
      margin-top: 3px;
      cursor: pointer;
    }

    svg{
      right: calc((100% - 1200px)/2);
      width: 1em;
      height: 1em;
    }
`

export default Carousel