import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Top from '../resume/Top'
import Advantage from '../resume/Advantage'
import PositionRecommend from '../resume/PositionRecommend'
import Sample from '../resume/Sample'

const NoLoginResume = () => {
  return (
    <div>
        <Header />
        <Top />
        <Advantage />
        <Sample />
        <PositionRecommend />
        <Footer />
    </div>
  )
}

export default NoLoginResume