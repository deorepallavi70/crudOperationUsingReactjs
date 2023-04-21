import "./App.css";
import List1 from "./componants/List1";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./componants/Navbar";
import { SignUp } from "./componants/SignUp";
import { Contact } from "./componants/Contact";
import { Login } from "./componants/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="contact" element={<Contact />} />
        <Route path="list1" element={<List1 />} />
        <Route path="login"  element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
