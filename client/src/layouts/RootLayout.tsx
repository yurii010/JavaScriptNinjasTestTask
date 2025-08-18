import React from "react";
import { Outlet } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useSelector } from "../redux/store/store";

const RootLayout = () => {
    const isLoading = useSelector((state) => state.app.isLoading);
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-gray-800 to-red-500">
            {isLoading ? <CircularProgress /> : <Outlet />}
        </div>
    );
};

export default RootLayout;
