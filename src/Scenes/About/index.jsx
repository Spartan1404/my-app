import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import Divider from '@mui/material/Divider';


const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box margin={'30px'}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mb={'10px'}
        
      >
        <img
          alt="profile-user"
          width={"180px"}
          height={"180px"}
          src="../../assets/sans.png"
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />
        
        <Typography variant="h2">Carlos Raúl Robinson</Typography>
        <Typography variant="h2" color={colors.greenAccent[500]}> Junior Front-end Developer</Typography>
      </Box>

      <Divider/>

      <Box m={'20px'} display={'flex'} justifyContent={'center'}><Typography fontWeight={'bold'} variant="h3">Technologies in this project:</Typography></Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        border={'1px solid white'}
        p={'10px'}
      >
        <img
          alt="profile-user"
          width={"136px"}
          height={"120px"}
          src="../../assets/React-icon.png"
          
        />
        <img
          alt="profile-user"
          width={"120px"}
          height={"120px"}
          src="../../assets/mui.svg"
          
        />
        <img
          alt="profile-user"
          width={"380px"}
          height={"120px"}
          src="../../assets/nivo.png"
          
        />
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}><img
          alt="profile-user"
          width={"48px"}
          height={"48px"}
          src="../../assets/fc.png"
          
        />
        <Typography ml={'5px'} fontWeight={'bold'} variant="h1">FullCalendar</Typography></Box>
        
      </Box>
    </Box>
  );
};

export default About;
