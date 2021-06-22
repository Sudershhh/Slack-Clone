import React, { useRef ,useEffect} from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import { useSelector } from 'react-redux'
import ChatInput from './ChatInput'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase'
import Message from './Message'
function Chat() {

    const roomId= useSelector(state=> state.app.roomId)
    const chatRef = useRef(null)
    const [roomDetails] = useDocument( roomId && db.collection('rooms').doc(roomId))

    const [roomMessages,loading] = useCollection( roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc'));

    useEffect(() =>
    {
        chatRef?.current?.scrollIntoView({
            behavior:"smooth"
        })
    },[roomId,loading])

    return (
        <ChatContainer>
            {roomDetails && roomMessages &&(
                 <>
                 <Header>
                     <HeaderLeft>
                         <h4>
                             <strong>#{roomDetails?.data().name}</strong>
                         </h4>
                         <StarBorderOutlinedIcon />
                     </HeaderLeft>
                     <HeaderRight>
                         <p>
                             <InfoOutlinedIcon />Details
                         </p>
                     </HeaderRight>
                 </Header>
                 <ChatMessages>
                     {roomMessages?.docs.map(doc => {
                         const {message, user, timestamp, userImage} = doc.data();
                         return (
                             <Message key={doc.id}
                                      message={message}
                                      user={user}
                                      timestamp={timestamp}
                                      userImage={userImage}
                             />
                         )
                     })}
                     <ChatBottom ref={chatRef} />
                 </ChatMessages>
                 <ChatInput channelName={roomDetails?.data().name}  channelId={roomId} chatRef={chatRef} />
                 </>
            )}
           
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.main`
    color: black;
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    
    padding-top: 4rem;
    padding-left: 1rem;
`;


const Header = styled.section`
display: flex;
justify-content: space-between;
padding:1rem;
border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
>h4
{
    display: flex;
    text-transform: lowercase;
}
>h4 > .MuiSvgIcon-root
{
    margin-left: 10px;
    font-size: 1rem;
}

`;

const HeaderRight = styled.div`
>p{
    display: flex;
    align-items: center;
    font-size: 0.8rem;
}

>p > .MuiSvgIcon-root
{
    margin-right: 5px;
    font-size: 1rem;
}


`;

const ChatBottom = styled.div`
padding-bottom: 200px;
`;

const ChatMessages = styled.div`


`;