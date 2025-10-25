
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TypingAnimation: React.FC = () => {
    const roles = ["Software Engineer", "Frontend Developer", ".NET Developer"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delay = 2000;

    useEffect(() => {
        const handleTyping = () => {
            const fullRole = roles[roleIndex];
            if (isDeleting) {
                setCurrentText(currentText.substring(0, currentText.length - 1));
            } else {
                setCurrentText(fullRole.substring(0, currentText.length + 1));
            }

            if (!isDeleting && currentText === fullRole) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, roleIndex]);


    return (
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light-heading dark:text-white mb-4">
            I'm a <span className="text-light-accent dark:text-accent">{currentText}</span>
            <span className="animate-ping">|</span>
        </h2>
    );
};


const Hero: React.FC = () => {
    const socialLinks = [
        { href: "https://github.com/Abdulrahman-adil", icon: Github },
        { href: "https://www.linkedin.com/in/abdelrahman-adel-9b31a6157/", icon: Linkedin },
        { href: "https://wa.me/+971553472783", icon: MessageCircle },
    ];

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-start pt-20">
            <AnimatedSection className="w-full">
                <p className="font-mono text-light-accent dark:text-accent mb-4 text-lg">Hi, my name is</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light-heading dark:text-lightest-slate mb-2">Abdo Adel.</h1>
                <TypingAnimation />
                <p className="max-w-xl text-lg mb-8 text-light-text dark:text-light-slate">
                    I'm a passionate software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on creating accessible, human-centered products using modern web technologies.
                </p>
                <div className="flex items-center space-x-6">
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="font-mono text-lg text-light-accent dark:text-accent border border-light-accent dark:border-accent rounded px-8 py-4 hover:bg-light-accent/10 dark:hover:bg-accent/10 transition-all duration-300 ease-custom-ease"
                    >
                        Get In Touch
                    </a>
                    <div className="flex items-center space-x-4">
                        {socialLinks.map(link => (
                            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-slate hover:text-light-accent dark:hover:text-accent transform hover:-translate-y-1 transition-transform duration-300">
                                <link.icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Hero;
