import React from "react";
import header from "../../assets/images/header-img.jpeg";
const Header = () => {
    return (
        <div>
            <img
                className="h-[80vh] w-full object-cover "
                src={header}
                alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-white animate-pulse text-3xl md:text-5xl font-bold text-center px-4">
                    Apprenez. Progressez. Réinventez l’avenir.
                </h1>
            </div>
        </div>
    );
};

export default Header;
