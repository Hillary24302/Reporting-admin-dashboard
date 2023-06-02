import { Box, Grid, Typography } from "@mui/material";
import CustomCard from "../../components/Card/card";

const Dashboard = () => {
  return (
    <Box>
      <Box display='flex' width='100%' sx={{ gap: '20px' }}>
        <CustomCard
        title="POS Activity"
        date="30th August, 2019"
        firstRowContent={["1093", "6664", "7773"]}
        secondRowContent={["Total Merchants", "Total Agents", "Total number of inactive agents"]}
       borderColor='#FF7901'
      />
        <CustomCard
        title="POS Activity"
        date="30th August, 2019"
        firstRowContent={["1093", "6664", "7773"]}
        secondRowContent={["Total Merchants", "Total Agents", "Total number of inactive agents"]}
        borderColor='#41B662'
      />
      </Box>

    </Box>
  )
}
export default Dashboard