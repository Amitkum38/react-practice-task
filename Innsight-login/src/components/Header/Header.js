import { Box, Container, Grid, Link } from '@mui/material';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

function Header() {
    return (
        <>
            <Box component="header" className="main-header app-layout-header">
                <Container>
                    <Grid item sm={12} >
                        <Box>
                            <Link href="#" underline="none">
                                <img src={logo} className="logo" alt="Innsight" height="50px" />
                            </Link>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Header;