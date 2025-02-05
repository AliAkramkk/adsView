import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import About from "./Pages/user/About";
import UserRouter from "./router/userRouter";
import CustomerRouter from "./router/CustomerRouter";
import AdminRouter from "./router/AdminRouter";
import Unautherised from "./Pages/Unautherised";

function App() {
  return (

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />

        <Route path = "/user/*" element={<UserRouter />} />
        <Route path = "/admin/*" element={<AdminRouter />} />
        <Route path = "/customer/*" element={<CustomerRouter />} />
        <Route path="/unauthorized" element={<Unautherised />} />
      </Routes>
 
  );
}

export default App;
