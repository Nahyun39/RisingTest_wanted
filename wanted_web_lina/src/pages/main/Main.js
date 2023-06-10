import React from 'react'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Carousel from '../../components/main/Carousel'
import RecommendBtn from '../../components/main/RecommendBtn'
import InfoBtn from '../../components/main/InfoBtn'
import Insight from '../../components/main/Insight'
import TestBtn from '../../components/main/TestBtn'
import Event from '../../components/main/Event'
import Insites from '../../components/main/Insites'

const Main = () => {
  return (
    <div>
        <Header />
        <Carousel />
        <Insight />
        {/* <Insites /> */}
        <TestBtn />
        <RecommendBtn />
        <Event />
        <InfoBtn />
        <Footer />
       
    </div>
  )
}

export default Main