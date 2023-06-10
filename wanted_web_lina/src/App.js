import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react'
import Main from './pages/main/Main'
import Resume from './pages/resume/Resume';
import Recruitment from './pages/recruitment/Recruitment'
import Profile from './pages/profile/Profile'
import Bookmark from './pages/profile/Profile'
import Event from './pages/event/Event'
import Modal from "../src/components/common/Modal";
import SignModal from "../src/components/common/signModal";
import PasswordModal from "../src/components/common/passwordModal";
import Email from "../src/components/modal/Email";
import Sign from "../src/components/modal/Sign";
import Password from "../src/components/modal/Password";
import Write from './components/resume/Write'
import ResumeList from './components/resume/ResumeList'


function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/recruitment' element={<Recruitment />}></Route>
              <Route path='/resume' element={<Resume />}></Route>
              <Route path='/write' element={<Write />}></Route>
              <Route path='/resumelist' element={<ResumeList />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path ='/bookmark' element={<Bookmark />} ></Route>
              <Route path ='/event' element={<Event />} ></Route>
              
            </Routes>

            <Modal header='로고'>
                    <Email />
              </Modal>

              <SignModal header="회원가입">
                  <Sign />
              </SignModal>

              <PasswordModal header="비밀번호 입력">
                  <Password />
              </PasswordModal>
        </BrowserRouter>
    </>
  )
}

export default App;
