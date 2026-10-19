import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../components/Button"
import { useState } from "react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "nalainzinho12@gmail.com",
        href: "mailto:nalainzinho12@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+261 32 40 006 07",
        href: "tel:+261324000607",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Amboatavo Itaosy, Antananarivo Madagascar",
        href: "#",
    },
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async () => {
        e.preventDefault();
    }

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primay/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in">
                        Let's build{" "}
                        <span className="font-serif italic font-normal text-white">
                            something great.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Have a project in mind? I'd love to hear about it. Send me a message 
                        and let's discuss how we can work together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 maw-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form 
                            action=""
                            className="space-y-6"
                        >
                            <div>
                                <label 
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Name
                                </label>
                                <input 
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Your name..."
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input 
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea 
                                    rows={5}
                                    id="message"
                                    type="textarea"
                                    required
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full "
                            >
                                Send Message
                                <Send />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}