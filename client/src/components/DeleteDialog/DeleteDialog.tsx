import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: TransitionProps & { children: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type DeleteDialogProps = {
    superheroName: string;
    open: boolean;
    onClose: (confirmed: boolean) => void;
};

export default function DeleteDialog({ superheroName, open, onClose }: DeleteDialogProps) {
    return (
        <Dialog
            open={open}
            slots={{
                transition: Transition,
                backdrop: "div",
                paper: "div",
            }}
            slotProps={{
                backdrop: {
                    className: "backdrop-blur-sm bg-black/40 fixed inset-0 z-40",
                },
                paper: {
                    className: "bg-[#232323] shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md mx-auto rounded-xl z-50",
                },
            }}
            keepMounted
            onClose={() => onClose(false)}
        >
            <DialogTitle className="text-base sm:text-lg font-semibold text-white text-center">
                {`Are you sure you want to delete ${superheroName}?`}
            </DialogTitle>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <button
                    onClick={() => onClose(true)}
                    className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                    Yes
                </button>
                <button
                    onClick={() => onClose(false)}
                    className="w-full sm:w-auto px-4 py-2 bg-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-400 transition-colors"
                >
                    No
                </button>
            </div>
        </Dialog>
    );
}
