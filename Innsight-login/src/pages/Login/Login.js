import { Grid, Box, Container, TextField, Stack, Button, Link } from '@mui/material';
import { Link as Browserlink} from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LottieAnimation from './LottieAnimation/LottieAnimation';
import '../Login/Login.scss';
import Drawers from '../../components/Drawers/Drawers';



function Login() {
    return (
        <>
            <Header />
            <Box className="height-primary">
                <Container>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <LottieAnimation />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Grid className='container-login'>
                                <Grid className='card-login login-section ' sx={{ boxShadow: 3 }}>
                                    <h2 className='title'>Login</h2>
                                    <Stack spacing={4}>
                                        <TextField fullWidth required id="outlined-required" label="User Name" type="TextField" />
                                        <TextField fullWidth required id="outlined-required" label="Password" type="password" />

                                       <Browserlink to="/drawers">
                                       <Button className='login-form-button ' variant="contained" >login</Button>
                                       </Browserlink>

                                        <Box className='login-copyright'>
                                            A product of
                                            <Link href="#" underline="hover">
                                                Innefu Labs Pvt Ltd.
                                            </Link>
                                        </Box>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Login;


