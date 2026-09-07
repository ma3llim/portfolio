import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CiFileOn } from "react-icons/ci";
import { FaBriefcase, FaEnvelope, FaGlobe, FaHome, FaTools, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { resume } from "../constants/app";

const HeaderModel = ({ isOpen, onClose }) => {
    const navigationItems = [
        {
            Icon: FaHome,
            title: "Home",
            subtitle: "Start here — explore my personal portfolio!",
            path: "home",
        },
        {
            Icon: FaTools,
            title: "Skills",
            subtitle: "Technologies and tools I'm proficient with",
            path: "skills",
        },
        {
            Icon: FaGlobe,
            title: "Projects",
            subtitle: "A showcase of my best work and creations",
            path: "projects",
        },
        {
            Icon: FaBriefcase,
            title: "Experience",
            subtitle: "My professional journey and work history",
            path: "experience",
        },
        {
            Icon: FaEnvelope,
            title: "Contact",
            subtitle: "Get in touch — I'd love to hear from you!",
            path: "contact",
        },
    ];

    // Close with Escape
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    // Prevent background scrolling
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div className="fixed inset-0 z-[100] bg-black/50 px-4 pt-16 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
                    <motion.div
                        className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 text-white shadow-2xl shadow-black/40 backdrop-blur-xl"
                        initial={{ opacity: 0, y: -15, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.97 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                        }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Navigation</p>
                                <h2 className="mt-1 text-lg font-semibold text-white">Explore Portfolio</h2>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close navigation menu"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                            >
                                <FaTimes className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Navigation */}
                        <div className="max-h-[70vh] overflow-y-auto p-3">
                            <div className="space-y-1">
                                {navigationItems.map((item) => {
                                    const Icon = item.Icon;

                                    return (
                                        <Link
                                            key={item.title}
                                            to={item.path}
                                            smooth={true}
                                            duration={500}
                                            onClick={onClose}
                                            className="group flex cursor-pointer items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-white/5 active:bg-white/10"
                                        >
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-800 text-slate-300 transition-all duration-200 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-400">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold text-white">{item.title}</p>

                                                <p className="mt-0.5 text-xs leading-5 text-slate-400">{item.subtitle}</p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* General */}
                            <div className="my-3 border-t border-white/10" />

                            <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">General</p>

                            <a
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                aria-label="View Resume"
                                className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-white/5"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-800 text-slate-300 transition-all duration-200 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-400">
                                    <CiFileOn className="h-6 w-6" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-white">Resume</p>

                                    <p className="mt-0.5 text-xs text-slate-400">View my resume</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.getElementById("model-root"),
    );
};

export default HeaderModel;
