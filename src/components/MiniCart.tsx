import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MiniCart = () => {
  const { items, removeItem, updateQuantity, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const discount = total * 0.15; // 15% discount
  const finalTotal = total - discount;

  return (
    <>
      {/* Mini Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 group"
      >
        <div className="relative">
          <div className="absolute -top-2 -right-2 bg-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold text-primary-foreground border-2 border-card">
            {items.length}
          </div>
          <div className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(139,0,0,0.5)] transition-all group-hover:scale-110">
            <ShoppingCart className="w-6 h-6" />
          </div>
        </div>
      </button>

      {/* Mini Cart Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 bg-card border-2 border-border rounded-lg shadow-[0_0_40px_rgba(139,0,0,0.3)] max-h-96 flex flex-col">
          {/* Header */}
          <div className="border-b border-border p-4 flex items-center justify-between bg-warrior-gray-dark rounded-t-lg">
            <h3 className="text-lg font-bold text-primary uppercase">Mi Carrito</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="overflow-y-auto flex-1 p-4 space-y-3">
            {items.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                Tu carrito está vacío
              </p>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-secondary/50 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      ${item.price.toFixed(2)} USD
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="bg-secondary hover:bg-primary/30 p-1 rounded transition-colors"
                    >
                      <Minus className="w-3 h-3 text-primary" />
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-foreground">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="bg-secondary hover:bg-primary/30 p-1 rounded transition-colors"
                    >
                      <Plus className="w-3 h-3 text-primary" />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-primary ml-2 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-4 space-y-3 bg-warrior-gray-dark rounded-b-lg">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)} USD</span>
                </div>
                <div className="flex justify-between text-primary font-semibold">
                  <span>Descuento (15%):</span>
                  <span>-${discount.toFixed(2)} USD</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-primary border-t border-border pt-2">
                  <span>Total:</span>
                  <span>${finalTotal.toFixed(2)} USD</span>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase">
                Proceder al Pago
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
