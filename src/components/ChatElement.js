import { Box, Stack, Typography, Avatar, Badge } from '@mui/material'
import React from 'react'
import {styled, useTheme } from '@mui/material/styles';
import {  faker } from '@faker-js/faker';

import StyledBadge from "./StyledBadge"



const ChatElement =({id,name,img,msg,time,unread,online})=>{
    const theme=useTheme()

    return(
        <Box p={2} sx={{ width: "100%",borderRadius:1, 
        backgroundColor: theme.palette.mode==="light"?"#fff":theme.palette.background.default, 
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)" }}>


        <Stack direction="row" alignItems={"center"} justifyContent="space-between">
            <Stack direction="row" spacing={2}>

            {online?<StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    variant="dot"
                    >
                        <Avatar src={faker.image.avatar()}/>
                    </StyledBadge> : <Avatar src={faker.image.avatar()}/>}

                

                    <Stack spacing={0.3}>
                        <Typography variant='subtitie2'>
                            {name}
                        </Typography>
                        <Typography variant='caption'>
                            {msg}
                        </Typography>
                     </Stack>
            </Stack>

            

            <Stack spacing={2} alignItems={"center"}>
                <Typography sx={{fontWeight:600}} variant='caption'>
                    {time}
                </Typography>
                <Badge color='primary' badgeContent={unread}>

                </Badge>
            </Stack>
            

        </Stack>
        </Box>

       
    )
}

export default ChatElement
