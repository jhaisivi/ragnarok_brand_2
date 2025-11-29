import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";
import product5 from "@/assets/product5.jpg";
import product6 from "@/assets/product6.jpg";

const products = [
  { id: 1, image: product1, name: "Sorcerer Killer", description: "Diseño exclusivo con arte japonés y cadenas", price: 45.99 },
  { id: 2, image: product2, name: "Baki Design", description: "Inspirado en el anime con detalles únicos", price: 45.99 },
  { id: 3, image: product3, name: "Gumball Collection", description: "Estilo cartoon con colores vibrantes", price: 45.99 },
  { id: 4, image: product4, name: "Chain Warrior", description: "Diseño minimalista en beige", price: 45.99 },
  { id: 5, image: product5, name: "Dragon Edition", description: "Arte de dragón con caligrafía oriental", price: 45.99 },
  { id: 6, image: product6, name: "Dragon Ball Z", description: "Colaboración especial de personajes", price: 45.99 },
];

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const { addItem } = useCart();
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addItem(product.id, product.name, product.price);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 1500);
  };

  return (
    <section id="productos" className="relative py-20 md:py-32 px-4 bg-warrior-gray-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title text-primary mb-4">
            Conoce Nuestros Productos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="min-w-full px-4">
                  <div className="relative group">
                    <div className="aspect-square overflow-hidden rounded-lg border-2 border-border shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%]">
                      <Button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full warrior-button bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(139,0,0,0.4)]"
                      >
                        Detalles
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            onClick={prevSlide}
            variant="secondary"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full w-12 h-12 bg-secondary/80 hover:bg-primary border border-border shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="secondary"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full w-12 h-12 bg-secondary/80 hover:bg-primary border border-border shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary uppercase">
              {selectedProduct?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-square rounded-lg overflow-hidden border border-border">
              <img
                src={selectedProduct?.image}
                alt={selectedProduct?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-foreground leading-relaxed">
                {selectedProduct?.description}
              </p>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Material:</span> 100% Algodón Premium
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Tallas:</span> S, M, L, XL, XXL
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Cuidado:</span> Lavado a máquina en frío
                </p>
              </div>
              {/* Price Section */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/50 rounded-lg p-4 mt-4">
                <p className="text-sm text-muted-foreground mb-1">Precio:</p>
                <p className="text-3xl font-black text-primary">
                  ${selectedProduct?.price.toFixed(2)} USD
                </p>
              </div>
              {/* Buy Button */}
              <Button
                onClick={() => {
                  if (selectedProduct) {
                    handleAddToCart(selectedProduct);
                  }
                }}
                className={`w-full py-6 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  addedToCart === selectedProduct?.id
                    ? "bg-green-600 hover:bg-green-600"
                    : "bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(139,0,0,0.4)]"
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {addedToCart === selectedProduct?.id ? "¡Añadido!" : "Comprar"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsSection;
