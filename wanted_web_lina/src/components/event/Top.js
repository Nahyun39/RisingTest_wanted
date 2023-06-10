import React from 'react'
import styled from 'styled-components'

const Top = () => {
    return(
        <Wrap>
            <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-marketing-image.s3.ap-northeast-2.amazonaws.com%2Fcareer-biz-banner%2F20230228_event_web__2000x300.jpg&w=2000&q=100' />
        </Wrap>
    );
}

const Wrap = styled.div`
    img{
        width: 100%;
        height: 300px;
    }
`

export default Top