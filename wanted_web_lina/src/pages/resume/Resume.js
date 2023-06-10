import React from 'react'
import LoginResume from '../../components/resume/LoginResume'
import NoLoginResume from '../../components/resume/NoLoginResume'

const Resume = () => {
    const isLogin = localStorage.getItem('jwt');
  return (
    <>
        {isLogin ? (
            <LoginResume />
        ) : (
            <NoLoginResume />
        )}
    </>
  )
}

export default Resume