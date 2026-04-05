import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './component/pages/Login/login'
import Header from './component/pages/Header/header'
import Footer from './component/pages/Footer/footer'
import DashboardHeader from './component/pages/Header/dashboardheader'

//Page
import Dashboard from './component/pages/Catalog-Dashboard/dashboard'
import DashboardGroup from './component/pages/Catalog-Dashboard/dashboard-group'
import ApplicationForm from './component/pages/Catalog/Application-Form/application-form'

function App() {
  return (
    <div className="wrapper">
    <BrowserRouter>
     <Switch></Switch>
     <Route exact path="/">
        <Login/>
     </Route>

     <Route exact path="/dashboard">
     <DashboardHeader />
     <Dashboard/>
    <Footer/>
        
     </Route>

     <Route exact path="/dashboard-group">
     <Header />
     
     <DashboardGroup/>
     <Footer/> 
     </Route>

     <Route exact path="/application-form">

       
     <Header />
     <ApplicationForm/>
     
     <Footer/> 
     </Route>

     
     

    </BrowserRouter>
    </div>
  );
}

export default App;
