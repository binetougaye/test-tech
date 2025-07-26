import React from "react";

const Footer = () => {
    return (
        <footer class="bg-[#d22871] text-gray-200 mt-10">
            <div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h2 class="text-lg font-semibold mb-4">À propos</h2>
                    <p class="text-sm">
                        Akassa learning, la plateforme d’apprentissage innovante
                        propulsée par l’IA, conçue pour les étudiants,
                        formateurs et managers RH.
                    </p>
                </div>
                <div>
                    <h2 class="text-lg font-semibold mb-4">Liens utiles</h2>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <a href="#" class="hover:text-white">
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-white">
                                Formations
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-white">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-lg font-semibold mb-4">Contact</h2>
                    <p class="text-sm">hello@akassaa.com</p>
                    <p class="text-sm">+221 78 476 29 29 </p>
                </div>
            </div>
            <div class="border-t border-gray-600 text-center py-4 text-sm">
                &copy; 2025 Akassa Learning. Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;
