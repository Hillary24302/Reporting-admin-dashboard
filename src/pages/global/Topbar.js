import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { tokens } from '../../theme';
import  SearchIcon  from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {  SvgNotification } from "../../components/Svg-icons";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchBar from "../../components/Searchbar/searchbar";
import { useState } from "react";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isIconVisible, setIconVisible] = useState(true);

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
    setIconVisible(false);
  };
  return (
    <Box display='flex' justifyContent='flex-end' p={2} borderColor='#ffffff' boxShadow= '0px 2px 12px rgba(10, 2, 13, 0.04)' padding='10px'>
      {/* ICONS */}
      <Box display='flex' marginRight= '20px' sx={{width: `${isSearchVisible ? '100%' : 'none'}`}}>
          <Box width='100%' display='flex'>
          <Box sx={{ height: '52px', width: '1px', backgroundColor: "rgba(10, 2, 13, 0.06)", right: '14px' }}></Box>
              {isIconVisible && (
                          <IconButton alignItems='center' onClick={handleSearchClick}>
                          <SearchIcon />
                          </IconButton>
              )}
              {isSearchVisible && (
                <Box width='100%' display='flex'>
                  <SearchBar />
                </Box>
                
          )}
          </Box>
          <Box display='flex'>
          <Box sx={{ height: '52px', width: '1px', backgroundColor: "rgba(10, 2, 13, 0.06)", left: '14px' }}></Box>
            <IconButton>
              <SvgNotification />
            </IconButton>
            <Box sx={{ height: '52px', width: '1px', backgroundColor: "rgba(10, 2, 13, 0.06)", left: '14px' }}></Box>
          </Box>
      </Box>
      <Box display='flex' sx={{
        border: '2px solid rgba(255, 255, 255, 0.01)',
        background: '#F5F5F5',
        boxShadow: '0px 0px 0px 0.5px #BDC1CC',
        borderRadius: '32px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'px',
        '& > *': {
          margin: "6px 6px 6px 6px",
        }
        }}>
                  <Box justifyContent='center' sx={{height: 40, width: 40 }}>
                        <img 
                        alt="profile user"
                        width='100%'
                        height='100%'
                        src={require("../../assets/images/profile.svg").default} 
                        style={{cursor: 'pointer'}}
                        />
                  </Box>
                  <Box textAlign='center'  >
                    <Typography fontSize='16px' fontWeight='700' color='#0A020D'>
                      David B.
                    </Typography>
                  </Box>
                  <Box sx={{height: 24, width: 24}} >
                    <ArrowDropDownOutlinedIcon sx={{borderRadius: '50%', backgroundColor: '#fff', border:  '1px solid #FCE8E8', height: '100% !important', width: '100% !important'}}/>
                  </Box>
                </Box>
      
    </Box>
  )
}
export default Topbar