import React from 'react'
import styled from 'styled-components'

const TestBtn = () => {
  return (
    <Wrap>
      <Box>
        <div className='txt'>내 유형과 가장 어울리는 회사는?</div>
        <div className='txtsub'>유형테스트 하러가기<svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg></div>
      </Box>
      <div className='line'></div>
    </Wrap>
  )
}

const Wrap = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  width: 87.72%;
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

  .line{
    border: 1px solid #ececec;
    margin-top: 60px;
    margin-bottom: 60px;
  }

`

const Box = styled.div`
  cursor: pointer;
  background: #0d99ff;
  color: #fff;
  border-radius: 10px;
  padding: 28px 0 22px 120px;
  background-image: url(https://static.wanted.co.kr/images/type-test/typetest-banner-image.png);
  background-size: auto 100%;
  background-position: 100%;
  background-repeat: no-repeat;

  .txt{
    font-weight: 800;
    font-size: 22px;
    line-height: 26px;
  }

  .txtsub{
    font-weight: 600;
    align-items: center;
    display: flex;
    font-size: 16px;
    letter-spacing: 0.0056em;
    height: 32px;

    svg{
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: #fff;
    }
  }
`

export default TestBtn