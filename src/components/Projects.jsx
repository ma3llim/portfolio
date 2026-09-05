import Container from "./Container";

const experience = [
    {
        title: "Junior Web Developer",
        company: "Jai Jinendra Solutions",
        date: "Sep 2024 - Nov 2024",
        description:
            "Contributed to building responsive web applications using HTML, CSS, and JavaScript. Developed backend features with PHP and CodeIgniter, integrated secure MySQL operations, and optimized performance. Gained practical experience in debugging and team collaboration within a fast-paced development environment.",
    },
    {
        title: "Web Developer Intern",
        company: "Wish Abroad",
        date: "Jan 2021 - May 2021",
        description:
            "Focused on front-end development with HTML, CSS, and JavaScript to create responsive web pages. Assisted with PHP-based backend tasks and enhanced site performance. Strengthened foundational web skills and gained insight into real-world project workflows and team collaboration.",
    },
];

const Experience = () => {
    return (
        <section id="experience" className="w-full py-14 lg:py-20">
            <Container>
                <div className="mx-auto max-w-5xl">
                    <div className="mb-10">
                        <h2 className="font-playfair text-3xl font-extrabold underline decoration-blue-600 underline-offset-8 lg:text-4xl">Experience</h2>

                        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                            Professional experience building responsive web applications and working across frontend and backend development.
                        </p>
                    </div>
                    <div className="relative ml-2 border-l border-slate-700 pl-7">
                        {experience.map((item, index) => (
                            <div key={item.title} className={`relative ${index !== experience.length - 1 ? "pb-8" : ""}`}>
                                <span className="absolute -left-[35px] top-2 h-3.5 w-3.5 rounded-full border-2 border-indigo-400 bg-slate-950 shadow-lg shadow-indigo-500/30" />
                                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5">
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                            <p className="mt-1 text-sm font-medium text-indigo-400">{item.company}</p>
                                        </div>
                                        <span className="w-fit rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-400">{item.date}</span>
                                    </div>
                                    <p className="mt-4 text-sm leading-6 text-slate-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Experience;
