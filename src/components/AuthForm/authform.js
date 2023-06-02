import React from "react";
import { FormControl, Typography } from '@mui/material';
import { SvgKeyLogo } from "../Svg-icons";
import { Box } from "@mui/material";

const AuthForm = ({ children, ...rest }) => {
  return (
    <section>
      <Box  sx={{width: '100%', maxWidth: '120px', margin: 'auto', mt: '50px'}}>
        <SvgKeyLogo />
      </Box>
      <Typography sx={{fontSize: '24px', fontWeight: '700', mt: '20px'}}>
        Login
      </Typography>
      <Typography sx={{fontSize: '15px', fontWeight: '400', mt: '5px'}}>
      Please enter your login credentials to proceed 🔐
      </Typography>
      <FormControl className="bg-light mt-30 px-30 py-60" sx={{width: '100%'}} {...rest}>
        {children}
      </FormControl>
    </section>
  );
};

export default AuthForm;
