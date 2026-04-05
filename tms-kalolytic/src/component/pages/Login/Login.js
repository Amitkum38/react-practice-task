import React, { useState } from 'react';
import Loginlogo from '../../../images/logo.svg';
import Copyright from '../Copyright/copyright';
import {Link as Browserlink} from 'react-router-dom';
import './login.scss';
//Material component
import { Box, Grid, Button, TextField, FormControlLabel, Checkbox, Link } from "@material-ui/core";
function Login() {
return (
<>
<Grid container direction="row" className="login-container" justify="center" alignItems="center">
   <Grid item xs={4}>
      <div className="paper">
         <Box component="div" className="brandLogo" >
            <img src={Loginlogo} />
         </Box>
         <form className="loginForm" >
            <TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id="username"
               label="User Name"
               name="username"
               autoComplete="username"
               autoFocus
               className="globalInput"
               />
            <TextField
               variant="outlined"
               margin="normal"
               required
               fullWidth
               name="password"
               label="Password"
               type="password"
               id="password"
               className="globalInput"
               />
             <Browserlink to="/dashboard">
             <Button 
               type="button"
               fullWidth
               variant="contained"
               color="primary"
               className="globalBtn"
               >
            Sign In
            </Button>


             </Browserlink>
            <Grid container>
               <Grid item xs>
                  <FormControlLabel
                  control={
                  <Checkbox name="checkedA" />
                  }
                  label="Keep me signed in"
                  className="globalCheckboxLabel"
                  />
               </Grid>
               <Grid item className="vAlign resetPasswordcol">
                  <Link to="/resetpassword" variant="body2">
                  Forgot password?
                  </Link>
               </Grid>
            </Grid>
         </form>
      </div>
      <Box mt={8} align="center" className="login-Footer">
         <Link to="/" variant="body2">
         Terms & Conditions </Link>
         |
         <Link to="/" variant="body2">
         Terms & Conditions </Link>
         |
         <Link to="/" variant="body2">
         Terms & Conditions</Link>
      </Box>
      <Box mt={1} className="login-Footer">
         <Copyright />
      </Box>
   </Grid>
</Grid>
</>
)
}
export default Login