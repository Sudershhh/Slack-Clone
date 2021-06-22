import React from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import {useDispatch} from "react-redux"
import { appSliceActions } from '../features/appSlice';


function SidebarOption(props) {
    const dispatch = useDispatch();

    const {Icon , title , addChannelOption ,id} = props
    



    const addChannel = () =>
    {
        const channelName = prompt('Enter channel name');

        if(channelName)
        {
            db.collection('rooms').add({
                name:channelName,
            })
        }
    }

    const selectChannel = () =>
    {
        if(id)
        {
            dispatch(appSliceActions.enterRoom({roomId:id}))
        }
    }


    return (
        <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
            
            {Icon &&  <Icon  fontSize="small" style={{ marginTop:"10px", marginRight:"10px"}} />}
            
            {Icon ? (<h3>{title}</h3>) :
             (<SidebarOptionChannel>
                <span>#</span> {title}
            </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
display: flex;
align-items: center;
font-size: 12px;
margin-top: 10px;
padding: 0 0.5em;
cursor: pointer;
:hover{
    opacity: 0.9;
    background-color: #340e36;
}

>h3
{
    font-weight: 500;
}

>h3 > span
{
    padding: 10px;
}

`;

const SidebarOptionChannel = styled.h3`
    
    padding: 5px 0;
    font-weight: 300;

`;