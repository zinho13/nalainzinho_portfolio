import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Fintech Dashboard",
        description:
        "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
        image: "/projects/project1.png",
        tags: ["React", "Typescript", "NodeJs"],
        link: "#",
        github: "#"
    },
    {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce solution with inventory management, payment",
        image: "/projects/project2.png",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
        link: "#",
        github: "#",
    },
    {
        title: "AI Writing Assistant",
        description: "An intelligent writing tool powered by GPT-4, helping users create better",
        image: "/projects/project3.png",
        tags: ["React", "OpenAI", "Python", "FastAPI"],
        link: "#",
        github: "#",
    },
    {
        title: "Project Management Tool",
        description: "A collaborative workspace for teams with real-time updates, task tracking",
        image: "/projects/project4.png",
        tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
        link: "#",
        github: "#",
    },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-sencondary-foreground  text-sm font-medium tracking-wider uppercase animate-fade-in">
                Featured work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold pt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                Projects that
                <span className="font-serif italic font-normal text-white"> make an impact.</span>
            </h2>
            <p className="text-muted-froreground animate-fade-in animation-delay-200">
                A selection of my recent work, from complex web application to innovative tools that solve real-world problems.
            </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
                <div 
                    key={idx}
                    className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                    style={{animationDelay: `${(idx + 1) * 100}ms`}}
                >
                {/* Image */}
                    <div className="relative overflow-hidden aspect-video">
                        <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                        {/* Overlay Links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                            <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                <svg className="w-5 h-5 text-slate-300 hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};