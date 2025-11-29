import ragnak from "@/assets/ragnak-character.png";

const AboutSection = () => {
  return (
    <section id="nosotros" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 warrior-pattern opacity-20" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title text-primary mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-scale-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              En <span className="text-primary font-bold">RAGNARÖK</span>, nos enorgullece ofrecer productos de alta calidad y también enraizar una conexión emocional con nuestra audiencia. Nuestra marca se fundamenta en la pasión por la innovación, la autenticidad y con la excelencia en cada detalle.
            </p>
          </div>
          
          <div className="flex justify-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img 
                src={ragnak} 
                alt="Ragnak - Mascota de RAGNARÖK" 
                className="w-64 md:w-80 drop-shadow-[0_0_30px_rgba(139,0,0,0.6)] hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 px-6 py-2 rounded-full">
                <p className="text-primary-foreground font-bold uppercase text-sm tracking-wider">Ragnak</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-lg bg-secondary border border-border hover:border-primary transition-all">
              <h3 className="text-xl font-bold text-primary mb-2 uppercase">Calidad</h3>
              <p className="text-sm text-muted-foreground">Materiales premium en cada prenda</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-secondary border border-border hover:border-primary transition-all">
              <h3 className="text-xl font-bold text-primary mb-2 uppercase">Innovación</h3>
              <p className="text-sm text-muted-foreground">Diseños únicos y originales</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-secondary border border-border hover:border-primary transition-all">
              <h3 className="text-xl font-bold text-primary mb-2 uppercase">Autenticidad</h3>
              <p className="text-sm text-muted-foreground">Estilo genuino para guerreros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
