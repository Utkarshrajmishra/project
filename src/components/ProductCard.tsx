import { ShoppingCart, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, items } = useCart();
  const cartItem = items.find(item => item.product.id === product.id);
  const isInStock = product.stock > 0;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          {product.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
            isInStock 
              ? 'bg-green-50 text-green-600' 
              : 'bg-red-50 text-red-600'
          }`}>
            {isInStock ? `${product.stock} in stock` : 'Out of stock'}
          </span>
          <button
            onClick={() => addToCart(product)}
            disabled={!isInStock || (cartItem?.quantity === product.stock)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all ${
              cartItem
                ? 'bg-green-50 text-green-600 hover:bg-green-100 shadow-sm hover:shadow-md'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300'
            } disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:shadow-none`}
          >
            {cartItem ? (
              <>
                <Check size={18} />
                <span>Added ({cartItem.quantity})</span>
              </>
            ) : (
              <>
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}