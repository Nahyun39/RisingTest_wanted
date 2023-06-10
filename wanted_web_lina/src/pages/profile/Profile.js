// import styled from 'styled-components';
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// const Profile = () => {
//     const { id } = useSelector((state) => state.JobGroupReducer);
//     const token = localStorage.getItem("jwt");

//     const [userData, setUserData] = useState([]);
//     const [selfIntro, setSelfIntro] = useState("");

//     useEffect(() => {
//         axios.get(`https://prod.wanted-a.online/users/${id}`,{
//             headers: {
//                 'x-access-token': token,
//             }
//             })
//             .then(res => {
//                 console.log(res);
//                 setUserData(res.data.result);
//             })
//             .catch(err => console.log(err))
//     }, [])

//     return(
//       <Wrap>
//         <div className='box'>
//           <div className='title'>프로필</div>
//            { userData ? (
//               userData.map((data) => {
//                 return (
//                   <>
//                   <div>{data.name}</div>
//                   <div>{data.phoneNumber}</div>
//                   </>
//                 )
//               })
//            ) : null}
//         </div>
//       </Wrap>
