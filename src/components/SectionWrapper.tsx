
import React from 'react';

interface SectionWrapperProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, subtitle, children, className, titleClassName, subtitleClassName }) => {
  return (
    <section className={`py-12 md:py-16 ${className || ''}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 text-mukesa-blue ${titleClassName || ''}`}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className={`text-lg text-center text-mukesa-text-muted mb-8 md:mb-12 max-w-2xl mx-auto ${subtitleClassName || ''}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;