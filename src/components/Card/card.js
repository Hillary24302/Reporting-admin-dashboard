
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";


const CustomCard = ({title, date, firstRowContent, secondRowContent, borderColor }) => {
  return (
    <Card sx={{ display: 'flex',
    background: '#FFFFFF',
    border: '1px solid rgba(10, 2, 13, 0.06)', 
    boxShadow: '0px 2px 12px rgba(10, 2, 13, 0.04)',
    borderRadius: '4px',
    "& .css-mhc70k-MuiGrid-root>.MuiGrid-item": {
      paddingTop: '10px'
    },
    "& .css-mhc70k-MuiGrid-root>.MuiGrid-item": {
      padding: '15px 0px 0px 0px'
    },
    "& .css-mhc70k-MuiGrid-root": {
      width: `calc(100% + '5px')`
    },
    "& .css-46bh2p-MuiCardContent-root:last-child": {
      paddingBottom: 1
    },
 }}>
      <CardContent         sx={{
          borderLeft: `5px solid ${borderColor}`,
          height: '120px',
          borderRadius: '4px 0px 0px 4px',
        }}>
        <Box display='flex' gap={2} textAlign='center'>
        <Typography sx={{color: '#0A020D', opacity: 0.8, fontWeight: 600, fontSize: 18}} component="div">
          {title}
        </Typography>
        <Typography sx={{color: '#0066FF', opacity: 0.85, fontWeight: 700, fontSize: 12, mt: '5px'}} component='div' >
          {date}
        </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography sx={{color: '#220132', opacity: 0.85, fontWeight: 600, fontSize: 24, ml: 2, fontFamily: 'Able'}}>{firstRowContent[0]}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{color: '#220132', opacity: 0.85, fontWeight: 600, fontSize: 24, ml: 2, fontFamily: 'Able'}}>{firstRowContent[1]}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{color: '#220132', opacity: 0.85, fontWeight: 600, fontSize: 24, ml: 2, fontFamily: 'Able'}}>{firstRowContent[2]}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{color: '#0A020D', opacity: 0.48, fontWeight: 600, fontSize: 10, ml: 2}}>{secondRowContent[0]}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{color: '#0A020D', opacity: 0.48, fontWeight: 600, fontSize: 10, ml: 2}}>{secondRowContent[1]}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{color: '#0A020D', opacity: 0.48, fontWeight: 600, fontSize: 10, ml: 2}}>{secondRowContent[2]}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
export default CustomCard
{/* <Box display='flex' justifyContent='space-around' mt='5'>
<Box textAlign='center'>
<Typography sx={{color: '#0A020D', opacity: 0.8, fontWeight: 600, fontSize: 18}}>POS Activity</Typography>
</Box>
<Box textAlign='center'>
<Typography sx={{color: '#0066FF', opacity: 0.85, fontWeight: 700, fontSize: 12}}>30th August, 2019</Typography>
</Box>
</Box> */}