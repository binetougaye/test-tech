import React from "react";

const Input = ({ placeholder, type, register, name, error, validation }) => {
    return (
        <div className="w-full max-w-md px-3 mb-4">
            <input
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name={name}
                type={type}
                {...register(name, validation)}
                placeholder={placeholder}
            />
            {error && (
                <p className="text-red-600 text-sm mt-1">{error.message}</p>
            )}
        </div>
    );
};

export default Input;
