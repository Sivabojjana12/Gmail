import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mainnavebar from "./gmail/mainnavebar";
import Sidebar from "./gmail/mainsidebar";
import Rightsidemenu from "./gmail/rightsidemenu";
import "./App.css"
import Maincontentbody from "./gmail/maincontent/maincontentbody/maincontentbody";

  const Email =()=>( <div style={{ flex: 1}}><Maincontentbody/></div>)
  const Starred = ()=> <div>Starred</div>
  const Snoozed = ()=> <div style={{color: 'red'}}>Snoozed</div>
  const Dummy = ()=> <div>dummy</div>


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onMenuClick = () => {
    setIsOpen((prev) => !prev);
  };
       
  return (
     <Router>
      <div className="app">
        <Mainnavebar onMenuClick={onMenuClick} />
        <div class="main-container">
          <Sidebar isOpen={isOpen} />
          <Routes>
            <Route exact  path="/inbox"  element={<Email />} />  
            <Route exact  path="/inbox/:id" element={<Email/>} /> 
            <Route path="/starred" element={<Starred />} />
            <Route path="/snoozed" element={<Snoozed />} /> 
          </Routes>
          <Rightsidemenu />
        </div>
        
      </div>
     </Router>
  );
}

export default App;
