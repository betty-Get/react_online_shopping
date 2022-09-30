import TopBar from "./components/topbar/TopBar";
import React from "react";
import Home from "./pages/HomePage/Home";
import Detail from "./pages/detailpage/Detail"
import CreateListing from "./pages/creatlisting/CreateListing";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
      
       <TopBar />
       <Routes>
       <Route exact path="/" element={<Home/>}  />
      <Route exact path="/detail" element={<Detail/>}/>
      <Route exact path="/create" element={<CreateListing/>}/>
    
      </Routes>
    </div>
    </Router>
  );
}

export default App;
