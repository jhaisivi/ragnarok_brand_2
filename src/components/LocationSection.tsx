const LocationSection = () => {
  return (
    <section id="ubicacion" className="relative py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title text-primary mb-4">
            Dónde Encontrarnos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-scale-in">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6384515684647!2d-74.06745!3d4.6533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de RAGNAROK"
              className="grayscale contrast-125 brightness-90"
            />
          </div>
          
          <div className="p-6 md:p-8 bg-secondary">
            <p className="text-center text-foreground">
              <span className="font-bold text-primary">Visítanos</span> para conocer nuestra colección completa y vivir la experiencia RAGNARÖK
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
