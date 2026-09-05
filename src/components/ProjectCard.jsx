import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaTimes } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsVideoOpen(false);
            }
        };

        if (isVideoOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isVideoOpen]);

    return (
        <>
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl"
            >
                <div className="grid lg:grid-cols-[30%_70%]">
                    <div className="relative min-h-[240px] overflow-hidden bg-slate-900 sm:min-h-[300px] lg:min-h-full">
                        <img
                            src={project.image}
                            alt={`${project.title} project`}
                            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                        <div className="absolute bottom-5 left-5">
                            <span className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md">{project.type}</span>
                        </div>
                    </div>

                    <div className="p-6 sm:p-7 lg:p-8">
                        <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                        <p className="mt-4 text-sm leading-6 text-slate-400">{project.description}</p>
                        <div className="mt-6">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Engineering Highlights</p>
                            <div className="flex flex-wrap gap-x-5 gap-y-2">
                                {project.engineeringHighlights.map((item) => (
                                    <span key={item} className="text-sm text-slate-400">
                                        <span className="mr-2 text-indigo-400">•</span>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Technology Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((technology) => {
                                    const Icon = technology.icon;
                                    return (
                                        <span
                                            key={technology.name}
                                            className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-300"
                                        >
                                            <Icon className="h-3.5 w-3.5 text-indigo-400" />
                                            {technology.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <a
                                href={project.links.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500"
                            >
                                Live Demo
                                <FaExternalLinkAlt className="h-3.5 w-3.5" />
                            </a>
                            <button
                                type="button"
                                onClick={() => setIsVideoOpen(true)}
                                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-indigo-500/40 bg-indigo-500/10 px-5 py-2.5 text-sm font-semibold text-indigo-300 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-white"
                            >
                                <FaPlay className="h-3.5 w-3.5" />
                                Watch Demo
                            </button>
                            <a
                                href={project.links.backend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-slate-500 hover:text-white"
                            >
                                Backend
                                <FaGithub className="h-4 w-4" />
                            </a>
                            <a
                                href={project.links.frontend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-slate-500 hover:text-white"
                            >
                                Frontend
                                <FaGithub className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.article>

            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVideoOpen(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.96,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.96,
                                y: 20,
                            }}
                            transition={{ duration: 0.25 }}
                            onClick={(event) => event.stopPropagation()}
                            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl"
                        >
                            <button
                                type="button"
                                onClick={() => setIsVideoOpen(false)}
                                aria-label="Close project video"
                                className="absolute right-3 top-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 text-slate-300 backdrop-blur-md transition hover:border-slate-500 hover:text-white"
                            >
                                <FaTimes className="h-4 w-4" />
                            </button>

                            <video src={project.video} controls autoPlay playsInline className="block max-h-[80vh] w-full bg-black object-contain" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;
