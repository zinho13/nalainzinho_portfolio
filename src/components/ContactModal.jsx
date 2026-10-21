
import { useEffect, useState } from "react";
import { X, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { name, email, subject, message } = formData;

        const mailto = `mailto:TON_EMAIL@example.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(
            `Nom : ${name}\nEmail : ${email}\n\n${message}`
        )}`;

        window.location.href = mailto;
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-background p-6 md:p-8 shadow-2xl animate-fade-in"
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label={t("contact.close")}
                    className="absolute right-4 top-4 rounded-full p-2 hover:bg-surface transition-colors"
                >
                    <X size={20} />
                </button>

                <h2
                    id="contact-modal-title"
                    className="text-2xl font-bold mb-2"
                >
                    {t("contact.title")}
                </h2>

                <p className="text-muted-foreground text-sm mb-6">
                    {t("contact.description")}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="contact-name" className="block text-sm mb-2">
                            {t("contact.name")}
                        </label>
                        <input
                            id="contact-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                            placeholder={t("contact.namePlaceholder")}
                        />
                    </div>

                    <div>
                        <label htmlFor="contact-email" className="block text-sm mb-2">
                            {t("contact.email")}
                        </label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                            placeholder={t("contact.emailPlaceholder")}
                        />
                    </div>

                    <div>
                        <label htmlFor="contact-subject" className="block text-sm mb-2">
                            {t("contact.subject")}
                        </label>
                        <input
                            id="contact-subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                            placeholder={t("contact.subjectPlaceholder")}
                        />
                    </div>

                    <div>
                        <label htmlFor="contact-message" className="block text-sm mb-2">
                            {t("contact.message")}
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full resize-y rounded-lg border border-white/10 bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                            placeholder={t("contact.messagePlaceholder")}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
                    >
                        <Send size={18} />
                        {t("contact.send")}
                    </button>
                </form>
            </div>
        </div>
    );
};
