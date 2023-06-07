import { Box, IconButton, Stack, Typography,  Button, Divider} from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import {useTheme } from '@mui/material/styles';
import { ChatList } from '../../data';
// import { SimpleBarStyle } from '../../components/Scrollbar';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
// import css from 'simplebar-react/dist/simplebar.min.css'
import './chats.css'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import ChatElement from '../../components/ChatElement';







const Chats = () => {
    const theme=useTheme()
    return (
        <Box sx={{ position: "relative", width: 320, 
        backgroundColor: theme.palette.mode==="light"?"#F8FAFF":theme.palette.background.paper, 
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)" }}>

            <Stack p={3} spacing={2} sx={{height:"100vh"}}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant='h5'>
                        Chats
                    </Typography>

                    <IconButton >
                        <CircleDashed />
                    </IconButton>
                </Stack>

                <Stack sx={{ width: "100%" }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color='#709CE6' />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder='Search...' inputProps={{"aria-label":"search"}} />
                    </Search>
                </Stack>

                <Stack spacing={"8px"}>
                    <Stack direction={"row"} alignItems={"center"} spacing={"12px"}>
                        
                        <ArchiveBox size={24}/>
                        <Button>
                            Archive
                        </Button>
                    </Stack>
                    <Divider/>
                </Stack>

                    {/* Chat Section */}

                {/* <Stack direction="column" spacing={2} className='non' sx={{flexGrow:1,overflow:"scroll",height:"100%"}}> */}
                <Stack direction="column" spacing={2}>

                    {/* <SimpleBarStyle timeout={550} clickOnTrack={false}> */}
                    {/* //if amy issue make it 550 */}
                    <SimpleBar  style={{ maxHeight: '75vh' }}>
                  
                                {/* Pinned Chats */}
                                <Stack spacing={2.4}>
                                    <Typography variant='subtitle2' sx={{color:"#676767"}}>
                                        Pinned
                                    </Typography>


                                {ChatList.filter((el)=>el.pinned).map((el)=>{
                                    return(
                                        <ChatElement {...el}/>
                                    )
                                })}

                                
                                </Stack>

                                {/* All Chats */}
                                <Stack spacing={2.4}>
                                    <Typography variant='subtitle2' sx={{color:"#676767"}}>
                                        All Chats
                                    </Typography>


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
    )
}

export default Chats