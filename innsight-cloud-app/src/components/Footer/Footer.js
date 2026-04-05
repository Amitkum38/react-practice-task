import { Box, Grid, Link } from '@mui/material';
import '../Footer/Footer.scss';

function Footer() {
    return (
        <>
            <Box component="footer" className="footer-primary">
                <Grid item sm={12} >
                    <Box >
                        Copyright – All Rights Reserved @
                        <Link href="#" underline="none">
                            www.innefu.com
                        </Link>
                    </Box>
                </Grid>
            </Box>
        </>
    )
};

export default Footer;