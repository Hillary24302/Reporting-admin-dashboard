import { Box, IconButton } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from '@mui/material/InputBase';
import  SearchIcon  from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";

const SearchBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display='flex' backgroundColor={colors.backgroundWhite[500]} borderRadius='4px'  border= '1px solid #BDC1CC' width='100%'>
    <InputBase size="small" sx={{ml: 2, flex: 1, width: '100%'}} placeholder='Enter any search entery' />
    <IconButton type="button" sx={{p: 1}}><SearchIcon /></IconButton>
    </Box>
  )
}
export default SearchBar