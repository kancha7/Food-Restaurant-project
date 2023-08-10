import React,{useState} from 'react';
import { Link,NavLink } from "react-router-dom";
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
// import Logo from "../images/logo.jpg";

import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/HeaderStyles.css";
const Header = () => {
   const [mobileOpen, setMobileOpen] = useState(false);
   //Handle MenuClick
   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   }

   //menu drawer
  const drawer =(
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
     <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
       
      </Typography>
      <Divider/>
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>

    </Box>
  )
  return (
    <>
      <Box>
           <AppBar components={"Nav"} sx={{ bgcolor: "black"}}>
               <Toolbar>
               <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}>
                  <MenuIcon/>
               </IconButton>
                  <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1, my: 2 }}>
                   <FastfoodIcon/>
                  Marco restaurant  
                  {/* <img src={Logo} alt="logo" height={"70"} width="200" /> */}
                  
                  </Typography>
                  <Box sx={{display: {sx: "none", sm:"block"}}}>
                    <ul className= "navigation-menu">
                       <li>
                          <Link to ={'/'}>Home</Link>
                       </li>
                       <li>
                          <Link to ={'/menu'}>Menu</Link>
                       </li>
                       <li>
                          <Link to ={'/about'}>About</Link>
                       </li>
                       <li>
                          <Link to ={'/contact'}>Contact</Link>
                       </li>
                    </ul>
                  </Box>
              </Toolbar>
           </AppBar>
           <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
        
      </Box>
    </>
  );
};

export default Header
