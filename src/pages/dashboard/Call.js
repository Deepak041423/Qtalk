import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import {useTheme} from '@mui/material/styles';
import { CallLogs, ChatList } from '../../data';
// import { SimpleBarStyle } from '../../components/Scrollbar';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
// import css from 'simplebar-react/dist/simplebar.min.css'
import './chats.css'
import ChatElement from '../../components/ChatElement';
import CreateGroup from '../../sections/main/CreateGroup';
import { useState } from 'react';
import { CallLogElement } from '../../components/CallElement';
import StartCall from '../../sections/main/StartCall';

// const Group = () => {
//     const [openDialog,setOpenDialog]=useState(false);
//     const theme=useTheme();

//     const handleCloseDialog=()=>{
//         setOpenDialog(false)
//       }
    

const Call = () => {
  const theme=useTheme();

  const [openDialog,setOpenDialog]=useState(false);

    const handleCloseDialog=()=>{
        setOpenDialog(false)
      }
  return (
    <>
     <Stack direction={'row'} sx={{width:'100%'}}>
            {/* Left */}
            <Box sx={{height:"100vh",width:320,boxShadow:"0px 0px 2px rgba(0,0,0,0.25)",backgroundColor: (theme) => theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background}}>
                <Stack p={3} spacing={2} sx={{maxHeight:"100vh"}}>

                    <Stack >
                        <Typography variant='h5'>Call logs</Typography>
                    </Stack>

                    <Stack sx={{width:"100%"}}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color='#709CE6' />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder='Search...' inputProps={{"aria-label":"search"}} />
                        </Search>
                    </Stack>

                    <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
                        <Typography variant='subtitle2' component={Link}>Start Conversation</Typography>
                        <IconButton onClick={() => {
                          setOpenDialog(true)
                          }}>
                            <Plus style={{color:theme.palette.primary.main}}/>
                        </IconButton>
                    </Stack>

                    <Divider/>

                             {/* Chat Section */}

                    {/* <Stack direction="column" spacing={2} className='non' sx={{flexGrow:1,overflow:"scroll",height:"100%"}}> */}
                    <Stack direction="column" spacing={3}>

                        {/* <SimpleBarStyle timeout={550} clickOnTrack={false}> */}
                        {/* //if amy issue make it 550 */}
                        <SimpleBar  style={{ maxHeight: '75vh' }}>

                                    
                                    <Stack spacing={2.4}>
                                       

                                        {/* Call Logs */}
                                        {CallLogs.map((el)=>  <CallLogElement {...el}/>)}
                                      
                                

                                    </Stack>

                                    

                        {/* </SimpleBarStyle> */}

                        </SimpleBar>
                    </Stack>

                </Stack>
            </Box>

            {/* Right */}
            {/* //TODO */}

        </Stack>

        {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog}/>}
    </>
  )
}

export default Call