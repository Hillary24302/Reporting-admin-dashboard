import { Box, Typography } from "@mui/material"
import { SvgAgents } from "../../components/Svg-icons"
import Header from "../../components/Header/header"

const AgentPage = () => {
  return (
    <div>
    <Box>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='Agents Transactions' icon={<SvgAgents style={{ fill: '#2F80ED' }}/>}/>
      </Box>
    </Box>
    </div>
  )
}
export default AgentPage