import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Inscription from "./pages/Inscription";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Accueil from "./pages/Accueil";
function App() {
    return (
        <div>
            {/* <h1>Hello</h1> */}
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/inscription" element={<Inscription />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
