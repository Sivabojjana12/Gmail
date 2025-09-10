import React, {useState } from "react";
import { useParams, useSearchParams  } from "react-router-dom";
import "./maincontentbody.css";
import Maincontentheader from "../maincontentheader/maincontentheader";
import BasicTabs from "./maingrid/grid";

const ViewMail = (data) => {
  return <div>{JSON.stringify(data)}</div>;
};

function Maincontentbody() {
  const { id } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  
  const [viewMainData, setViewMailData] = useState();

//   useEffect(() => {
//     console.log("useEffect id", searchParams)
//     let emailId = searchParams.get("emailId")
//     if (emailId) {
//       fetch(`http://localhost:5000/emails/${emailId}`, {
//         method: "GET",
//       })
//         .then((res) => res.json())
//         .then((data) => setViewMailData(data))
//         .catch((err) => console.error(err));
//     }
//   }, [id]);

  return (
    <div className="maincontentbody">
      {viewMainData?.id ? (
        <ViewMail data={viewMainData} />
      ) : (
        <>
          <Maincontentheader />
          <BasicTabs/>
        </>
      )}
    </div>
  );
}

export default Maincontentbody;
