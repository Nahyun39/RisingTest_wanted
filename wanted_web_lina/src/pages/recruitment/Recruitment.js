import React from 'react'
import Carousel from '../../components/recruitment/Carousel'
import AIPosition from '../../components/recruitment/AIPosition';
import Header from './../../components/common/Header';
import PositionBtn from './../../components/recruitment/PositionBtn';
import CareerMiddle from '../../components/recruitment/CareerMiddle';
import ProfileMatchup from '../../components/recruitment/ProfileMatchup';
import Footer from '../../components/common/Footer';
import Theme from '../../components/recruitment/Theme';
import Position from '../../components/recruitment/Position';
import CompanyInfo1 from '../../components/recruitment/CompanyInfo1'
import CompanyInfo2 from '../../components/recruitment/CompanyInfo2'

const Recruitment = () => {
  return (
    <div>
        <Header />
        <Carousel />
        <PositionBtn />
        <AIPosition />
        <CareerMiddle />
        <ProfileMatchup />
        <CompanyInfo1 />
        <CompanyInfo2 />
        <Theme />
        <Position />
        <Footer />
    </div>
  )
}

export default Recruitment