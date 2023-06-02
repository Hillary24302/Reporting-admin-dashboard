import React from 'react';
import { Grid, Box, Card, Typography } from '@mui/material';
import PageContainer from '../../components/Container/pageContainer';
import { SvgLogo } from '../../components/Svg-icons';
import AuthBg from '../../assets/images/background/login-bg.svg'
import { tokens } from '../../theme';
import { useTheme } from '@emotion/react';
import AuthForm from '../../components/AuthForm/authform';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../router/paths';
import Input from '../../components/TextInput/input';
import KButton from '../../components/Button/button';
import { useState } from 'react';


const LoginPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    navigate(paths.dashboard);
  };

  return (
    <>
    <PageContainer title='Login' description='This is login page'>
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            backgroundImage: `url(${AuthBg})`,
            backgroundColor: `${colors.primary[500]}`,
            position: 'absolute',
            height: '100%',
            width: '100%'
          },
        }}
      >
          <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh', overflow: 'auto'}}>
          <Grid item xs={12} sm={12} lg={4} xl={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box zIndex='2' mt='50px'>
              <SvgLogo />
            </Box>
            <Card elevation={9} sx={{ px: 4, mt: 3, pb: 6, zIndex: 1, width: '100%', maxWidth: '415px', }}>
            <AuthForm>
              <Box sx={{width: '100%'}}>
                <Input
                  id='email'
                  label='Email'
                  type='text'
                />
              </Box>
              <Box sx={{width: '100%'}}>
                <Input
                  id='password'
                  label='Password'
                  type='password'
                />
              </Box>
              <Box sx={{mt: '40px'}}>
                <KButton onClick={handleSignIn} isLoading={isLoading}>Sign In</KButton>
              </Box>
            </AuthForm>
            </Card>
          </Grid>
          </Grid>

      </Box>
    </PageContainer>
    </>
  )
}
export default LoginPage