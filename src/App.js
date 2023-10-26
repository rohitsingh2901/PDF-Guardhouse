import { HashRouter as Router,Routes,Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import PDFList from "./components/PDF List/PdfList";
import UserDashboard from "./components/User Dashboard/UserDashboard";

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
    <Routes>
    <Route exact path="/pdflist" Component={PDFList}/>
    </Routes>  
    <Routes>
    <Route exact path="/dashboard" Component={UserDashboard}/>
    </Routes>  

    </Router> 
    </>
  );
}

export default App;
