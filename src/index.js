import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// for debugging purposes
// import searchImages from "./api";
// searchImages();

const rootEl = document.getElementById("root");

const root = ReactDOM.createRoot(rootEl);

root.render(<App />);
