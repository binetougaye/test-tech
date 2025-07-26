import React from "react";
import Formations from "../components/Home/Formations";
import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

const Accueil = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <h1 className="text-center text-xl font-bold mt-5">
                Nos Formations
            </h1>
            <Formations />
            <Footer />
        </div>
    );
};

export default Accueil;
