import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
        "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "Staying ahead with the latest technologies and best practices.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span 
                                className="text-secondary-foreground text-sm fotn-medium tracking-wider uppercase"
                            >
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in 
                            animation-delay-100 text-secondary-foreground">
                            Building the future
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                one component at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I am a Full-Stack and Backend Java Developer holding a Master’s Degree 
                                in Computer Science, with over 5 years of professional experience designing, 
                                building, and scaling high-performance web applications.
                            </p>
                            <p>
                                If you are looking for a reliable, detail-oriented engineer who can take 
                                ownership of your backend architecture, optimize your database, or deliver 
                                a complete full-stack solution from scratch, I am ready to help.
                            </p>
                            <p>
                                Whether you need to build an MVP, modernize a legacy system, or troubleshoot
                                complex performance bottlenecks, let's discuss how I can bring value to your project.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to create digital experiences that are not just
                                functional, but truly delightful – products that users love to
                                use and developers love to maintain."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}