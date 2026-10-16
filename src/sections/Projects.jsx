
const projects = [
    {
        title: "Fintech Dashboard",
        description:
        "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
        image: "./project1.png",
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
      </div>
    </section>
  );
};