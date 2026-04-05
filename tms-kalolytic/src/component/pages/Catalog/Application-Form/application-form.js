//Material component
import { Paper, Box, Card, CardContent, CardHeader, Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { DataGrid } from '@material-ui/data-grid';

function ApplicationForm() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'customerid', headerName: 'Customer ID', width: 190 },
        { field: 'location', headerName: 'Location', width: 190 },
        { field: 'customertype', headerName: 'Customer Type', width: 190 },
        { field: 'createdon', headerName: 'Created on', width: 190 },
        { field: 'submittedon', headerName: 'Submitted on', width: 190 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'action', headerName: 'Action', width: 190 },
        
    ]

   


    const rows = [
        { id: 1, customerid: '59974', location: 'india', customertype: 'Project', createdon:'demo', submittedon:'Sandeep', status:'Active', action:'Edit'},
        { id: 2, customerid: '59974', location: 'india', customertype: 'Project', createdon:'demo', submittedon:'Sandeep', status:'Active', action:'Edit'},
        { id: 3, customerid: '59974', location: 'india', customertype: 'Project', createdon:'demo', submittedon:'Sandeep', status:'Active', action:'Edit'},
        { id: 4, customerid: '59974', location: 'india', customertype: 'Project', createdon:'demo', submittedon:'Sandeep', status:'Active', action:'Edit'},
        { id: 5, customerid: '59974', location: 'india', customertype: 'Project', createdon:'demo', submittedon:'Sandeep', status:'Active', action:'Edit'},
        { id: 6, customerid: '59974', location: 'india', customertype: 'Project', createdon:'demo', submittedon:'Sandeep', status:'Active', action:'Edit'},
        { id: 7, customerid: '59974', location: 'india', customertype: 'Project', createdon:'demo', submittedon:'Sandeep', status:'Active', action:'Edit'},
        { id: 8, customerid: '59974', location: 'india', customertype: 'Project', createdon:'demo', submittedon:'Sandeep', status:'Active', action:'Edit'},
        { id: 9, customerid: '59974', location: 'india', customertype: 'Project', createdon:'demo', submittedon:'Sandeep', status:'Active', action:'Edit'},
        
        
    ]


    return (




                    
                  
                  










<Paper elevation={0} className={'content-wraper contentBox projectContentBox'}  m={0}>
        <Box className="fullPageContent cardHolder ">
            <Card elevation={0} className="mainCard">
                <CardHeader
                    className="mainCardHeader"
                    title={
                        <Typography variant="h3" className="page-title" >Application Form
                        </Typography>
                    }
                    
                />
                <CardContent className="mainCardContent">
                   
                               <Box className="tableHeader">
                                   <Box className="iconHolder">
                                   <Grid container>
                                       <Grid item>
                                       <Tooltip title="Add New" arrow placement="top">
                                           <IconButton className="iconBtn">
                                               <Link to=""><IoAddOutline className="svgIcons" /></Link>
                                           </IconButton>
                                       </Tooltip>
                                       </Grid>
                                       
                                   </Grid>
                                   </Box>
                               </Box>
                               <div style={{ height: 451, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={6} checkboxSelection />
       </div>
                               
                           </CardContent>
               
            </Card>
        </Box>
        </Paper>















        
        // <Box className="fullPageContent cardHolder ">
        //     <Card elevation={0} className="mainCard">
        //         <CardHeader
        //             className="mainCardHeader"
        //             title={
        //                 <Typography variant="h3" className="page-title" >Select User Group
        //                 </Typography>
        //             }
                    
        //         />
        //         <CardContent className="mainCardContent">
                   
        //             <Box className="tableHeader">
        //                 <Box className="iconHolder">
        //                 <Grid container>
        //                     <Grid item>
        //                     <Tooltip title="Add New" arrow placement="top">
        //                         <IconButton className="iconBtn">
        //                             <Link to="/dashboard/data-catalog/add"><RiExchangeDollarFill className="svgIcons" /></Link>
        //                         </IconButton>
        //                     </Tooltip>
        //                     </Grid>
        //                     <Grid item>
                            
        //                     <Tooltip title="Delete Selected" arrow placement="top">
        //                         <IconButton className="iconBtn" >
        //                         <RiExchangeDollarFill className="svgIcons" />
        //                         </IconButton>
        //                     </Tooltip>
                            
        //                     </Grid>
        //                 </Grid>
        //                 </Box>
        //             </Box>

                    
        //         </CardContent>
        //     </Card>
        // </Box>



















    )
}
export default ApplicationForm;