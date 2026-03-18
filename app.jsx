const { useState, useEffect } = React;

const GlassCard = ({ children, className = "" }) => (
  // Glassmorphism card: Translucent white bg, strong backdrop blur, subtle white border, and deep shadow.
  <div className={`bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl ${className}`}>
    {children}
  </div>
);

const Section = ({ id, bgImage, title, subtitle, children }) => (
  <section 
    id={id}
    className="relative min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover border-b border-white/10"
    style={{ backgroundImage: `url('${bgImage}')` }}
  >
    {/* Dark overlay to ensure text readability over bright images */}
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

const MenuItem = ({ item }) => (
  <div className="border-b border-white/20 pb-5 mb-5 last:border-0 last:pb-0 last:mb-0 group hover:bg-white/5 p-4 rounded-xl transition-colors cursor-default block">
    <div className="flex justify-between items-baseline mb-2">
      <h3 className="text-2xl font-semibold text-white tracking-wide group-hover:text-amber-200 transition-colors">{item.name}</h3>
      <span className="text-xl font-medium text-amber-300 ml-4 shrink-0">{item.price}</span>
    </div>
    <p className="text-gray-300 text-sm font-light leading-relaxed group-hover:text-white transition-colors">{item.description}</p>
  </div>
);

const App = () => {
  const { drinks, bakes } = window.menuData;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Using reliable high-quality Unsplash image URLs using nature/cafe keywords and fixed sizes for caching
  return (
    <div className="bg-black font-sans selection:bg-amber-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#hero" className="text-white text-2xl tracking-[0.2em] font-bold drop-shadow-md cursor-pointer hover:text-amber-200 transition-colors">AURORA</a>
          <div className="hidden md:flex space-x-10 text-white/90 font-light tracking-widest text-sm uppercase">
            <a href="#about" className="hover:text-amber-300 transition-colors py-2">About</a>
            <a href="#drinks" className="hover:text-amber-300 transition-colors py-2">Drinks</a>
            <a href="#bake" className="hover:text-amber-300 transition-colors py-2">Bake</a>
            <a href="#promotion" className="hover:text-amber-300 transition-colors py-2">Event</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section 
        id="hero" 
        bgImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
        title="AURORA CAFE"
        subtitle="Where every cup tells a story."
      >
        <GlassCard className="p-10 text-center max-w-xl mx-auto mt-8 transform transition-transform hover:scale-[1.02] duration-500">
          <p className="text-gray-100 text-xl font-light leading-relaxed mb-8">
            Experience the perfect blend of modern aesthetic and artisanal coffee. Our minimalist space is designed to help you focus, relax, and savor the moment.
          </p>
          <a href="#about" className="inline-block px-10 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all shadow-xl border border-white/40 font-semibold tracking-wide text-lg">
            Discover Our Story
          </a>
        </GlassCard>
      </Section>

      {/* About Section */}
      <Section 
        id="about" 
        bgImage="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1964&auto=format&fit=crop"
        title="Our Workshop"
        subtitle="Artisan Bakery & Roastery"
      >
        <GlassCard className="p-12 max-w-4xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-4xl text-amber-100 font-semibold mb-8">Masterfully Crafted</h3>
          <p className="text-gray-100 text-lg font-light leading-relaxed mb-6">
            Every morning, our master bakers and roasters come together to create the finest pastries and coffee. We source only the highest quality beans and ingredients, ensuring that every bite and every sip is an experience to remember.
          </p>
          <p className="text-gray-100 text-lg font-light leading-relaxed">
            Step into our glass-walled workshop and watch the magic happen right before your eyes. At Aurora, transparency is more than just an architectural choice—it's our philosophy.
          </p>
        </GlassCard>
      </Section>

      {/* Drinks Section */}
      <Section 
        id="drinks" 
        bgImage="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1975&auto=format&fit=crop"
        title="Signature Drinks"
        subtitle="Crafted with passion, poured with precision."
      >
        <GlassCard className="p-8 md:p-14 w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {drinks.map(drink => (
              <MenuItem key={drink.id} item={drink} />
            ))}
          </div>
        </GlassCard>
      </Section>

      {/* Bake Section */}
      <Section 
        id="bake" 
        bgImage="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
        title="Fresh Oven Bakes"
        subtitle="Warm, crumbly, and absolutely irresistible."
      >
        <GlassCard className="p-8 md:p-14 w-full max-w-4xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {bakes.map(bake => (
              <MenuItem key={bake.id} item={bake} />
            ))}
          </div>
        </GlassCard>
      </Section>

      {/* Location Section */}
      <Section 
        id="location" 
        bgImage="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop"
        title="Visit Us"
        subtitle="Find your new favorite spot."
      >
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          <GlassCard className="p-12 flex flex-col justify-center">
            <h3 className="text-3xl text-amber-200 font-semibold mb-8">Location</h3>
            <div className="mb-10 text-xl font-light space-y-2 text-gray-100">
              <p>123 Parallax Ave, Glassmorphism District</p>
              <p>Seoul, South Korea 01234</p>
            </div>
            
            <h3 className="text-3xl text-amber-200 font-semibold mb-8">Hours</h3>
            <div className="text-xl font-light space-y-2 text-gray-100">
              <p className="flex justify-between"><span>Mon - Fri</span> <span className="font-medium">08:00 - 22:00</span></p>
              <p className="flex justify-between"><span>Sat - Sun</span> <span className="font-medium">09:00 - 23:00</span></p>
            </div>
          </GlassCard>
          <GlassCard className="p-2 hidden md:flex items-center justify-center overflow-hidden min-h-[500px]">
             <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Cafe Exterior" className="w-full h-full object-cover rounded-2xl opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" />
          </GlassCard>
        </div>
      </Section>

      {/* Promotion Section */}
      <Section 
        id="promotion" 
        bgImage="https://images.unsplash.com/photo-1501339817309-1d416b49ecdce?q=80&w=2070&auto=format&fit=crop"
        title="Special Event"
        subtitle="Join our exclusive weekend coffee tasting."
      >
        <GlassCard className="p-12 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden group">
          <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <h3 className="text-4xl text-amber-300 font-bold tracking-widest mb-6">SUMMER ROAST FESTIVAL</h3>
          <p className="text-gray-100 text-xl font-light leading-relaxed mb-10">
            Experience our newly imported single-origin beans from Ethiopia & Colombia. Complimentary artisan pastries are included with every exclusive tasting flight booking!
          </p>
          <button className="px-12 py-5 bg-amber-500/80 hover:bg-amber-400 text-white rounded-2xl backdrop-blur-md transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] font-semibold tracking-widest uppercase border border-amber-300/50 hover:scale-105">
            Reserve Your Spot
          </button>
        </GlassCard>
      </Section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-white/10 text-center flex flex-col items-center">
        <h2 className="text-3xl text-white/80 font-bold tracking-[0.3em] mb-6">AURORA</h2>
        <p className="text-gray-500 font-light mb-2">© 2026 Aurora Cafe. All rights reserved.</p>
        <p className="text-gray-600 font-light text-sm">Designed with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
