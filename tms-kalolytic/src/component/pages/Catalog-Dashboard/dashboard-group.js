import './dashborad.scss';

//Material component
import { Box, Grid,  Paper, Typography, Card, CardHeader} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { RiExchangeDollarFill } from "react-icons/ri";

function DashboardGroup() {
    return (
        <Paper elevation={0} className={'content-wraper contentBox projectContentBox'}  m={0}>
        <Box className="fullPageContent cardHolder ">
            <Card elevation={0} className="mainCard">
                <CardHeader
                    className="mainCardHeader"
                    title={
                        <Typography variant="h3" className="page-title" >Select User Group
                        </Typography>
                    }
                    
                />
               
            </Card>

            <Grid   className="dashboard" container spacing={4}>
            <Grid item xs={3}>
               <Link to="/application-form">
               <Box className="box">
                  <Box className="box-heading" >
                     <Box className="icon-box">
                        <RiExchangeDollarFill className="svgIcons" />
                     </Box>
                     <Typography variant="h5" className="boxheading">
                     Application Form
                     </Typography>
                  </Box>
               </Box>
               </Link>
            </Grid>

            <Grid item xs={3}>
               <Link to="/application-form">
               <Box className="box">
                  <Box className="box-heading" >
                     <Box className="icon-box">
                        <RiExchangeDollarFill className="svgIcons" />
                     </Box>
                     <Typography variant="h5" className="boxheading">
                     Customer Due Dilligence Report
                     </Typography>
                  </Box>
               </Box>
               </Link>
            </Grid>
           
         </Grid>

        </Box>
        </Paper>
    )
}

export default DashboardGroup;




