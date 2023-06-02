import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { SvgAgents, SvgDashboard, SvgLogo, SvgManageUsers, SvgMerchants, SvgSetting, SvgSupport } from "../../components/Svg-icons";

const Item = ({title, to, icon, sellected, setSellected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return(
    <MenuItem active={sellected === title} style={{color: colors.textWhite[500]}} onClick={() => setSellected(title)} icon={icon}>
      <Typography sx={{ fontSize: "17px", fontWeight: "500"}}>{title}</Typography>
      <Link to={to}/>
    </MenuItem>
  )
}

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sellected, setSellected] = useState("Dashboard");
  return (
    <Box sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[500]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px",

      },
      "& .pro-inner-item:hover": {
        color: "#2F80ED !important",
      },
      "& .pro-menu-item.active": {
        color: "#2F80ED !important",
        border: `${!isCollapsed ? "1px solid #2F80ED !important" : 'none'}`,
        margin: "0 30px 0 0 !important",
        borderRadius: "4px !important",
        background: `${!isCollapsed ? '#FBFBFE13' : 'none'}`
      },
      "& .css-gzcnae .css-i4bv87-MuiSvgIcon-root.active": {
        color: "#2F80ED !important",
      },
      "& .css-i4bv87-MuiSvgIcon-root": {
        color: `${colors.textWhite[500]} !important`,
      },
      "& .css-i4bv87-MuiSvgIcon-root:hover": {
        color: "#2F80ED !important",
      },
      '& .SvgMerchants.active': {
        fill: '#ff0000' /* Change the fill color for the */
      }
    }}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Logo and menu item */}
          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.textWhite[500],
          }}
          >
            {
              !isCollapsed && (
                <Box 
                  display="flex"
                  justifyContent="space-between"
                  alignItems='center'
                  ml='5px'
                >
                    <Box>
                      <SvgLogo />
                    </Box>
                    <IconButton onClick={() =>setIsCollapsed(!isCollapsed)} >
                     <MenuOutlinedIcon />
                    </IconButton>
                </Box>
              )
            }
          </MenuItem>
            {/* USER */}
             <Box paddingLeft={isCollapsed ? undefined : '10%'}>
              <Typography  color = "#FFFFFF3D"  fontSize= {!isCollapsed ? '16px' : '10px'} textAlign={!isCollapsed ? undefined : 'center'} sx={{m: '50px 0 5px 0',  fontWeight: 700}}>
                MAIN MANU
              </Typography>
              <Item 
              title='Dashboard'
              to='/dashboard'
              icon={<MenuOutlinedIcon />}
              sellected={sellected}
              setSellected={setSellected}
              />
              <Item 
              title='Merchants'
              to='/merchant'
              icon={<SvgMerchants />}
              sellected={sellected}
              setSellected={setSellected}
              />
                            <Item 
              title='Agents'
              to='/agent'
              icon={<SvgAgents />}
              sellected={sellected}
              setSellected={setSellected}
              />
                            <Item 
              title='Manage Users'
              to='/manage_users'
              icon={<SvgManageUsers />}
              sellected={sellected}
              setSellected={setSellected}
              />
              <Typography  color = "#FFFFFF3D"  fontSize= {!isCollapsed ? '16px' : '10px'} textAlign={!isCollapsed ? undefined : 'center'} sx={{m: '80px 0 5px 0',  fontWeight: 700}}>
                PREFRENCE
              </Typography>
              <Item 
              title='Settings'
              to='/settings'
              icon={<SvgSetting />}
              sellected={sellected}
              setSellected={setSellected}
              />
              <Item 
              title='Support'
              to='/support'
              icon={<SvgSupport />}
              sellected={sellected}
              setSellected={setSellected}
              />
            </Box> 

        </Menu>
      </ProSidebar>
      
    </Box>
  )
}
export default Sidebar