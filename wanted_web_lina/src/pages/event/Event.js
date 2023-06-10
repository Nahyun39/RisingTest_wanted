import React from 'react'
import styled from  'styled-components'
import Header from './../../components/common/Header';
import Footer from '../../components/common/Footer';
import Top from '../../components/event/Top'
import EventFilter from '../../components/event/eventFilter'

const Event = () => {
    return (
        <>
        <Header />
        <Top />
        <EventFilter />
        <Footer />
        </>
    )
}

export default Event