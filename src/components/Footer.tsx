const Footer = () => {
  return (
    <footer className="relative py-8 px-4 border-t border-border bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RAGNARÖK. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            Ropa para Guerreros
          </p>
        </div>
      </div>
      
      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  );
};

export default Footer;
