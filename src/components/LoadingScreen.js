import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const LoadingScreen = () => {
  return <>
  
  <Stack alignItems={'center'} justifyContent={'center'} width={'100%'}>
     <Typography p={1}  variant="article"> Welcome to Spider Verse...1.0</Typography>
     <Divider/>
      <Typography p={1}  variant="caption">Wait till the page is loading..</Typography>
    </Stack>
  
  </>;
};

export default LoadingScreen;
