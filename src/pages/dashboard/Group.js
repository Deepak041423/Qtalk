import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import {useTheme} from '@mui/material/styles';
import { ChatList } from '../../data';
// import { SimpleBarStyle } from '../../components/Scrollbar';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
// import css from 'simplebar-react/dist/simplebar.min.css'
import './chats.css'
import ChatElement from '../../components/ChatElement';
import CreateGroup from '../../sections/main/CreateGroup';
import { useState } from 'react';

const Group = () => {
    const [openDialog,setOpenDialog]=useState(false);
    const theme=useTheme();

    const handleCloseDialog=()=>{
        setOpenDialog(false)
      }
    
     

  return (
    <>
     {/* <Box sx={{ position: "relative", width: 320, 
     backgroundColor: theme.palette.mode==="light"?"#F8FAFF":theme.palette.background.paper, 
     boxShadow: "0px 0px 2px rgba(0,0,0,0.25)" }}> */}

        <Stack direction={'row'} sx={{width:'100%'}}>
            {/* Left */}
            <Box sx={{height:"100vh",width:320,boxShadow:"0px 0px 2px rgba(0,0,0,0.25)",backgroundColor: (theme) => theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background}}>
                <Stack p={3} spacing={2} sx={{maxHeight:"100vh"}}>

                    <Stack >
                        <Typography variant='h5'>Groups</Typography>
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
                        <Typography variant='subtitle2' component={Link}>Create New Group</Typography>
                        <IconButton onClick={() => {setOpenDialog(true)}}>
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
                                        <Typography variant='subtitle2' sx={{color:"#676667"}}>
                                            Pinned
                                        </Typography>

                                        {/* Chat List */}
                                        
                                        {ChatList.filter((el)=>el.pinned).map((el)=>{
                                            return(
                                                <ChatElement {...el}/>
                                            )
                                        })}

                                        <Typography variant='subtitle2' sx={{color:"#676767"}}>
                                            All Groups
                                        </Typography>

                                          {/* Chat List */}
                                        
                                          {ChatList.filter((el)=> !el.pinned).map((el)=>{
                                            return(
                                                <ChatElement {...el}/>
                                            )
                                        })}

                                    </Stack>

                                    

                        {/* </SimpleBarStyle> */}

                        </SimpleBar>
                    </Stack>

                </Stack>
            </Box>

            {/* Right */}
            {/* //TODO */}

        </Stack>
        {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog}/>}
        {/* </Box> */}
    </>
  )
}

export default Group