import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import FrontPage from "./Pages/page";
import FirstPage from "./Pages/FirstPage";
// import UserLogIn from "./Pages/Users/SignIn";
// import UserSignUp from "./Pages/Users/SignUp";

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          {/* <Route path="/sign-in" element={<UserLogIn/>}/>
          <Route path="/sign-up" element={<UserSignUp/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App