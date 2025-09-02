import React from "react";
import "./maincontentbody.css"
import Maincontentheader from "../maincontentheader/maincontentheader";
import BasicTabs from "./maingrid/grid";




function Maincontentbody() {
    return (
        <div className="maincontentbody">
            <Maincontentheader/>
            <BasicTabs/>
        </div>
    )
}

export default Maincontentbody;