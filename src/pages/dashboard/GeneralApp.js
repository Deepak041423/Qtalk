import './global.css'
import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from '../../components/Contact';
import { useSelector } from 'react-redux';
import SharedMessages from '../../components/SharedMessages';
import StarredMessages from '../../components/StarredMessages';


//Dynamic Loading import
// const Cat=lazy(()=>import("../../components/Cat"))

const GeneralApp = () => {
const theme=useTheme()
const {sidebar}=useSelector((store) => store.app);


  return (
    <Stack direction={"row"} sx={{width:"100%"}}>

    {/* Chats */}
     <Chats/>

      {/* App Component */}

      {/* 420 for lhs sidebar and chats section and 320 for rhs sidebar */}
      <Box sx={{height:"100%",
                width: sidebar.open ? 'calc(100vw - 420px - 320px)' : 'calc(100vw - 420px)',
                backgroundColor: theme.palette.mode === 'light' ? '#F0F4FA' : theme.palette.background.default}}>
        <Conversation/>
      </Box>

      {/* Contact */}
      {/* if sidebar is open then only render contact component */}
      {sidebar.open && (()=>{
          switch (sidebar.type) {
            case "CONTACT":
              return<Contact/>

            case "STARRED":
            
            return<StarredMessages/>;

            case "SHARED": 
            return<SharedMessages/>
          
            default:
              break;
          }
      }) () }
    
      
    </Stack>
  );
};

export default GeneralApp;


// 24:28