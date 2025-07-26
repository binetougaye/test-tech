import React from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Inscription = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange" });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        if (isValid) {
            toast.success("Inscription réussie !", {
                autoClose: 2000,
            });
            navigate("/");
        }
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="w-full max-w-md bg-[#d22871] text-white p-6 rounded shadow-lg">
                <h1 className="text-2xl font-semibold text-center mb-6">
                    Inscription
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="text"
                        name="prenom"
                        register={register}
                        placeholder="Prénom"
                        error={errors.prenom}
                        validation={{ required: "Le champ prénom est requis" }}
                    />
                    <Input
                        type="text"
                        name="nom"
                        register={register}
                        placeholder="Nom"
                        error={errors.nom}
                        validation={{ required: "Le champ nom est requis" }}
                    />
                    <Input
                        type="email"
                        name="email"
                        register={register}
                        placeholder="Email"
                        error={errors.email}
                        validation={{ required: "Le champ email est requis" }}
                    />
                    <Input
                        type="text"
                        name="formation"
                        register={register}
                        placeholder="Formation choisie"
                        error={errors.formation}
                        validation={{
                            required: "Le champ formation est requis",
                        }}
                    />

                    <Button
                        type="submit"
                        text="S'inscrire"
                        className="bg-white text-[#d22871] font-bold w-full mt-5 p-2 rounded hover:bg-pink-100 transition"
                    />
                </form>
            </div>
        </div>
    );
};

export default Inscription;
