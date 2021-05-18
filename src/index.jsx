import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "./scss/index.scss";
import App from './App'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import reportWebVitals from "./reportWebVitals";

const routeElement = document.getElementById("root");

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <Router>
        <App />
      </Router>
      </Provider>
    </React.StrictMode>,
    routeElement
  );
}

if (module.hot) {
  module.hot.accept("./App.jsx", function () {
    setTimeout(render);
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
