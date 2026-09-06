import { motion } from "framer-motion";
import Container from "./Container";
import userAvatar from "../assets/userAvatar.webp";
import { FaCloudDownloadAlt, FaGithub, FaInstagram, FaLinkedin, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import resume from "/mohd_sameer.pdf";

const Hero = () => {
    return (
        <section id="home" className="relative w-full overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0">
                <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
                <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>
            <Container>
                <div className="relative flex items-center py-14 md:py-16">
                    <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-indigo-400" />
                                <span className="text-xs font-semibold tracking-[0.2em] text-indigo-300">JAVA FULL STACK DEVELOPER</span>
                            </div>
                            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                                Building reliable
                                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">software for the web.</span>
                            </h1>
                            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-[17px]">
                                I build full-stack applications with Java, Spring Boot, and React, combining practical frontend experience with hands-on backend development to create reliable,
                                well-structured web applications.
                            </p>
                            <div className="mt-7 flex flex-wrap items-center gap-4">
                                <a
                                    href="#projects"
                                    className="group inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500"
                                >
                                    View My Work
                                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                                <a
                                    href={resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Download Resume"
                                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400 hover:text-white"
                                >
                                    Resume
                                    <FaCloudDownloadAlt className="h-5 w-5" />
                                </a>
                            </div>
                            <div className="mt-8 flex items-center gap-5">
                                <span className="text-sm text-slate-500">Connect</span>
                                <span className="h-px w-8 bg-slate-700" />
                                <a
                                    href="https://www.linkedin.com/in/mohdsameer-dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="text-slate-400 transition-colors duration-300 hover:text-white"
                                >
                                    <FaLinkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://wa.me/+919885191161"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="text-slate-400 transition-colors duration-300 hover:text-white"
                                >
                                    <FaWhatsapp className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://github.com/ma3llim/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="text-slate-400 transition-colors duration-300 hover:text-white"
                                >
                                    <FaGithub className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/ma_3llim_007/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="text-slate-400 transition-colors duration-300 hover:text-white"
                                >
                                    <FaInstagram className="h-5 w-5" />
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                x: 30,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.15,
                            }}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative">
                                <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-indigo-950/40">
                                    <img src={userAvatar} alt="Portrait of Mohd Sameer" className="h-60 w-60 rounded-[1.35rem] object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80" />
                                    <div className="absolute inset-x-2 bottom-2 rounded-b-[1.35rem] bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-5 pt-16">
                                        <p className="text-sm font-medium text-slate-300">Software Developer</p>
                                        <p className="mt-1 text-base font-semibold sm:text-lg">Java • Spring Boot • React</p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -left-3 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-md sm:-bottom-5 sm:-left-5 sm:px-4 sm:py-2.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                                    <span className="text-xs font-medium text-slate-300 sm:text-sm">Available to connect</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
