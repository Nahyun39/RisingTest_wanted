import React from 'react'
import styled from 'styled-components'

const CareerMiddle = () => {
    return (
      <Wrap>
        <Box>
          <div className='txt'>내 연차에 이 연봉 괜찮은가? 궁금할 땐</div>
          <div className='txtsub'>
            <img src='https://static.wanted.co.kr/career_connect/gomin.webp' />
            <strong>커리어 중간점검</strong>
        </div>
        </Box>
      </Wrap>
    )
  }
  
  const Wrap = styled.div`
    max-width: 1060px;
    margin: 60px auto 0;
    width: 87.72%;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  `
  
  const Box = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: #2b4bc8;
    color: #fff;
    border-radius: 10px;
    padding: 50px 0 22px 120px;
    background-image: url(https://static.wanted.co.kr/career_connect/banner-back-pc-jobsfeed.webp);
    background-size: auto 100%;
    background-position: 100%;
  
    .txt{
      font-weight: 800;
      font-size: 22px;
      line-height: 26px;
      margin-left: -50px;
      margin-top: -25px;
    }
  
    .txtsub{
      font-weight: 600;
      align-items: center;
      display: flex;
      font-size: 16px;
      letter-spacing: 0.0056em;
      height: 32px;
  
      img{
        width: 135px;
        height: 100px;
        display: inline-block;
        fill: #fff;
        margin-top: -15px;
      }

      strong{
        z-index: 1;
        border-radius: 20px;
        background-color: #fff;
        color: #2b4bc8;
        font-size: 15px;
        line-height: 18px;
        font-weight: 600;
        padding: 11px 20px;
        margin-right: 30px;
        margin-left: 60px;
        margin-top: -20px;
      }
    }
  `

export default CareerMiddle