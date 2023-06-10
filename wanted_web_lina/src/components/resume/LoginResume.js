import ResumeList from "./ResumeList";
import styled from 'styled-components';
import Advantage from "./Advantage";
import Sample from "./Sample";
import PositionRecommend from "./PositionRecommend";
import Footer from "../common/Footer";
import Header from './../common/Header';
import LoginTop from "./Logintop";

const LoginResume = () => {
    return(
        <Wrap>
            <Header />
            <LoginTop />
            <Advantage />
            <Sample />
            <PositionRecommend/>
            <Footer/>
        </Wrap>
    );
}

const Wrap = styled.div`
    height: 100vh;
    /* width: 100vw; */
    background-color: #f8f8f8;
    overflow-y: auto;
    /* padding-bottom: 100px; */
`;

export default LoginResume;