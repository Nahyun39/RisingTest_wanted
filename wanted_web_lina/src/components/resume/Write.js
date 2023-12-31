import styled from 'styled-components';
import Header from '../../components/common/Header';
import ResumeHead from './ResumeHead'
import Intro from "./Intro";
import Annual from "./Annual";
import School from "./School";
import Skill from "./Skill";
import Prize from "./Prize";
import Language from "./Language";
import Link from "./Link";
// import Footer from "../../components/resume/footer";
import ResumeSubmit from './ResumeSubmit';

const Write = () => {
    return(
        <>
        <Header />
        <Wrap>
           
            <div className="menu">
                <div className="box">
                    <div className="section">
                        <div className="lang">
                            <span></span>
                            
                            <select>
                                <option value="ko" selected="">한국어</option>
                                <option value="ja">日本語</option>
                                <option value="tw">繁體中文</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                    </div>
                    <div className="section right">
                        <button className="guide">합격 / 불합격 단어 가이드</button>
                        <button className="check"><span>내 이력서 단어 체크</span></button>
                        <label className="toggle">
                            {/* <input type="checkbox" /> */}
                            <span></span>
                        </label>
                        <button className="down"></button>
                        
                    </div>
                </div>
            </div>
        </Wrap>
        <ResumeHead />
        <Intro />
        <Annual />
        <School />
        <Skill />
        <Prize />
        <Language />
        <Link />
        <ResumeSubmit />
        </>
    );
}

const Wrap = styled.div`
    padding-top: 50px;
    .menu{
        /* border: 1px solid red; */
        height: 80px;
        position: fixed;
        background-color: #fff;
        top: 52px;
        left: 0;
        right: 0;
        z-index: 50;
    }
    .box{
        width: 1060px;
        height: 80px;
        margin: 0 auto;
        /* border: 1px solid blue; */
        display:flex;
        align-items: center;
    }
    .section{
        flex-grow:1;
        /* border: 1px solid violet; */
    }
    .lang{
        width: 102px;
        height: 40px;
        border-radius: 2px;
        border: 1px solid #333;
        background-color: #fff;
        position: relative;
    }
    .lang > select{
        background: none;
        position: relative;
        width: 100%;
        min-width: 98px;
        height: 100%;
        padding-left: 37px;
        border: #e0e0e0;
        background-color: transparent;
        box-shadow: none;
    }
    .lang > span{
        position: absolute;
        top: 10px;
    }
    .lang > span::before{
        content: "\f0ac";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 18px;
        line-height: 1;
        color: #333;
        margin-left: 13px;
    }
    .section.right{
        display: flex;
        justify-content: end;
    }
    .guide{
        height: 40px;
        font-size: 14px;
        border: none;
        background-color: transparent;
        color: #36f;
        font-weight: 600;
        margin-right: 5px;
    }
    .check{
        height: 40px;
        font-size: 14px;
        border: none;
        background-color: transparent;
        color: #333;
        font-weight: 600;
        position: relative;
    }
    .check > span{
        padding-left: 5px;
    }
    .check::before{
        content: "";
        width: 1px;
        height: 14px;
        background-color: #ccc;
        position: absolute;
        margin-top: 3px; 
        left: 0;
    }
    .toggle{
        position: relative;
        display: inline-block;
        width: 56px;
        height: 32px;
        margin-top: 3px;
    }
    .toggle > input {
        margin: 4px 0 0;
    }
    .toggle > span{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f2f4f7;
        transition: .4s;
        border-radius: 15px;
        border: 1px solid #ececec;
    }
    .toggle > span::before{
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        border-radius: 50%;
        left: 2px;
        top: 1px;
        background-color: #fff;
        transition: .4s;
        border: 1px solid #e1e2e3;
    }
    .down{
        width: 40px;
        min-width: unset;
        height: 40px;
        padding: 0;
        border: 1px solid #999;
        margin-left: 30px;
        color: #76797e;
        background-color: #ffffff;
        border-radius: 3px;
    }
    .down::before{
        content: "\f019";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 18px;
        line-height: 1;
        color: #999;
    }
`;

export default Write;

