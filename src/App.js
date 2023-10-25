import { HashRouter as Router,Routes,Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
    <Routes>
    <Route exact path="/register" Component={Register}/>
    </Routes>  
    <Routes>
    <Route exact path="/login" Component={Login}/>
    </Routes>  

    </Router> 
    </>
  );
}

export default App;
