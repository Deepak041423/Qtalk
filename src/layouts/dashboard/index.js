
// import Logo from "../../assets/Images/logo.ico"
// import Logo from "../../assets/Images/jsp1.jpeg"
// import Logo from "../../assets/Images/jsp2.jpeg"
// import Logo from "../../assets/Images/jsp3.png"
// import Logo from "../../assets/Images/jsppng.jpg"
// import Logo from "../../assets/Images/jsp4.png"
// import Logo from "../../assets/Images/qjpng.png"

// Switch Component

// const AntSwitch = styled(Switch)(({ theme }) => ({
//   width: 40,
//   height: 20,
//   padding: 0,
//   display: 'flex',
//   '&:active': {
//     '& .MuiSwitch-thumb': {
//       width: 15,
//     },
//     '& .MuiSwitch-switchBase.Mui-checked': {
//       transform: 'translateX(9px)',
//     },
//   },
//   '& .MuiSwitch-switchBase': {
//     padding: 2,
//     '&.Mui-checked': {
//       transform: 'translateX(20px)',
//       color: '#fff',
//       '& + .MuiSwitch-track': {
//         opacity: 1,
//         // backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
//         backgroundColor: theme.palette.mode === 'dark' ? 'theme.palette.primary.main' : 'theme.palette.primary.main',
//       },
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     transition: theme.transitions.create(['width'], {
//       duration: 200,
//     }),
//   },
//   '& .MuiSwitch-track': {
//     borderRadius: 20 / 2,
//     opacity: 1,
//     backgroundColor:
//       theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
//     boxSizing: 'border-box',
//   },
// }));

//.............................................................

//.............................................................

//...................................................................................


import Sidebar from "./Sidebar";
import Stack from '@mui/material/Stack';
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated=false;

const DashboardLayout = () => {

  const theme=useTheme();

  console.log(theme);


  if(!isAuthenticated) {
    return <Navigate to="/auth/login"/>
  }

  return (
 
    <Stack direction={"row"}>
   
      {/* SideBar */}
      <Sidebar/>

      <Outlet />
    </Stack>
   
  );
};

export default DashboardLayout;
