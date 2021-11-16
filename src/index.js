import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const WidgetDivs = document.querySelectorAll("#real-estate-widget-container");

console.log("Widget divs", WidgetDivs);

WidgetDivs.forEach((Div) =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    Div
  )
);
