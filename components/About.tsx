
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Figma, Code, Database, Wind } from 'lucide-react';

const skills = [
  { name: 'C# & .NET', icon: <Code className="w-5 h-5" /> },
  { name: 'JavaScript (ES6+)', icon: <Code className="w-5 h-5" /> },
  { name: 'TypeScript', icon: <Code className="w-5 h-5" /> },
  { name: 'Angular', icon: <Code className="w-5 h-5" /> },
  { name: 'HTML & CSS', icon: <Code className="w-5 h-5" /> },
  { name: 'Figma', icon: <Figma className="w-5 h-5" /> },
  { name: 'SQL & LINQ', icon: <Database className="w-5 h-5" /> },
  { name: 'Tailwind CSS', icon: <Wind className="w-5 h-5" /> },
  { name: 'WordPress', icon: <Code className="w-5 h-5" /> },
];

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="py-24">
      <h2 className="text-3xl font-bold text-light-heading dark:text-lightest-slate mb-8 font-mono relative w-full flex items-center">
        <span className="text-2xl text-light-accent dark:text-accent mr-3">01.</span>
        About Me
        <span className="h-px bg-light-text/20 dark:bg-lightest-navy/50 flex-grow ml-4"></span>
      </h2>
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3 text-lg space-y-4 text-light-text dark:text-light-slate">
          <p>
            Hello! I'm Abdo, a software engineer with a passion for creating dynamic and user-friendly web applications. My journey into web development started with a strong curiosity for how things work, which led me to dive deep into both front-end and back-end technologies.
          </p>
          <p>
            I have extensive experience in .NET (C#) development, building robust and scalable server-side applications. On the front-end, I am proficient in modern frameworks like Angular and skilled in bringing designs to life with HTML, CSS, and TypeScript. I also enjoy using Figma to design intuitive and visually appealing user interfaces.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm">
            {skills.map((skill) => (
              <li key={skill.name} className="flex items-center space-x-2">
                <span className="text-light-accent dark:text-accent">{skill.icon}</span>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
          <div className="absolute inset-0 bg-light-accent dark:bg-accent rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
          <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-xl">
             <img 
                src="https://picsum.photos/400/400?grayscale" 
                alt="Abdo Adel"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" 
             />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
