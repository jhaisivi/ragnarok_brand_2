import logo from "@/assets/logo-new.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 warrior-pattern opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="mb-8 animate-scale-in">
          <img 
            src={logo} 
            alt="RAGNAROK Logo" 
            className="w-48 md:w-64 lg:w-80 mx-auto drop-shadow-[0_0_30px_rgba(139,0,0,0.5)] hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase mb-6 tracking-tighter text-foreground">
          RAGNARÖK
        </h1>
        
        <p className="text-xl md:text-3xl lg:text-4xl font-bold text-primary uppercase tracking-wide mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Ropa para Guerreros
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#productos" 
            className="warrior-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(139,0,0,0.4)] hover:shadow-[0_0_30px_rgba(139,0,0,0.6)] transition-all"
          >
            Ver Productos
          </a>
          <a 
            href="#nosotros" 
            className="warrior-button bg-secondary hover:bg-secondary/80 text-foreground px-8 py-4 rounded font-bold uppercase tracking-wider border border-border hover:border-primary transition-all"
          >
            Conocer Más
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
