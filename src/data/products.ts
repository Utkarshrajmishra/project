import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Professional Camera',
    description: 'High-end mirrorless camera with 4K video capabilities',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    stock: 15,
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Designer Watch',
    description: 'Luxury automatic watch with sapphire crystal',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    stock: 25,
    category: 'Accessories'
  },
  {
    id: '3',
    name: 'Leather Backpack',
    description: 'Handcrafted full-grain leather backpack',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    stock: 40,
    category: 'Accessories'
  },
  {
    id: '4',
    name: 'Wireless Earbuds',
    description: 'Premium noise-canceling wireless earbuds',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    stock: 50,
    category: 'Electronics'
  },
  {
    id: '5',
    name: 'Smart Speaker',
    description: 'Voice-controlled smart speaker with premium sound',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=800&q=80',
    stock: 30,
    category: 'Electronics'
  },
  {
    id: '6',
    name: 'Minimalist Wallet',
    description: 'Slim RFID-blocking card holder wallet',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
    stock: 100,
    category: 'Accessories'
  }
];