import React, { useState } from "react";
import AddDialog from "../AddDialog/AddDialog";

const Footer = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="w-full max-w-4xl mx-auto p-6 bg-black bg-opacity-70 backdrop-blur-sm rounded-tl-xl rounded-tr-xl shadow-lg flex justify-center">
                <button
                    onClick={handleOpen}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-transform duration-300 hover:scale-105"
                >
                    Add New Superhero
                </button>
            </div>

            <AddDialog open={open} onClose={handleClose} />
        </>
    );
};

export default Footer;
