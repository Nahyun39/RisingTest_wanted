import React from 'react'
import styled from 'styled-components'

const recommendBtn = () => {
  return (
    <Wrap>
        <button className='recommend-btn'><span>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.👀<svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg></span></button>
    </Wrap>
  )
}

const Wrap = styled.div`
    width: 1060px;
    margin: 0 auto;

    .recommend-btn{
        width: 1060px;
        border-radius: 30px;
        height: 64.67px;
        border: 0;
        background-image: linear-gradient(90deg,#01a9fe -12%,#2f5fef 37%,#046afe 72%,#00d2dd 110%);
        font-size: 17px;
        color: #fff;
        font-weight: bold;

        svg{
          width: 1em;
          height: 1em;
          display: inline-block;
          fill: #fff;
        }
    }
`

export default recommendBtn