import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResumeHead = () => {
    const { id } = useParams();
    const token = localStorage.getItem("jwt");

    const [titleValue, setTitleValue] = useState("");
    const [NameValue, setNameValue] = useState("");
    const [EmailValue, setEmailValue] = useState("");
    const [PhoneValue, setPhoneValue] = useState("");

    useEffect(() => {
        axios.get(`https://prod.wanted-a.online/users`,{
            headers: {
                'x-access-token' : token,
            }
            })
            .then(res => {
            console.log(res.data);
            setTitleValue(res.data.result.map(i=>i.name));
            setNameValue(res.data.result.map(i=>i.name));
            setEmailValue(res.data.result.map(i=>i.email));
            setPhoneValue(res.data.result.map(i=>i.phoneNumber));
            })
            .catch(err => console.log(err))
    }, [id])

    const onTitleChange = (e) => {
        setTitleValue(e.target.value);
    }

    const onNameChange = (e) => {
        setNameValue(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmailValue(e.target.value);
    }

    const onPhoneChange = (e) => {
        setPhoneValue(e.target.value);
    }

    return(
        <Wrap>
            
            <input className="title"  value={titleValue[24]} onChange={onTitleChange}/>
            <div className="info-wrap">
                <input className="info"  value={NameValue[24]} onChange={onNameChange}/>
            </div>
            <div>
                <input className="info"  value={EmailValue[24]} onChange={onEmailChange}/>
            </div>
            <div>
                <input className="info"  value={PhoneValue[24]} onChange={onPhoneChange}/>
            </div>

            
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 1060px;
    margin: 0 auto;
    /* border: 1px solid #222; */
    padding-top: 130px;
    margin-bottom: 60px;
    .title{
        color: #3b3d40;
        font-size: 36px;
        line-height: 36px;
        font-weight: 600;
        margin: 0 0 50px;
        background-color: transparent;
        border: none;
        &:focus{
            outline: none;
        }
    }
    .info-wrap{
        margin-top: 10px;
    }
    .info{
        margin-top: 10px;
        font-size: 16px;
        margin-bottom: 0;
        background-color: transparent;
        border: none;
        &:focus{
            outline: none;
        }
    }
`;

export default ResumeHead;
