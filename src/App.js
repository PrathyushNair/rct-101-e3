import "./App.css";
import {Routes,Route} from "react-router-dom"
import RequiredAuth from "./hoc/RequiredAuth"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Navbar from "./components/Navbar/Navbar";
import { AuthContext } from "./context/AuthContext";
function App() {
  return (
    <div className="App">
      <div>Hello</div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}> </Route>
        
       </Routes>
      
    </div>
  );
}

export default App;
