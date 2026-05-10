# Benny Shop Backend API

Production-ready Node.js/Express backend with TypeScript, PostgreSQL, JWT authentication, and comprehensive e-commerce features.

## Features

- ✅ Express.js server with TypeScript
- ✅ PostgreSQL database with migrations
- ✅ JWT authentication & authorization
- ✅ Role-based access control (Admin, User)
- ✅ RESTful API endpoints
- ✅ Input validation & error handling
- ✅ CORS & security middleware (Helmet)
- ✅ Docker & Docker Compose support
- ✅ Environment configuration
- ✅ Complete e-commerce functionality (Products, Orders, Cart, Users)

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- Docker & Docker Compose (optional)

### Installation

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start PostgreSQL with Docker
docker-compose up -d

# Run migrations
npm run migrate

# Seed database (optional)
npm run seed

# Start development server
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh token
- `POST /api/auth/logout` - Logout user

### Products
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Orders
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get order details
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order status (Admin only)
- `DELETE /api/orders/:id` - Cancel order

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users` - List users (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/items` - Add to cart
- `PUT /api/cart/items/:id` - Update cart item
- `DELETE /api/cart/items/:id` - Remove from cart
- `POST /api/cart/checkout` - Convert cart to order

## Environment Variables

See `.env.example` for all available options:

```
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/benny_shop
JWT_SECRET=your-secret-key
JWT_EXPIRY=7d
CORS_ORIGIN=http://localhost:5177
```

## Project Structure

```
server/
├── src/
│   ├── index.ts              # Main server file
│   ├── config/               # Configuration files
│   │   ├── database.ts       # Database connection
│   │   └── env.ts            # Environment validation
│   ├── middleware/           # Express middleware
│   │   ├── auth.ts           # JWT verification
│   │   └── errorHandler.ts   # Error handling
│   ├── routes/               # API routes
│   │   ├── index.ts
│   │   ├── auth.ts
│   │   ├── products.ts
│   │   ├── orders.ts
│   │   ├── users.ts
│   │   └── cart.ts
│   ├── controllers/          # Route handlers
│   │   ├── auth.ts
│   │   ├── products.ts
│   │   ├── orders.ts
│   │   ├── users.ts
│   │   └── cart.ts
│   ├── models/               # Database models
│   │   ├── User.ts
│   │   ├── Product.ts
│   │   ├── Order.ts
│   │   ├── CartItem.ts
│   │   └── OrderItem.ts
│   ├── types/                # TypeScript types
│   │   └── index.ts
│   ├── utils/                # Helper functions
│   │   ├── validators.ts
│   │   ├── jwt.ts
│   │   └── password.ts
│   └── db/                   # Database scripts
│       ├── migrate.ts
│       └── seed.ts
├── package.json
├── tsconfig.json
├── .env.example
├── docker-compose.yml
└── README.md
```

## Development

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Build
npm run build

# Run migrations
npm run migrate

# Seed database
npm run seed
```

## Deployment

### Docker
```bash
docker build -t benny-shop-api .
docker run -p 3000:3000 --env-file .env benny-shop-api
```

### Heroku
```bash
heroku create your-app-name
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

## Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## License

MIT
