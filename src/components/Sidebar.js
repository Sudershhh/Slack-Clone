import React from 'react'
import styled from 'styled-components'
import SidebarOption from './SidebarOption';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from "@material-ui/icons/Add"
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../firebase';


function Sidebar() {

    const [user] = useAuthState(auth);

    const [channels]=  useCollection(db.collection('rooms'))



    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Your Community</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption />

            {channels?.docs.map( (doc) => (
                <SidebarOption title = {doc.data().name}
                               key={doc.id}
                               id={doc.id}
                               
                                />
            )
            )}


        </SidebarContainer>
    )

}

export default Sidebar


const SidebarContainer = styled.aside`
background-color: var(--slack-color);
color: white;
flex: 0.28;
margin-top: 50px;
border-top: 1px solid #49274b;
max-width: 260px;
>hr
{
    margin: 10px 0;
    border: 1px solid #49274b;
}



@media (max-width: 420px) {

    
    position: fixed;
    height: 100vh;
    width: 60%;
    transition: all 400ms ease-in-out;
    z-index: 40;
  }


`;
const SidebarHeader = styled.div`
display: flex;
padding:13px;
border-bottom: 1px solid #49274b;

> .MuiSvgIcon-root
{
    padding: 8px;
    color:#49274b;
    font-size:2rem;
    background-color: white;
    border-radius: 50%;
}


`;
const SidebarInfo = styled.div`
flex: 1;

>h2
{
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 5px;
}

@media (max-width: 420px)
{
    >h2{

        font-size: 0.8rem;
        font-weight: 700;
    }
}

>h3
{
    display: flex;
    font-size: 0.8rem;
    font-weight: 400;
    align-items: center;
}

>h3 > .MuiSvgIcon-root{
    color:	#00FF7F;
    font-size: 1rem;
}

`;

