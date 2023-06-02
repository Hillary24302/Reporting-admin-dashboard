import { tokens } from "../../theme";
import { Typography, useTheme, Box, IconButton } from "@mui/material";



const Header = ({title, subtitle, icon, ...rest}) => {
  const theme = useTheme();
  const colors =tokens(theme.palette.mode);
  return(
    <Box mb='3px' ml='-5px' display='flex' mt='-5px'>
      <Typography 
      color='#2F80ED'
      fontSize='18px'
      fontWeight='800'
      sx={{
        margin: '3px',
      }}
      {...rest}
      >
        {title}
      </Typography>
      <Typography color='#432751' fontSize='15px' fontWeight='800'>
        {subtitle}
      </Typography>
      <IconButton>
        {icon}
      </IconButton>
    </Box>
  )
}
export default Header