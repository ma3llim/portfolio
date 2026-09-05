import { motion } from "framer-motion";
import Container from "./Container";

const experience = [
    {
        title: "Junior Web Developer",
        company: "Jai Jinendra Solutions",
        date: "Sep 2024 - Nov 2024",
        description:
            "Contributed to building responsive web applications using HTML, CSS, and JavaScript. Developed backend features with PHP and CodeIgniter, integrated secure MySQL operations, and optimized application performance. Gained practical experience in debugging, feature development, and team collaboration within a fast-paced development environment.",
    },
];

const Experience = () => {
    return (
        <section id="experience" className="w-full py-14 lg:py-20">
            <Container>
                <div className="mx-auto max-w-5xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">Career Journey</p>
                        <h2 className="font-playfair text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Experience</h2>
                        <div className="mt-3 h-1 w-14 rounded-full bg-indigo-600" />
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-indigo-500/40 to-transparent" />

                        <div className="space-y-7">
                            {experience.map((item, index) => (
                                <motion.article
                                    key={item.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute left-0 top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-950">
                                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                    </div>

                                    <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/40 sm:p-6">
                                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                            <div>
                                                <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">{item.title}</h3>
                                                <p className="mt-1 text-sm font-semibold text-indigo-500 dark:text-indigo-400">{item.company}</p>
                                            </div>
                                            <span className="w-fit rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-300">
                                                {item.date}
                                            </span>
                                        </div>
                                        <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-slate-400">{item.description}</p>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Experience;
