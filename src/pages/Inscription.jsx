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
    } = useForm({
        mode: "onChange",
    });

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
        <>
            <div className="flex  flex-col justify-center items-center h-[90vh]">
                <div className="bg-[#d22871] text-gray-100 p-3 rounded shadow-xl">
                    <h1 className="text-xl text-center">Inscription</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            type="text"
                            name="prenom"
                            register={register}
                            placeholder="prenom"
                            error={errors.prenom}
                            validation={{
                                required: "Le champ prénom est requis",
                            }}
                        />
                        <Input
                            type="text"
                            name="nom"
                            register={register}
                            placeholder="nom"
                            error={errors.nom}
                            validation={{
                                required: "Le champ nom est requis",
                            }}
                        />
                        <Input
                            type="email"
                            name="email"
                            register={register}
                            placeholder="email"
                            error={errors.email}
                            validation={{
                                required: "Le champ email est requis",
                            }}
                        />
                        <Input
                            name="formation"
                            register={register}
                            type="formation"
                            placeholder="formation choisie"
                            error={errors.formation}
                            validation={{
                                required: "Le champ formation est requis",
                            }}
                        />

                        <Button
                            type="submit"
                            text="S'inscrire"
                            className="bg-gray-100 text-indigo-900 w-full mt-5 p-2 rounded cursor-pointer"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Inscription;
