import Loginlogo from '../../../images/dash-logo.svg';
import './header.scss';

//Material component
import { AppBar, Toolbar} from '@material-ui/core';
import { Link as Browserlink } from 'react-router-dom';

function Header() {
  return (
    <>
      <AppBar position="fixed" className={"navbarFixed mainNavbar"}>
        <Toolbar className={"toolbar"}>
         
            <div className={"logo"}>
              <Browserlink to="/dashboard"><img src={Loginlogo} alt="logo" className={"logoImage"} /> </Browserlink>
            </div>
         
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header