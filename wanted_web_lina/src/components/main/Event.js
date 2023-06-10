import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";

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

const Event = () => {
    const [eventList, setEventList] = useState([]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
    };

    
    useEffect(() => {
        axios.get("https://prod.wanted-a.online/events/main",{
            })
            .then(res => {
                // console.log(res);
                setEventList(res.data.result);
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <Section>
            <div className="title-wrap">
                <div className="title">
                    <h3>테마로 모아보는 요즘 채용</h3>
                    <p>이벤트 전체보기<svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 19 19"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg></p>
                </div>
            </div>
            <div className="slide">
                <StyledSlide {...settings}>
                    {eventList ? (
                        eventList.map((data) => {
                            return(
                                <div>
                                    <ImgWrap>
                                        <Thumbnail src={data.thumbnail} />
                                    </ImgWrap>
                                    <div className="eventType">{data.eventType}</div>
                                    <div className="name">{data.title}</div>
                                    <div className="intro">{data.startDate}</div>
                                </div>
                            )
                        })
                    ) : null}
                    
                </StyledSlide>
            </div>
        </Section>
    );
}

const Section = styled.div`
    width: 1060px;
    margin: 0 auto;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    padding: 70px 0px 80px 0px;
    .title-wrap{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title{
        font-size: 22px;
        line-height: 1.33;
        font-weight: 700;
        color: #333;
        padding-bottom: 5px;

        p{
            font-size: 14px;
            font-weight: 500;
            line-height: normal;
            vertical-align: middle;
            color: #8a8a8a!important;
            margin-top: -10px;
            vertical-align: middle;
            margin-bottom: 35px;
            margin-left: 76px;

            svg{
                width: 15px;
                height: 15px;
                vertical-align: top;
            }
        }
    }
    .a-wrap{
        text-align: center;
    }
    .a-wrap > a {
        font-weight: 500;
        line-height: normal;
        vertical-align: middle;
        color: #767676!important;
        font-size: 15px;
    }
    .a-wrap > a::after{
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #767676;
        margin-left: 5px;
    }
    .slide{
        margin: 30px 0px 0px 0px;
        /* border: 1px solid violet; */
        width: 1060px;
        display: flex;
    }
    .icon-wrap{
        display: flex;
        /* border: 1px solid #222; */
        margin: 10px 0px;
    }
    .icon-box{
        color: #ff9100;
        border-color: #ff9100;
        border: 1px solid;
        height: 20px;
        border-radius: 2px;
    }
    .icon-box > span {
        font-size: 11px;
        font-weight: 700;
        line-height: normal;
        padding: 0 6px;
    }
    .event-title{
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
    }
    .name{
        margin-top: 16px;
        font-size: 18px;
        font-weight: 700;
        line-height: 21.6px;
        color: #333
    }
    .intro{
        margin: 8px 0px;
        font-size: 14px;
        line-height: 16.8px;
        font-weight: 500;
        color: #939393;
    }
    .company-img{
        display: inline;
        margin-right: 8px;
        margin-top: 8px;
        border: 1px solid rgba(0,0,0,.05);
    }
`;

const StyledSlide = styled(Slider)`
    .slick-list{ //얘로 크기조정 했음
        width: 1060px;
        /* border: 1px solid #222; */
        height: 390px;
    }
    .slick-slide{
        margin-right: 10px;
        /* background-color: red; */
    }
    .slick-track{
        display: flex;
    }
    
    .slick-prev:before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
        content: "\f104";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #222;
        -webkit-font-smoothing: antialiased;
        padding: 5px 10px;
        font-size: 22px;
        border: 1px solid #e1e2e3;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
        border-radius: 50%;
        background-color: #fff;
    }
    .slick-next:before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
        content: "\f105";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #222;
        -webkit-font-smoothing: antialiased;
        padding: 5px 10px;
        font-size: 22px;
        border: 1px solid #e1e2e3;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
        border-radius: 50%;
        background-color: #fff;
    }
    .slick-prev{
        top: -50px;
        z-index: 99;
        left: 0;
    }
    .slick-next{
        right:15px;
        top: -50px;
    }


    .eventType{
        font-size: 11px;
        font-weight: 700;
        padding: 3px 6px;
        color: #ff9100;
        border: 1px solid #ff9100;
        border-radius: 3px;
        align-items: center; 
        margin-top: 10px;
        width: 31px;
        height: 13px;
    }
`;

const ImgWrap = styled.div`
    width: 522px;
    height: 273px;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    outline: 1px solid rgba(0,0,0,.05);
`;

const Title = styled.div`
    margin-top: 17px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    color: #333;
`;

const Tag = styled.div`
    font-size: 12px;
    font-weight: 900;
    color: #333;
    margin-top: 13px;
`;

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



export default Event;