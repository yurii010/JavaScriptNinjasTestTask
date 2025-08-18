import React from "react";
import { RootLayout } from "../layouts";
import { createBrowserRouter } from "react-router-dom";
import { MainPage, SuperheroePage, NotFound } from "../pages";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <MainPage /> },
            { path: "superhero/:id", element: <SuperheroePage /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);
export default Router;
