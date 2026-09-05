import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../constants/Project";

const Projects = () => {
    return (
        <section id="projects" className="w-full bg-slate-900 py-20 text-white md:py-24">
            <div className="mx-auto max-w-6xl px-5 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10 max-w-2xl">
                    <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-indigo-300">PROJECTS</p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What I've Built</h2>
                    <p className="mt-4 text-base leading-7 text-slate-400">A selection of projects that reflect my approach to building practical, scalable, and maintainable software.</p>
                </motion.div>

                <div className="space-y-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
