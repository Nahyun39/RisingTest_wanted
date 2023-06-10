import React from 'react'
import styled from 'styled-components'

const PositionBtn = () => {
  return (
    <Wrap>
        <button className='recommend-btn'><span>채용 중인 포지션 보러가기</span></button>
    </Wrap>
  )
}

const Wrap = styled.div`
    width: 1060px;
    margin: 0 auto;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

    .recommend-btn{
        margin-top : 60px;
        margin-bottom : 60px;
        width: 1060px;
        border-radius: 30px;
      
        border: 0;
        background-image: linear-gradient(90deg,#01a9fe -12%,#2f5fef 37%,#046afe 72%,#00d2dd 110%);
        font-size: 18px;
        color: #fff;
        font-weight: bold;
        padding: 21px 30px;

        svg{
          width: 1em;
          height: 1em;
          display: inline-block;
          fill: #fff;
        }
    }
`

export default PositionBtn