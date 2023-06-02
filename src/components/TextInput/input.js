
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Input = ({id, label, type, ...rest}) => {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { mt: 2, width: '100%', height: '56' },
      '& .css-tuuwvd-MuiFormLabel-root-MuiInputLabel-root': {
        fontSize: '14px',
        fontWeight: '500'
      },
      '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
        border: '1px solid #EFEFEF'
      },
  
    }}
  >
    <TextField
      autoComplete="on"
     id={id}
      label={label}
      type={type}
      size='small'
      sx={{"& .MuiOutlinedInput-root:hover": {"& > fieldset": {border: "1px solid #EFEFEF"}}}}
      {...rest}/>
  </Box>
  )
}
export default Input