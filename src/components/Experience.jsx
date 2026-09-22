import Container from "./Container";

const data = {
    experience: [
        {
            title: "Frontend Developer",
            company: "ve.ai",
            date: "Dec 2025 - Jul 2026",
            description:
                "Frontend Developer with 7 months of professional experience building responsive and reusable React interfaces, integrating REST APIs and WebSockets, implementing OAuth authentication and form validation, and developing dynamic, API-driven application workflows.",
        },
    ],
};

const TimelineItem = ({ title, company, date, description }) => (
    <div className="relative pl-7 sm:pl-9">
        <div className="absolute left-[6px] top-2 bottom-0 w-px bg-slate-800" />
        <div className="absolute left-0 top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-indigo-500 ring-4 ring-slate-950">
            <div className="h-1.5 w-1.5 rounded-full bg-white" />
        </div>

        <article className="group mb-7 rounded-xl border border-slate-800 bg-slate-950/60 p-5 transition-all duration-300 hover:border-indigo-500/40 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-indigo-950/20 sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
                    <p className="mt-1 text-sm font-medium text-indigo-400">{company}</p>
                </div>
                <span className="w-fit rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-400">{date}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>
        </article>
    </div>
);

const Experience = () => {
    return (
        <section id="experience" className="w-full bg-slate-950 py-8 text-white lg:py-10">
            <Container>
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Professional Experience</h2>
                </div>
                <div>
                    {data.experience.map((experience) => (
                        <TimelineItem key={experience.title} title={experience.title} company={experience.company} date={experience.date} description={experience.description} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Experience;
