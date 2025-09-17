import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Mainnavebar from "./gmail/mainnavebar";
import Sidebar from "./gmail/mainsidebar";
import Rightsidemenu from "./gmail/rightsidemenu";
import "./App.css"
import Maincontent from "./gmail/maincontent";
import QuickSettings from "./gmail/mainnavebar/navbarend/settingsdrawer";



  const Email =()=>( <div style={{ flex: 1}}><Maincontent/></div>)
  const Starred = ()=> <div>Starred</div>
  const Snoozed = ()=> <div style={{color: 'red'}}>Snoozed</div>
  // const Dummy = ()=> <div>dummy</div>


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState()
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
       
  return (
     <Router>
      <div className="app">
        <Mainnavebar toggleSidebar={toggleSidebar} openSettings={() => setShowSettings(!showSettings)} />
        <div class="main-container">
          <Sidebar isMenuOpen={isOpen}/>
          <Routes>
            <Route exact  path="/inbox"  element={<Email />} />  
            <Route exact  path="/inbox/:id" element={<Email/>} /> 
            <Route path="/starred" element={<Starred />} />
            <Route path="/snoozed" element={<Snoozed />} /> 
          </Routes>
          {
            showSettings && 
              <div>
                <QuickSettings/>
              </div>
          }
          <div>

          </div>
          <Rightsidemenu />
        </div>
        
      </div>
     </Router>
  );
}

export default App;
