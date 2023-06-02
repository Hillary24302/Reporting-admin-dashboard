import { Box, Typography } from "@mui/material";
import Header from "../../components/Header/header";
import { SvgMerchants } from "../../components/Svg-icons";

const MerchantPage = () => {
  return (
    <Box>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='Merchants Transactions' icon={<SvgMerchants style={{ fill: '#2F80ED' }}/>}/>
      </Box>
    </Box>
  )
}
export default MerchantPage