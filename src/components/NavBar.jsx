
import { useState } from 'react';
import { Book, Menu, X } from 'lucide-react';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-black text-white py-4 px-6 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2 font-semibold">
                    <Book className="h-6 w-6" />
                    <span>Economía</span>
                </div>

                {/* Menú para pantallas grandes */}
                <nav className="hidden md:flex items-center gap-4">
                    <a href="#" className="hover:text-gray-300 transition duration-300">Inicio</a>
                    <a href="#cortes" className="hover:text-gray-300 transition duration-300">Cortes</a>
                    <a href="#about" className="hover:text-gray-300 transition duration-300">Acerca de</a>
                </nav>

                {/* Botón de menú en dispositivos móviles */}
                <div className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </div>
            </div>

            {/* Menú desplegable para dispositivos móviles */}
            {isOpen && (
                <nav className="md:hidden bg-black text-white space-y-4 p-4 absolute  left-0 right-0">
                    <a href="#" onClick={toggleMenu} className="block hover:text-gray-300 transition duration-300">Inicio</a>
                    <a href="#cortes" onClick={toggleMenu} className="block hover:text-gray-300 transition duration-300">Cortes</a>
                    <a href="#about" onClick={toggleMenu} className="block hover:text-gray-300 transition duration-300">Acerca de</a>
                </nav>
            )}
        </header>
    );
};
