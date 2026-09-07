import { FaArrowUp, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "./Container";
import { Link } from "react-scroll";
import { socialLinks } from "../constants/app";

const Footer = () => {
    return (
        <section className="w-full pt-4 bg-slate-950">
            <Container>
                <div className="relative">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/10 via-white/50 to-white/10 rounded" />
                    <div className="py-8 lg:pt-8 lg:pb-0 space-y-6 text-center flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-wrap justify-center gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.ariaLabel}
                                        className="text-slate-400 transition-colors duration-300 hover:text-white"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                        <p className="text-sm md:text-base px-4">&copy; {new Date().getFullYear()} Mohd Sameer. All Rights Reserved.</p>
                    </div>
                </div>

                <Link
                    href="#home"
                    to="home"
                    smooth={true}
                    duration={500}
                    className="fixed bottom-5 right-5 w-10 h-10 bg-violet-600 rounded flex justify-center items-center text-white shadow-md transition duration-300 cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="text-lg" />
                </Link>
            </Container>
        </section>
    );
};

export default Footer;
