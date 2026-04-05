import './dashborad.scss';
//Material component
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { IoRocketOutline } from 'react-icons/io5';

function Dashboard() {
return (
<Paper elevation={0} className={"contentBox "} component="section" m={0}>
   <Box className="dashboard light-bg">
      <Container>
         <Grid container spacing={4}>
            <Grid item xs={3}>
               <Link to="/dashboard-group">
               <Box className="box">
                  <Box className="box-heading" >
                     <Box className="icon-box">
                        <IoRocketOutline className="svgIcons" />
                     </Box>
                     <Typography variant="h5" className="boxheading">
                        Customer Onboarding
                     </Typography>
                  </Box>
               </Box>
               </Link>
            </Grid>
            <Grid item xs={3}>
               <Link to="">
               <Box className="box">
                  <Box className="box-heading" >
                     <Box className="icon-box">
                        <IoRocketOutline className="svgIcons" />
                     </Box>
                     <Typography variant="h5" className="boxheading">
                        Transaction Initiatiation
                     </Typography>
                  </Box>
               </Box>
               </Link>
            </Grid>
            <Grid item xs={3}>
               <Link to="">
               <Box className="box">
                  <Box className="box-heading" >
                     <Box className="icon-box">
                        <IoRocketOutline className="svgIcons" />
                     </Box>
                     <Typography variant="h5" className="boxheading">
                        Transaction Surveillance
                     </Typography>
                  </Box>
               </Box>
               </Link>
            </Grid>
            <Grid item xs={3}>
               <Link to="">
               <Box className="box">
                  <Box className="box-heading" >
                     <Box className="icon-box">
                        <IoRocketOutline className="svgIcons" />
                     </Box>
                     <Typography variant="h5" className="boxheading">
                        Fraud Control
                     </Typography>
                  </Box>
               </Box>
               </Link>
            </Grid>
            <Grid item xs={3}>
               <Link to="">
               <Box className="box">
                  <Box className="box-heading" >
                     <Box className="icon-box">
                        <IoRocketOutline className="svgIcons" />
                     </Box>
                     <Typography variant="h5" className="boxheading">
                        Fraud Scenrario
                     </Typography>
                  </Box>
               </Box>
               </Link>
            </Grid>
            <Grid item xs={3}>
               <Link to="">
               <Box className="box">
                  <Box className="box-heading" >
                     <Box className="icon-box">
                        <IoRocketOutline className="svgIcons" />
                     </Box>
                     <Typography variant="h5" className="boxheading">
                        Screening Management
                     </Typography>
                  </Box>
               </Box>
               </Link>
            </Grid>
            <Grid item xs={3}>
               <Link to="">
               <Box className="box">
                  <Box className="box-heading" >
                     <Box className="icon-box">
                        <IoRocketOutline className="svgIcons" />
                     </Box>
                     <Typography variant="h5" className="boxheading">
                        Customer Insight
                     </Typography>
                  </Box>
               </Box>
               </Link>
            </Grid>
         </Grid>
      </Container>
   </Box>
</Paper>
)
}
export default Dashboard