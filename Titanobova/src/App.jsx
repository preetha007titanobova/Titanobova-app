import React from "react";

import Router from "./Router"
import Alldata from "./Alldata";

function App() {
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#faf7f2",
};

  return (
         <div style={overlayStyle}>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Router/>
      </div>
   </div>
  );
}

export default App;