import { FaJava, FaReact, FaDocker, FaAws, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaKey } from "react-icons/fa";
import {
    SiSpringboot,
    SiSpringsecurity,
    SiTypescript,
    SiTailwindcss,
    SiGithubactions,
    SiGradle,
    SiPostman,
    SiNginx,
    SiGrafana,
    SiSwagger,
    SiJunit5,
    SiPostgresql,
    SiRedis,
    SiJavascript,
    SiRedux,
    SiReactquery,
    SiReactrouter,
    SiAxios,
    SiReacthookform,
    SiShadcnui,
    SiGraphql,
    SiPrometheus,
} from "react-icons/si";
import { Code2, Server, Network, Gauge, Database, Cloud, GitBranch, Activity, BarChart3, Container, FlaskConical } from "lucide-react";
import DivContainer from "./Container";

const skillGroups = [
    {
        title: "Backend",
        description: "Robust backend services and API development",
        icon: Server,
        skills: [
            { name: "Java", icon: FaJava },
            { name: "Spring Boot", icon: SiSpringboot },
            { name: "Spring Security", icon: SiSpringsecurity },
            { name: "RESTful APIs", icon: Network },
            { name: "GraphQL", icon: SiGraphql },
            { name: "JPA / Hibernate", icon: Database },
            { name: "JWT", icon: FaKey },
            { name: "SQL", icon: Database },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Redis", icon: SiRedis },
            { name: "Rate Limiting", icon: Gauge },
        ],
    },

    {
        title: "Frontend",
        description: "Responsive and modern user interfaces",
        icon: Code2,
        skills: [
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: SiJavascript },
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Redux Toolkit", icon: SiRedux },
            { name: "React Query", icon: SiReactquery },
            { name: "React Router", icon: SiReactrouter },
            { name: "Axios", icon: SiAxios },
            { name: "React Hook Form", icon: SiReacthookform },
            { name: "Shadcn UI", icon: SiShadcnui },
        ],
    },

    {
        title: "DevOps & Cloud",
        description: "Containerization, automation, and deployment",
        icon: Cloud,
        skills: [
            { name: "Docker", icon: FaDocker },
            { name: "AWS", icon: FaAws },
            { name: "GitHub Actions", icon: SiGithubactions },
            { name: "CI/CD", icon: GitBranch },
            { name: "Amazon ECR", icon: Container },
            { name: "Amazon EC2", icon: Server },
            { name: "Nginx", icon: SiNginx },
            { name: "Docker Compose", icon: FaDocker },
        ],
    },

    {
        title: "Tools, Testing & Monitoring",
        description: "Development workflow, quality, and observability",
        icon: Activity,
        skills: [
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "Gradle", icon: SiGradle },
            { name: "Postman", icon: SiPostman },
            { name: "Swagger / OpenAPI", icon: SiSwagger },
            { name: "JUnit 5", icon: SiJunit5 },
            { name: "Mockito", icon: FlaskConical },
            { name: "Prometheus", icon: SiPrometheus },
            { name: "Grafana", icon: SiGrafana },
            { name: "Metrics", icon: BarChart3 },
        ],
    },
];

const TechnicalSkills = () => {
    return (
        <section id="skills" className="w-full bg-slate-950 py-20 text-white md:py-24">
            <DivContainer>
                <div className="px-5 lg:px-8">
                    <div className="mx-auto mb-10">
                        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Skills & Technologies</h2>
                        <p className="mt-4 text-base leading-7 text-slate-400">
                            A practical technology stack focused on building reliable full-stack applications, from backend services and APIs to modern interfaces, deployment, and monitoring.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {skillGroups.map((group) => {
                            const GroupIcon = group.icon;
                            return (
                                <div key={group.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-indigo-500/40 hover:bg-slate-900">
                                    <div className="mb-4 flex items-center gap-2.5">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-400">
                                            <GroupIcon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                                            <p className="text-sm text-slate-500">{group.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {group.skills.map((skill) => {
                                            const Icon = skill.icon;
                                            return (
                                                <div
                                                    key={skill.name}
                                                    className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-indigo-500/40 hover:text-white"
                                                >
                                                    <Icon className="h-3.5 w-3.5 text-indigo-400" />
                                                    <span>{skill.name}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </DivContainer>
        </section>
    );
};

export default TechnicalSkills;
