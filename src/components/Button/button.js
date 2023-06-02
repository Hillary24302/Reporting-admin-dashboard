import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const  KButton = ({children, onClick, isLoading, ...rest}) => {
  return (
    <Stack spacing={2} direction="row" sx={{
      width: '100%',
      }}>
      <Button onClick={onClick} variant="contained" sx={{width: '100%', background: '#6AB04C', textTransform: 'none', '&.MuiButton-root:hover':{bgcolor: '#6AB04C'}}} {...rest}>
        {isLoading? 'Logging in...' : children}
      </Button>
    </Stack>
  );
}
export default KButton
