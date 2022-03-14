import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Website/Main";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
};

export default App;
