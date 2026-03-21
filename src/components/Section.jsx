import React from 'react';

const Section = ({ id, bgImage, title, subtitle, children }) => (
  <section
    id={id}
    className="relative min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover border-b border-white/10"
    style={{ backgroundImage: `url('${bgImage}')` }}
  >
    <div className="absolute inset-0 bg-black/50 transition-colors duration-500"></div>
    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center">
      {title && (
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4 tracking-tight drop-shadow-lg">{title}</h2>
          {subtitle && <p className="text-xl md:text-2xl text-gray-200 font-light drop-shadow-md">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default Section;
