import { Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="relative py-20 md:py-32 px-4 bg-warrior-gray-dark">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title text-primary mb-4">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-scale-in">
          <p className="text-center text-lg text-foreground mb-8">
            Síguenos en nuestras redes sociales y mantente al día con nuestros últimos diseños
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://facebook.com/ragnarokbyrks"
              target="_blank"
              rel="noopener noreferrer"
              className="warrior-button flex items-center gap-3 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(24,119,242,0.3)] hover:shadow-[0_0_30px_rgba(24,119,242,0.5)] transition-all w-full sm:w-auto justify-center"
            >
              <Facebook className="w-6 h-6" />
              ragnarok byrks
            </a>
            
            <a
              href="https://instagram.com/ragnarok.byrks"
              target="_blank"
              rel="noopener noreferrer"
              className="warrior-button flex items-center gap-3 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(253,29,29,0.3)] hover:shadow-[0_0_30px_rgba(253,29,29,0.5)] transition-all w-full sm:w-auto justify-center"
            >
              <Instagram className="w-6 h-6" />
              @ragnarok.byrks
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
