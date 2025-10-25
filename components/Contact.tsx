
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <h2 className="font-mono text-light-accent dark:text-accent mb-2">03. What's Next?</h2>
      <h3 className="text-4xl lg:text-5xl font-bold text-light-heading dark:text-lightest-slate mb-4">Get In Touch</h3>
      <p className="text-lg text-light-text dark:text-light-slate mb-8">
        I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a
        href="mailto:abdo.adel.dev@gmail.com"
        className="inline-block font-mono text-lg text-light-accent dark:text-accent border border-light-accent dark:border-accent rounded px-8 py-4 hover:bg-light-accent/10 dark:hover:bg-accent/10 transition-all duration-300 ease-custom-ease"
      >
        Say Hello
      </a>
    </AnimatedSection>
  );
};

export default Contact;
