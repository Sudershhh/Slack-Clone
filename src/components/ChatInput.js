import styled from 'styled-components'
import React, { useRef} from 'react'
import Button from "@material-ui/core/Button/Button"
import { db ,auth} from '../firebase';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput(props) {
    const [user] = useAuthState(auth);
    const InputRef= useRef();

    const {channelId , channelName ,chatRef}= props;

    const sendMessage = (event) =>
    {
        event.preventDefault();
        if(!channelId)
        {
            return;
        }

        db.collection("rooms").doc(channelId).collection('messages').add({

            message:InputRef.current?.value,
            user:user.displayName,
            userImage: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        })  

        chatRef?.current?.scrollIntoView({
            behavior:"smooth",
        })

        InputRef.current.value="";

    }

    return (
        <ChatInputContainer>
            <form>
                <input placeholder={`Message #${channelName}`}
                       ref={InputRef}
                 />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
                
            
            </form>            
        </ChatInputContainer>
    )
}

export default ChatInput


const ChatInputContainer = styled.div`
    border-radius:20px;
    >form
    {
        position:relative;
        display: flex;
        justify-content: center;
    }

    >form > input
    {
        position: fixed;
        bottom:3rem;
        width: 60%;
        border: 1px solid gray;
        border-radius:3px;
        padding: 1.3rem;
        outline: none;
        font-size: 1rem;

    }


    >form > button
    {
        display: none;
    }
`;