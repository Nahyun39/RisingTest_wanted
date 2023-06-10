import styled from 'styled-components';
import Header from '../common/Header'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// import {firestore } from '../../firebase'
import { storage } from '../../firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import {v4} from 'uuid'


//     }
    const ResumeList =  () =>{
        const [fileUpload, setFileUpload] = useState(null);
        const[ fileList, setFileList ] = useState([]);

        const fileListRef = ref(storage, 'files/')
        const uploadFile = () => {
            if(fileUpload == null) return;
            const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
            uploadBytes(fileRef, fileUpload).then(() => {
                alert('Image upload!')
            })
        }
        console.log(fileList[0]);

        // const handleImageChange = (e) => {
        //     if(e.target.files[0]){
        //         setFileUpload(e.target.files[0]);
        //     }
        // }
        console.log(fileUpload);

        useEffect(() => {
            listAll(fileListRef).then((response) => {
                response.items.forEach((item) => {
                    getDownloadURL(item).then((url) => {
                        setFileList((prev) => [...prev, url]);
                    })
                })
            })
        },[])

        const navigate = useNavigate();

        const onWrite = () => {
           navigate(`/write`);
        }
    

    return(
        <>
        <Header />
            <Wrap>
                    <div className="box">
                        <div className="head">
                            <div className="section left">
                                최근 문서
                            </div>
                            <div className="section right">
                                원티드 이력서 소개<svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11.7341 16.2486C10.8677 16.5748 9.94548 16.7442 9 16.7442C4.7232 16.7442 1.25581 13.2771 1.25581 9C1.25581 4.72293 4.7232 1.25581 9 1.25581C11.0825 1.25581 13.0329 2.08087 14.476 3.524C15.9194 4.96743 16.7442 6.91758 16.7442 9C16.7442 11.0833 15.9194 13.0334 14.4761 14.4759C14.2308 14.721 14.2307 15.1186 14.4759 15.3639C14.721 15.6091 15.1186 15.6093 15.3639 15.3641C17.0406 13.6885 18 11.4199 18 9C18 6.58111 17.0406 4.31263 15.364 2.636C13.6877 0.959718 11.419 0 9 0C4.02965 0 0 4.02934 0 9C0 13.9707 4.02965 18 9 18C10.0973 18 11.1694 17.8031 12.1766 17.4239C12.5011 17.3017 12.6652 16.9396 12.543 16.615C12.4208 16.2905 12.0586 16.1264 11.7341 16.2486Z" fill="#3366FF"></path><path d="M8.16279 5.65116C8.16279 5.18819 8.53786 4.81395 9 4.81395C9.46214 4.81395 9.83721 5.18819 9.83721 5.65116C9.83721 6.11414 9.46214 6.48837 9 6.48837C8.53786 6.48837 8.16279 6.11414 8.16279 5.65116Z" fill="#3366FF"></path><path d="M9.62791 8.99668V13.0664C9.62791 13.4132 9.34678 13.6944 9 13.6944C8.65322 13.6944 8.37209 13.4132 8.37209 13.0664V8.99668C8.37209 8.64989 8.65322 8.36877 9 8.36877C9.34678 8.36877 9.62791 8.64989 9.62791 8.99668Z" fill="#3366FF"></path></svg>
                            </div>
                        </div>
                        <div className="list">
                            <div className="resume upload">
                                <div className="btn">
                                    <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 0H0.75C0.335786 0 0 0.335786 0 0.75V12.25C0 12.6642 0.335786 13 0.75 13H3V15.25L3.00685 15.3518C3.05651 15.7178 3.3703 16 3.75 16H15.25L15.3518 15.9932C15.7178 15.9435 16 15.6297 16 15.25V3.75L15.9932 3.64823C15.9435 3.28215 15.6297 3 15.25 3L15.1482 3.00685C14.7822 3.05651 14.5 3.3703 14.5 3.75L14.499 14.499H4.499L4.49975 13H12.25C12.6642 13 13 12.6642 13 12.25V0.75C13 0.335786 12.6642 0 12.25 0ZM11.499 1.5V11.5H1.499V1.5H11.499Z" fill="#fff"></path></svg>
                                </div>
                                <Link to='/write'><p>새 이력서 작성</p></Link>
                            </div>
                            <div className="resume upload">
                                <button className="file-btn" ></button>
                                    <input type='file' onChange={(event) => {setFileUpload(event.target.files[0])}}
                                    /><svg xmlns="https://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 32 34"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g stroke="#666" stroke-width="3"><g><g><path d="M25.6 20.117L25.6 28.579 0 28.617 0 20.154M12.8.708L12.8 21.108" transform="translate(-543 -398) translate(543 398) translate(3.2 2.55)"></path><path d="M18.8 0L12.8 7.083 6.8 0" transform="translate(-543 -398) translate(543 398) translate(3.2 2.55) rotate(-180 12.8 3.542)"></path></g></g></g></g></svg>
                                <div className="file-btn" onClick={uploadFile}>파일 업로드</div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
            </Wrap>
            </>
    );
}


const Wrap = styled.div`
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    max-width: 1060px;
    margin : 0 auto;
    width: 100%;
    
    .name-input{
        border: 0;
        font-size: 18px;
        font-weight: 600;
        color: #333;
        width: 200px;
        &:focus{
            outline: none;
        }
    }
    .box{
        height: 100%;
        width: 1060px;
        margin: 0 auto;
        /* border: 1px solid #2222; */
        padding-bottom: 100px;
    }
    .head{
        display: flex;
        flex-direction: row;
        padding-top: 80px;
        margin-bottom: 20px;
    }
    .section{
        flex-grow: 1;
    }
    .section.left{
        font-size: 16px;
        font-weight: 600;
        line-height: 1.4;
    }
    .section.right{
        text-align: right;
        color: #36f!important;
        /* font-size: 1import { storage } from './../../firebase'; */
        font-weight: 600;
    }
    .section.right > span::after{
        content: "\f05a";
        font-family: "Font Awesome 5 Free";
        font-weight: 600;
        line-height: 1;
        color: #36f;
        margin-left: 5px;
    }
    .list{
        /* border: 1px solid #222; */
        display: grid;
        grid-template-columns: 248px 248px 248px 248px;
        grid-template-rows: 188px;
        column-gap: 22px;
        row-gap: 22px;
    }
    .resume{
        border: 1px solid #dbdbdb;
        background-color: #fff;
        cursor: pointer;
    }
    .resume.upload{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .btn{
        width: 74px;
        height: 74px;
        background-color: #36f;
        color: #fff;
        border-radius: 50%;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .file-btn{
        width: 74px;
        height: 74px;
        background-color: #e1e2e3;
        color: #666;
        border-radius: 50%;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .resume.upload > p {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: normal;
        text-align: center;
        color: #333;
        margin: 20px 0 0;
    }
    .btn > span::after{
        content: "\f24d";
        font-family: "Font Awesome 5 Free";
        font-weight: 300;
        line-height: 1;
        font-size: 24px;
        color: #fff;
    }
    .file-btn > span::after{
        content: "\f35d";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        font-size: 24px;
        color: #fff;
    }
    .under{
        margin-top: 80px;
        width: 247px;
        height: 41px;
        border-top: 1px solid #dbdbdb;
        display:flex;
        flex-direction: row;
    }
    .menu{
        flex-grow: 1;
        /* border: 1px solid #222; */
        display: flex;
        align-items: center;
    }
    .menu.icon{
        display: flex;
        justify-content: end;
    }
    .resume.item{
        padding-top: 20px;
    }
    .menu > span::before{
        content: "\f142";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        color: #999999;
        margin-right: 20px;
        cursor: pointer;
    }
    .menu> span {
        position: relative;
    }
    .name{
        padding-left: 20px;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #999999;
    }
    .day{
        padding-left: 20px;
        color: #999999;
    }
    .lang{
        border: 1px solid #999;
        color: #999;
        width: 20px;
        height: 20px;
        border-radius: 2px;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        font-weight: 600;
        margin-right: 10px;
        margin-left: 20px;
    }
    .write{
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: normal;
        text-align: left;
        color: #999999;
    }
    .drop{
        width: 160px;
        background-color: #fff;
        top: 15px;
        border: 1px solid #d2d2d2;
        right: 12px;
        position: absolute;
        box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
        padding: 5px 0px;
        display: flex;
        flex-direction: column;
    }
    .drop > button{
        text-align: left;
        border:none;
        background-color: #fff;
        padding: 3px 20px;
        cursor: pointer;
        &:hover{
        background-color: #f8f8f8;
        }
    }

`

export default ResumeList;