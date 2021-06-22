import React from 'react'
import styled from 'styled-components';


function Message(props) {

    const {message, user, timestamp, userImage} = props;
    return (
        <MessageContainer>
            <img src={userImage} alt="User" />
            <MessageInfo>
                <h4>
                    {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message;


const MessageContainer = styled.section`
display: flex;
align-items:center;
padding:1.2rem;

>img{
    height: 3rem;
    border: 10px;
}

`;


const MessageInfo = styled.div`
padding-left: 10px;

>h4>span{
    color:gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 0.7rem;
}






`;