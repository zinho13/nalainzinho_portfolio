
import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { t, i18n } = useTranslation();

    const currentLanguage = i18n.resolvedLanguage || i18n.language;

    const navLinks = [
        { href: "#about", label: t("nav.about") },
        { href: "#projects", label: t("nav.projects") },
        { href: "#experience", label: t("nav.experience") },
        { href: "#contact", label: t("nav.contact") },
    ];

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const languageSwitcher = (
        <div className="flex items-center gap-1 rounded-full glass p-1">
            <button
                type="button"
                onClick={() => changeLanguage("fr")}
                aria-label="Français"
                aria-pressed={currentLanguage.startsWith("fr")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                    currentLanguage.startsWith("fr")
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-foreground"
                }`}
            >
                FR
            </button>

            <button
                type="button"
                onClick={() => changeLanguage("en")}
                aria-label="English"
                aria-pressed={currentLanguage.startsWith("en")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                    currentLanguage.startsWith("en")
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-foreground"
                }`}
            >
                EN
            </button>
        </div>
    );

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
            }`}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a
                    href="#"
                    className="text-xl font-bold tracking-tight hover:text-primary"
                    aria-label="Accueil"
                >
                    AZ<span className="text-primary">.</span>
                </a>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.href}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {languageSwitcher}

                    {/* <Button size="sm">
                        {t("nav.contact")}
                    </Button> */}
                </div>

                {/* Mobile controls */}
                <div className="flex md:hidden items-center gap-3">
                    {languageSwitcher}

                    <button
                        type="button"
                        className="p-2 text-foreground cursor-pointer"
                        onClick={() =>
                            setIsMobileMenuOpen((prev) => !prev)
                        }
                        aria-label={
                            isMobileMenuOpen
                                ? t("nav.closeMenu")
                                : t("nav.openMenu")
                        }
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg text-muted-foreground hover:text-foreground py-2 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}

                        <Button
                            onClick={() => setIsMobileMenuOpen(false)}
                            size="sm"
                        >
                            {t("nav.contact")}
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};
