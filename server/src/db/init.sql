-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  avatar VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  zipCode VARCHAR(20),
  country VARCHAR(100),
  role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  isActive BOOLEAN DEFAULT true,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  discountPrice DECIMAL(10, 2),
  stock INTEGER NOT NULL DEFAULT 0,
  sku VARCHAR(100) UNIQUE NOT NULL,
  category VARCHAR(100) NOT NULL,
  image VARCHAR(255),
  images TEXT[],
  rating DECIMAL(3, 2) DEFAULT 0,
  reviewCount INTEGER DEFAULT 0,
  isActive BOOLEAN DEFAULT true,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY,
  userId UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
  totalAmount DECIMAL(12, 2) NOT NULL,
  discountAmount DECIMAL(12, 2) DEFAULT 0,
  taxAmount DECIMAL(12, 2) DEFAULT 0,
  shippingAmount DECIMAL(12, 2) DEFAULT 0,
  finalAmount DECIMAL(12, 2) NOT NULL,
  paymentStatus VARCHAR(50) DEFAULT 'pending' CHECK (paymentStatus IN ('pending', 'completed', 'failed', 'refunded')),
  shippingAddress TEXT NOT NULL,
  notes TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Items table
CREATE TABLE IF NOT EXISTS orderItems (
  id UUID PRIMARY KEY,
  orderId UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  productId UUID NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  discount DECIMAL(10, 2),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cart Items table
CREATE TABLE IF NOT EXISTS cartItems (
  id UUID PRIMARY KEY,
  userId UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  productId UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  addedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_orders_userId ON orders(userId);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orderItems_orderId ON orderItems(orderId);
CREATE INDEX idx_cartItems_userId ON cartItems(userId);
CREATE INDEX idx_cartItems_productId ON cartItems(productId);

-- Create sample admin user (password: Admin123!)
INSERT INTO users (id, email, password, firstName, lastName, role, isActive, createdAt, updatedAt)
VALUES (
  'admin-001',
  'admin@bennyshop.com',
  '$2a$10$9nQTaRZ.ZzBXzOPrS6Wh.ORu.WGSjv6/eFb5fSzxVjJN1JRVbvv1K', -- bcrypt hash of Admin123!
  'Admin',
  'User',
  'admin',
  true,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
) ON CONFLICT DO NOTHING;

-- Create sample products
INSERT INTO products (id, name, description, price, stock, sku, category, isActive, rating, reviewCount, createdAt, updatedAt)
VALUES 
  ('prod-001', 'Premium Wireless Headphones', 'High-quality wireless headphones with noise cancellation', 99.99, 50, 'WH-1000XM4', 'Electronics', true, 4.5, 128, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('prod-002', 'Ultra-Slim Laptop', '13.3 inch FHD display, Intel Core i7, 512GB SSD', 899.99, 30, 'LAPTOP-ULX2', 'Electronics', true, 4.7, 89, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('prod-003', 'Ergonomic Office Chair', 'Comfortable chair with lumbar support', 299.99, 20, 'CHAIR-ERGO', 'Furniture', true, 4.2, 45, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('prod-004', 'Mechanical Keyboard', 'RGB backlit mechanical keyboard with Cherry MX switches', 159.99, 40, 'KB-MECH-RGB', 'Electronics', true, 4.6, 102, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('prod-005', '4K USB-C Monitor', '27 inch 4K display with USB-C connectivity', 699.99, 15, 'MON-4K-27', 'Electronics', true, 4.4, 67, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;
