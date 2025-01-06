import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';  
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function UserProfile(){
    return (
        <div className="userprofile">
            <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar  src="../../assets/images/1.png" sx={{ m: 1, bgcolor: '#8c7ae6', width:140, height:140 }} variant="circle" >
          </Avatar>
          <Typography component="h1" variant="h4" sx={{p:3}}>
          Your Profile:
          </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant='h6'>FirstName</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant='h6'>LastName</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant='h6' >UserName</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Typography variant='h6'>email@test.com</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant='h6'>**************</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant='h6'>480-178-1927</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6'>123 Fake St</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6'>APT 987</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant='h6'>Somewhere</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant='h6'>AZ</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant='h6'>85123</Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox required value="TermsConsent" color="primary" />}
                  label="I agree to the Terms and Conditions and Privacy Policy of MerchOnline.com"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
        </Box>
      </Container>
        </div>
    )
}