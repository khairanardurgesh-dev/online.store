export interface User {
  _id: string;
  name: string;
  email: string;
  password?: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  fileUrl?: string;
  fileName?: string;
  features: string[];
  category: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  _id: string;
  userId: string;
  productId: string;
  amount: number;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
  product?: Product;
  user?: User;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
