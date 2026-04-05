import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Login from './pages/Login/Login';
import Drawers from './components/Drawers/Drawers';


function App() {
  return (

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/drawers" element={<Drawers />} /> 
      </Routes>

  );
}

export default App;




