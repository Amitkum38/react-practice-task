import Loginlogo from '../../../images/dash-logo.svg';
import './header.scss';

//Material component
import { AppBar, Toolbar, Container} from '@material-ui/core';
import { Link as Browserlink } from 'react-router-dom';

function Dashboardheader() {
  return (
    <>
      <AppBar position="fixed" className={"navbarFixed mainNavbar dashboardHeader"}>
        <Toolbar className={"toolbar"}>
          <Container className={"headerContainer"}>
            <div className={"logo"}>
              <Browserlink to="/dashboard"><img src={Loginlogo} alt="logo" className={"logoImage"} /> </Browserlink>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Dashboardheader