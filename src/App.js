import React, { useState } from "react";
import Mainnavebar from "./gmail/mainnavebar";
import Sidebar from "./gmail/mainsidebar";
import Rightsidemenu from "./gmail/rightsidemenu";
import "./App.css"
import Maincontentbody from "./gmail/maincontent/maincontentbody/maincontentbody";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onMenuClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <Mainnavebar onMenuClick={onMenuClick} />
      <div class="main-container">
        <Sidebar isOpen={isOpen} />
        <div style={{ flex: 1 }}><Maincontentbody/></div>
        <Rightsidemenu />
      </div>
    </div>
  );
}

export default App;
