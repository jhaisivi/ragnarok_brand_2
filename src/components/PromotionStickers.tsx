export const PromotionStickers = () => {
  const stickers = [
    { text: "15% OFF", position: "top-20 right-6", delay: "0s" },
    { text: "OFERTA", position: "top-40 left-8", delay: "0.5s" },
    { text: "HOY", position: "bottom-32 right-12", delay: "1s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stickers.map((sticker, index) => (
        <div
          key={index}
          className={`absolute ${sticker.position} animate-bounce pointer-events-none`}
          style={{
            animationDelay: sticker.delay,
            animationDuration: "3s",
          }}
        >
          <div className="relative">
            {/* Círculo exterior */}
            <div className="w-20 h-20 rounded-full bg-primary/20 absolute inset-0 animate-pulse" />
            
            {/* Contenedor del sticker */}
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/50 border-2 border-primary/30 hover:scale-110 transition-transform">
              {/* Stripe pattern */}
              <div className="absolute inset-0 rounded-full opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
              
              {/* Texto */}
              <div className="relative text-center">
                <p className="font-black text-white text-xs uppercase tracking-wider leading-tight">
                  {sticker.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
