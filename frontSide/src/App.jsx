import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import About from "./Pages/user/About";

function App() {
  return (
 
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
   
  );
}

export default App;
