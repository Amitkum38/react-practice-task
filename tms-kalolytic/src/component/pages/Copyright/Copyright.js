import { Link, Typography } from '@material-ui/core';

function Copyright() {
return (
   <Typography variant="body2" color="textSecondary" align="center">
      Copyright © 2021
      <Link color="inherit" target="_blank" href="http://kalolytic.com/">
      Kalolytic
      </Link>
      . All rights reserved. 
   </Typography>
);
}
export default Copyright;