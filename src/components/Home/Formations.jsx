import React from "react";
import { data } from "../../data";
const Formations = () => {
    return (
        <div className="flex md:flex-row flex-col gap-5 mt-5 p-5 text-center">
            {data?.map((item, index) => (
                <div
                    className="shadow rounded hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                    key={index}
                >
                    <img
                        className="w-300 h-100 object-cover"
                        src={item.image}
                        alt=""
                    />
                    <p className="font-bold text-center">{item.titre}</p>
                    <p>{item.description}</p>
                    <p>{item.duree}</p>
                    <p>{item.niveau}</p>
                </div>
            ))}
        </div>
    );
};

export default Formations;
