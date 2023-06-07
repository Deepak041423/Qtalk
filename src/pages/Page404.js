import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const Page404 = () => {
  return <>
   <Stack alignItems={'center'} justifyContent={'center'} width={'100%'}>
     <Typography p={1}  variant="article"> Welcome to Spider Verse...1.0</Typography>
     <Divider/>
      <Typography p={1}  variant="caption">404 Error...There is no page here</Typography>
    </Stack>
  
  </>;
};


export default Page404;