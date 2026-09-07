import { useState } from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import { Link } from "react-scroll";
import HeaderModel from "./HeaderModel";
import Container from "./Container";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 py-2 bg-indigo-900/80 backdrop-blur-md border-b border-white/10 transition-all duration-300 shadow-xl">
                <Container>
                    <div className="grid grid-cols-2 items-center">
                        <Link to="home" href="#home" smooth={true} duration={500} className="w-[160px] h-[40px] flex items-center cursor-pointer">
                            <img className="w-[250px] h-[150px] object-contain" src="logo.svg" alt="sameerfolio Logo" />
                        </Link>
                        <nav className="flex items-center justify-end gap-6">
                            <ul className="hidden md:flex items-center gap-6 text-lg">
                                <li className="hover:text-primary transition">
                                    <Link to="home" href="#home" smooth={true} duration={500} className="select-none cursor-pointer">
                                        Home
                                    </Link>
                                </li>
                                <li className="hover:text-primary transition">
                                    <Link to="skills" href="#skills" smooth={true} duration={500} className="select-none cursor-pointer">
                                        Skills
                                    </Link>
                                </li>
                                <li className="hover:text-primary transition">
                                    <Link to="projects" href="#projects" smooth={true} duration={500} className="select-none cursor-pointer">
                                        Projects
                                    </Link>
                                </li>
                                <li className="hover:text-primary transition">
                                    <Link to="experience" href="#experience" smooth={true} duration={500} className="select-none cursor-pointer">
                                        Experience
                                    </Link>
                                </li>
                                <li className="hover:text-primary transition">
                                    <Link to="contact" href="#contact" smooth={true} duration={500} className="select-none cursor-pointer">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <div onClick={() => setIsOpen(true)} className="p-2 group hover:bg-gray-200 rounded-full transition-all cursor-pointer md:hidden">
                                <MdKeyboardCommandKey size={24} className="group-hover:text-black" />
                            </div>
                        </nav>
                    </div>
                </Container>
            </div>
            <HeaderModel isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default Header;
