import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./layout/App";
import reportWebVitals from "./reportWebVitals";

const routeElement = document.getElementById("root");

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    routeElement
  );
}

if (module.hot) {
  module.hot.accept("./layout/App.jsx", function () {
    setTimeout(render);
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
