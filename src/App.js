import Login from "./component/forms/Login";
import Signup from "./component/forms/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashbord from "./pages/Dashbord";

function App() {
  
  const logingAuth = localStorage.getItem("isLoggedIn")

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/dashbord" element={logingAuth?<Dashbord/>:<Home/>} />
    <Route path="/login" element={logingAuth?<Dashbord />: <Login />} />
    <Route path="/signup" element={logingAuth?<Dashbord />: <Signup />} />
    <Route path="*" element={<Login/>} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
