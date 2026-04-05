import { Box, Typography, Link} from "@material-ui/core";
import './footer.scss';

function Footer(props){
    return(
        <Box component="footer">
        <Typography variant="body2" color="textSecondary" align="center">
        Copyright © {new Date().getFullYear()} <Link target="_blank" href="http://kalolytic.com/">Kalolytic</Link>. All rights reserved.
        </Typography>           
        </Box>
    )
}
export default Footer;