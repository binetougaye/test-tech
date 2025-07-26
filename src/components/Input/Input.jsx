import React from "react";

const Input = ({ placeholder, type, register, name, error, validation }) => {
    return (
        <div>
            <input
                className="border w-[400px] p-2 m-3 rounded"
                name={name}
                type={type}
                {...register(name, validation)}
                placeholder={placeholder}
            />
            {error && <p className="text-red-600">{error.message}</p>}
        </div>
    );
};

export default Input;
