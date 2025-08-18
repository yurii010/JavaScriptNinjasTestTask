import Slide from "@mui/material/Slide";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { actions } from "../../redux/actions";
import { useDispatch } from "../../redux/store/store";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: TransitionProps & { children: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type AddDialogProps = {
    open: boolean;
    onClose: (confirmed: boolean) => void;
};

type FormChangeEvent = {
    target: {
        name: string;
        value: string;
    };
};

export default function AddDialog({ open, onClose }: AddDialogProps) {
    const dispatch = useDispatch();
    const initialForm = {
        nickname: "",
        real_name: "",
        origin_description: "",
        superpowers: "",
        catch_phrase: "",
        image: "",
    };
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: FormChangeEvent) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = async (): Promise<boolean> => {
        const newErrors: { [key: string]: string } = {};

        if (!form.nickname.trim()) newErrors.nickname = "Nickname is required";
        else if (form.nickname.length > 30) newErrors.nickname = "Max 30 characters";

        if (!form.real_name.trim()) newErrors.real_name = "Real Name is required";
        else if (form.real_name.length > 50) newErrors.real_name = "Max 50 characters";

        if (!form.origin_description.trim()) newErrors.origin_description = "Origin Description is required";
        else if (form.origin_description.length > 200) newErrors.origin_description = "Max 200 characters";

        if (!form.superpowers.trim()) newErrors.superpowers = "Superpowers are required";
        else if (form.superpowers.length > 100) newErrors.superpowers = "Max 100 characters";

        if (!form.catch_phrase.trim()) newErrors.catch_phrase = "Catch Phrase is required";
        else if (form.catch_phrase.length > 50) newErrors.catch_phrase = "Max 50 characters";

        if (form.image.trim()) {
            const isValidImage = await new Promise<boolean>((resolve) => {
                const img = new Image();
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
                img.src = form.image;
            });
            if (!isValidImage) newErrors.image = "Image URL is not valid or unreachable";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!(await validate())) return;

        dispatch(actions.superheroes.addSuperhero(form));
        resetForm();
        onClose(true);
        window.location.reload();
    };

    const resetForm = () => {
        setForm(initialForm);
        setErrors({});
    };

    const handleClose = () => {
        resetForm();
        onClose(false);
    };

    return (
        <Dialog
            open={open}
            slots={{ transition: Transition, backdrop: "div", paper: "div" }}
            slotProps={{
                backdrop: { className: "backdrop-blur-sm bg-black/40 fixed inset-0 z-40" },
                paper: { className: "bg-[#232323] p-6 w-full max-w-md mx-auto rounded-xl z-50" },
            }}
            keepMounted
            onClose={handleClose}
        >
            <DialogTitle className="text-lg text-white text-center mb-4">Add New Superhero</DialogTitle>

            <div className="flex flex-col gap-3">
                <label className="text-white text-sm">Nickname</label>
                <input
                    type="text"
                    name="nickname"
                    placeholder="Nickname"
                    value={form.nickname}
                    onChange={handleChange}
                    maxLength={30}
                    className="p-2 rounded-md bg-gray-800 text-white"
                />
                {errors.nickname && <span className="text-red-500 text-sm">{errors.nickname}</span>}

                <label className="text-white text-sm">Real Name</label>
                <input
                    type="text"
                    name="real_name"
                    placeholder="Real Name"
                    value={form.real_name}
                    onChange={handleChange}
                    maxLength={50}
                    className="p-2 rounded-md bg-gray-800 text-white"
                />
                {errors.real_name && <span className="text-red-500 text-sm">{errors.real_name}</span>}

                <label className="text-white text-sm">Origin Description</label>
                <textarea
                    name="origin_description"
                    placeholder="Origin Description"
                    value={form.origin_description}
                    onChange={handleChange}
                    maxLength={200}
                    className="p-2 rounded-md bg-gray-800 text-white resize-none"
                />
                {errors.origin_description && <span className="text-red-500 text-sm">{errors.origin_description}</span>}

                <label className="text-white text-sm">Superpowers</label>
                <input
                    type="text"
                    name="superpowers"
                    placeholder="Superpowers"
                    value={form.superpowers}
                    onChange={handleChange}
                    maxLength={100}
                    className="p-2 rounded-md bg-gray-800 text-white"
                />
                {errors.superpowers && <span className="text-red-500 text-sm">{errors.superpowers}</span>}

                <label className="text-white text-sm">Catch Phrase</label>
                <input
                    type="text"
                    name="catch_phrase"
                    placeholder="Catch Phrase"
                    value={form.catch_phrase}
                    onChange={handleChange}
                    maxLength={50}
                    className="p-2 rounded-md bg-gray-800 text-white"
                />
                {errors.catch_phrase && <span className="text-red-500 text-sm">{errors.catch_phrase}</span>}

                <label className="text-white text-sm">Image URL</label>
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={form.image}
                    onChange={handleChange}
                    className="p-2 rounded-md bg-gray-800 text-white"
                />
                {errors.image && <span className="text-red-500 text-sm">{errors.image}</span>}

                <div className="mt-4 flex justify-center gap-3">
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-transform duration-300 hover:scale-105"
                    >
                        Add
                    </button>
                    <button onClick={handleClose} className="px-4 py-2 bg-gray-500 hover:bg-gray-400 text-white rounded-lg">
                        Cancel
                    </button>
                </div>
            </div>
        </Dialog>
    );
}
