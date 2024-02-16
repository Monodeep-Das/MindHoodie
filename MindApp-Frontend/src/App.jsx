import React from 'react';
import Signup from "./signup";
import Downbar from "./downBar";
import Login from "./login";
import AddCourse from "./addCourse";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppbarSignup from "./appBarsignup";
import Courses from "./courses";
import QuoteDisplay from "./QuoteDisplay";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/courses' element={<Courses />} />
            <Route path='/home' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin/courses' element={<AddCourse />} />
            <Route path='/admin/me' element={<AppbarSignup />} />
          </Routes>
        </Router>
      </div>
      <div style={{ display: "flex", justifyContent: 'center' }}>
        <Downbar />
      </div>
    </>
  );
}
export default App;