import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { ContactModal } from "../components/ContactModal";
import { useTranslation } from "react-i18next";

const skills = [
    "Java",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Node.js",
    "Spring Boot",
    "Nest.js",
    "Angular",
    "React",
    "Next.js",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Tailwind CSS",
    "Prisma",
    "Figma",
    "Git",
];

export const Hero = () => {
    const { t, i18n} = useTranslation();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const currentLanguage = i18n.resolvedLanguage || i18n.language;
    const isFrench = currentLanguage.startsWith("fr");

    return (
        <section
            className="relative min-h-screen flex items-center"
        >
            {/* Bg */}
            <div className="absolute inset-0">
                <img 
                    src="/bg.jpg" 
                    alt="hero image" 
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }} 
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    {t("hero.badge")}
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                {t("hero.headline1")}{" "} <span className="text-primary glow-text">{t("hero.headlineHighlight")}</span>
                                <br />
                                {t("hero.headline2")}
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    {t("hero.headline3")}
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                {t("hero.description")}
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg" onClick={() => setIsContactModalOpen(true)}>
                                {t("hero.contactMe")} <ArrowRight className="w-5 h-5" />
                            </Button>
                            {/* Animated SVG Border */}
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5" /> 
                                {t("hero.downloadCV")}
                            </AnimatedBorderButton>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground ">{t("hero.followMe")} </span>
                            {[
                                {
                                    name: "GitHub",
                                    href: "https://github.com/zinho13",
                                    icon: (
                                        <svg className="w-5 h-5 text-slate-300 hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "LinkedIn",
                                    href: "https://www.linkedin.com/in/alain-zinho",
                                    icon: (
                                        <svg className="w-5 h-5 text-slate-300 hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                        </svg>
                                    )
                                },
                                {
                                    name: "WhatsApp",
                                    href: "https://wa.me/261324000607",
                                    icon: (
                                        <svg className="w-5 h-5 text-slate-300 hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.432 5.63 1.433h.004c6.554 0 11.89-5.335 11.893-11.892a11.826 11.826 0 00-3.376-8.411z" />
                                        </svg>
                                    )
                                },
                            ].map((social, idx) => (
                                <a 
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Profile Image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        <div className="relative w-full max-w-md mx-auto">

                            {isFrench ? (
                                /* FR: Original rectangular design */
                                <>
                                    {/* Glow effect */}
                                    <div
                                        className="absolute inset-0 rounded-3xl bg-gradient-to-br
                                                from-primary/30 via-transparent to-primary/10
                                                blur-2xl animate-pulse"
                                    />

                                    {/* Rectangular profile image */}
                                    <div className="relative glass rounded-3xl p-2 glow-border">
                                        <img
                                            src="/profile.jpeg"
                                            alt="Alain Zinho"
                                            className="w-full aspect-[4/4.5] object-cover rounded-2xl"
                                        />

                                        {/* Availability badge */}
                                        <div className="absolute -bottom-4 -right-4 glass
                                                        rounded-xl px-4 py-3 animate-float">
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-green-500 rounded-full
                                                                animate-pulse" />
                                                <span className="text-sm font-medium">
                                                    {t("hero.availability")}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Experience badge */}
                                        <div className="absolute -top-4 -left-4
                                                        rounded-xl px-4 py-3 animate-float
                                                        animation-delay-500">
                                            <div className="text-2xl font-bold text-primary">
                                                5+
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {t("hero.experience")}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                /* EN: Circular design */
                                <>
                                    {/* Glow effect */}
                                    <div
                                        className="absolute inset-8 rounded-full bg-gradient-to-br
                                                from-primary/30 via-transparent to-primary/10
                                                blur-3xl animate-pulse"
                                    />

                                    {/* Circular profile image */}
                                    <div className="relative aspect-square w-full max-w-[450px]
                                                    mx-auto rounded-full overflow-hidden
                                                    border border-primary/60
                                                    shadow-[0_0_30px_rgba(32,178,166,0.25),0_0_70px_rgba(32,178,166,0.15)]
                                                    portrait-glow">
                                        <img
                                            src="/profile.jpeg"
                                            alt="Alain Zinho"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>

                                    {/* Experience badge */}
                                    <div
                                        className="absolute top-4 left-0 md:-left-6 z-20
                                                glass rounded-2xl px-5 py-3
                                                border border-primary/30
                                                shadow-[0_0_20px_rgba(32,178,166,0.12)]
                                                animate-float animation-delay-500"
                                    >
                                        <div className="text-3xl font-bold text-primary leading-none">
                                            5+
                                        </div>

                                        <div className="text-xs text-muted-foreground mt-2 whitespace-nowrap">
                                            {t("hero.experience")}
                                        </div>
                                    </div>

                                    {/* Availability badge */}
                                    <div
                                        className="absolute bottom-4 right-0 md:-right-6 z-20
                                                glass rounded-2xl px-5 py-4
                                                border border-primary/30
                                                shadow-[0_0_25px_rgba(32,178,166,0.15)]
                                                animate-float max-w-[250px]"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="relative flex h-3 w-3 shrink-0"
                                            >
                                                <span
                                                    className="absolute inline-flex h-full w-full
                                                            rounded-full bg-green-400 opacity-75 animate-ping"
                                                />
                                                <span
                                                    className="relative inline-flex h-3 w-3
                                                            rounded-full bg-green-500"
                                                />
                                            </span>

                                            <span className="text-sm font-medium leading-relaxed">
                                                {t("hero.availability")}
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">{t("hero.technologies")}</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span 
                                        className="text-xl font-semibold text-muted-foreground/50 
                                            hover:text-muted-foreground transition-colors"
                                    >
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                    <span className="text-xs uppercase tracking-wider">{t("hero.scroll")}</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </section>
    );
}