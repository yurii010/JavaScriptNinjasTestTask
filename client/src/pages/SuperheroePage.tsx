import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RootState, useDispatch, useSelector } from "../redux/store/store";
import { actions } from "../redux/actions";
import { clearSuperhero } from "../redux/reducers/superheroesSlice";
import DeleteDialog from "../components/DeleteDialog/DeleteDialog";
import EditDialog from "../components/EditDialog/EditDialog";

const SuperheroPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const superhero = useSelector((state: RootState) => state.superheroes.superhero);

    useEffect(() => {
        if (id) {
            dispatch(actions.superheroes.loadSuperhero(id));
        }
        return () => {
            dispatch(clearSuperhero());
        };
    }, [id, dispatch]);

    const handleEdit = () => {
        setEditDialogOpen(true);
    };
    const handleEditClose = () => {
        setEditDialogOpen(false);
    };

    const handleDelete = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = (confirmed: boolean) => {
        setDialogOpen(false);
        if (confirmed && superhero && id) {
            dispatch(actions.superheroes.deleteSuperhero(id));
            navigate("/");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            {superhero ? (
                <div className="max-w-4xl w-full p-6 bg-black bg-opacity-70 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6">
                    <img
                        src={superhero?.image}
                        alt={superhero?.nickname}
                        className="w-64 h-64 object-cover rounded-lg shadow-md"
                    />
                    <div className="flex-1 text-white">
                        <h1 className="text-3xl font-bold mb-4">{superhero?.nickname}</h1>
                        <p className="mb-2">
                            <span className="font-semibold">Real Name:</span> {superhero?.real_name}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Origin:</span> {superhero?.origin_description}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Superpowers:</span> {superhero?.superpowers}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Catch Phrase:</span> {superhero?.catch_phrase}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-4">
                            <button
                                onClick={() => navigate("/")}
                                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => {
                                    handleEdit();
                                }}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
                            >
                                Edit
                            </button>
                            <button onClick={handleDelete} className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg">
                                Delete
                            </button>
                            <DeleteDialog superheroName={superhero.nickname} open={dialogOpen} onClose={handleDialogClose} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center text-white text-4xl font-bold">
                    Superhero not found
                    <br />
                    <br />
                    <button onClick={() => navigate("/")} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
                        Back
                    </button>
                </div>
            )}
            {superhero && <EditDialog open={editDialogOpen} onClose={handleEditClose} superhero={superhero} />}
        </div>
    );
};

export default SuperheroPage;
