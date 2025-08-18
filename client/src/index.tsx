import "./app.css";
import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import store from "./redux/store/store";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <RouterProvider router={Router} />
    </Provider>
);
