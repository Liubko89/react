import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
// import App from "./components/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReduxApp from "./ReduxApp.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ReduxApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
