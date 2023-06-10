import React from 'react'
import styled from 'styled-components'
import item from '../../data/Position.json'

const Position = () => {
  return (
    <Wrap>
        <div className='line'></div>
        <div className='title'>    
            <h2>요즘 뜨는 포지션</h2>
        </div> 
        <Section>
            {
                item.position.map(items => {
                    return (
                        <>
                        <div className='content'>
                            <img src={items.image} />
                            <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fill-opacity="0.25"></path></svg>
                            <div className='name'>{items.title}</div>
                            <div className='subtitle'>{items.subtitle}</div>
                            <div className='nation'>{items.nation}</div>
                            <div className='money'>채용보상금 1,000,000원</div>
                        </div>
                        </>
                    )
                })
            }
        </Section>
    </Wrap>
  )
}

const Wrap = styled.div`
    padding: 60px 0 80px;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

    .title{
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .line{
        border-top: 1px solid #ececec;
        max-width: 1060px;
        margin : 0 auto;
        width: 100%;
        padding-bottom: 50px;
    }
`

const Section = styled.div`
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    max-width: 1060px;
    margin: 0 auto;
    width: 100%;
    display: flex;

    .content{
        width: 100%;
        margin-top: 20px;

        .img{
            display: block;
        }

        img{
            width: 255px;
            height: 185px;
            position: relative;
            background-size: cover;
            background-position: 50%;
            border-radius: 6px;
        }

        svg{
            position: absolute;
            margin-left: -30px;
            margin-top: 8px;
        }

        .name{
            font-size: 18px;
            font-weight: 600;
            line-height: 1.2;
            max-height: 2.4em;
            text-align: left;
            color: #333;
            padding-top: 10px;
            padding-bottom: 10px;
        }

        .subtitle{
            font-size: 14px;
            font-weight: 600;
            line-height: normal;
            max-height: 2.4em;
            text-align: left;
            color: #333;
            padding-bottom: 10px;            
        }

        .nation{
            font-size: 14px;
            font-weight: 600;
            line-height: normal;
            max-height: 2.4em;
            text-align: left;
            color: #999999;
            padding-bottom: 10px;              
        }

        .money{
            font-size: 14px;
            font-weight: 500;
            line-height: normal;
            max-height: 2.4em;
            text-align: left;
            color: #333;            
        }
    }
`

export default Position