# 🚀 Benny Shop Backend - Quick Start

## What's Included

✅ **Express.js server** with TypeScript  
✅ **PostgreSQL database** with complete schema  
✅ **JWT authentication** with refresh tokens  
✅ **Role-based access control** (Admin/User)  
✅ **Complete CRUD API** for:
  - Users (registration, profile, admin management)
  - Products (catalog with search/filtering)
  - Orders (creation, tracking, cancellation)
  - Shopping Cart (add/remove/checkout)

✅ **Security features**:
  - Password hashing (bcrypt)
  - Input validation
  - CORS protection
  - Security headers (Helmet)
  - Error handling

✅ **Developer experience**:
  - TypeScript for type safety
  - Docker & Docker Compose
  - ESLint configuration
  - Development hot reload
  - Comprehensive documentation

✅ **Production ready**:
  - Environment configuration
  - Database migrations
  - Error logging
  - Performance monitoring
  - Deployment guides

## Quick Start (30 seconds)

```bash
# 1. Install dependencies
npm install

# 2. Start PostgreSQL
docker-compose up -d

# 3. Run migrations
npm run migrate

# 4. Start server
npm run dev
```

✨ **API running at** `http://localhost:3000`

## File Structure

```
server/
├── src/
│   ├── index.ts              # Main server
│   ├── config/               # Configuration
│   ├── middleware/           # Auth, error handling
│   ├── routes/               # API routes
│   ├── controllers/          # Business logic
│   ├── models/               # Database queries
│   ├── types/                # TypeScript types
│   ├── utils/                # Helpers, validators
│   └── db/                   # Migrations, seeds
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── docker-compose.yml        # Docker setup
├── Dockerfile                # Production image
├── README.md                 # Full documentation
├── SETUP.md                  # Setup guide
├── API.md                    # API reference
└── DEPLOYMENT.md             # Deployment guide
```

## Key Features

### 🔐 Authentication
- Register with email/password
- Login and get JWT tokens
- Refresh tokens
- Admin role support

### 📦 Products
- Browse all products
- Search and filter by category
- Admin can create/update/delete
- Stock management

### 🛒 Shopping Cart
- Add/remove items
- Update quantities
- Get cart summary
- Checkout to order

### 📋 Orders
- Create orders from cart
- Track order status
- View order history
- Cancel pending orders (admin)

### 👤 User Management
- Create and manage users
- Update profile
- Admin can manage all users
- Role-based access control

## API Endpoints

**Auth:**
- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `POST /api/auth/refresh` - Refresh token
- `POST /api/auth/logout` - Logout

**Products:**
- `GET /api/products` - List products
- `GET /api/products/:id` - Get one
- `POST /api/products` - Create (admin)
- `PUT /api/products/:id` - Update (admin)
- `DELETE /api/products/:id` - Delete (admin)

**Cart:**
- `GET /api/cart` - Get cart
- `POST /api/cart/items` - Add item
- `PUT /api/cart/items/:id` - Update item
- `DELETE /api/cart/items/:id` - Remove item

**Orders:**
- `GET /api/orders` - List orders
- `GET /api/orders/:id` - Get order
- `POST /api/orders` - Create order
- `PUT /api/orders/:id` - Update (admin)
- `DELETE /api/orders/:id` - Cancel

**Users:**
- `GET /api/users/profile` - Get profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users` - List users (admin)
- `DELETE /api/users/:id` - Delete user (admin)

## Available Commands

```bash
npm run dev        # Start dev server (hot reload)
npm run build      # Build TypeScript
npm start          # Run production
npm run typecheck  # Type check
npm run lint       # ESLint
npm run migrate    # Run migrations
npm run seed       # Seed sample data
```

## Environment Variables

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/benny_shop
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:5177
```

See `.env.example` for all options.

## Sample Data

Admin account (auto-created):
- Email: `admin@bennyshop.com`
- Password: `Admin123!`

Sample products (auto-created):
- Premium Wireless Headphones
- Ultra-Slim Laptop
- Ergonomic Office Chair
- Mechanical Keyboard
- 4K USB-C Monitor

## Testing

### Health Check
```bash
curl http://localhost:3000/health
```

### Register User
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "Test123!",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

### Get Products
```bash
curl http://localhost:3000/api/products
```

See [API.md](./API.md) for complete endpoint documentation.

## Docker Usage

```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f api

# Stop
docker-compose down

# Remove volumes (careful!)
docker-compose down -v
```

## Database Management

```bash
# Connect to database
psql postgresql://benny_user:benny_password@localhost:5432/benny_shop

# View tables
\dt

# Exit
\q

# Backup
pg_dump $DATABASE_URL > backup.sql

# Restore
psql $DATABASE_URL < backup.sql
```

## Connecting Frontend

Update your frontend to use:
```
API_BASE_URL = http://localhost:3000/api
```

And include Authorization header with JWT token:
```
Authorization: Bearer <token>
```

## Deployment

Quick deploy options:
- **Heroku**: See [DEPLOYMENT.md](./DEPLOYMENT.md#heroku-deployment)
- **Docker**: See [DEPLOYMENT.md](./DEPLOYMENT.md#docker-deployment)
- **AWS EC2**: See [DEPLOYMENT.md](./DEPLOYMENT.md#aws-ec2-deployment)
- **Railway**: See [DEPLOYMENT.md](./DEPLOYMENT.md#railway-deployment)
- **DigitalOcean**: See [DEPLOYMENT.md](./DEPLOYMENT.md#digitalocean-app-platform)

## Documentation

- 📖 [Complete README](./README.md) - Full overview
- 🚀 [Setup Guide](./SETUP.md) - Installation & running
- 📚 [API Reference](./API.md) - All endpoints
- 🌐 [Deployment Guide](./DEPLOYMENT.md) - Production deployment

## Troubleshooting

**Port already in use?**
```bash
# Change PORT in .env to 3001
```

**Database connection error?**
```bash
# Start PostgreSQL with Docker
docker-compose up -d

# Or verify local PostgreSQL is running
```

**Module not found?**
```bash
npm install
```

**TypeScript errors?**
```bash
npm run typecheck
```

See SETUP.md for more troubleshooting tips.

## What's Next?

1. ✅ **Backend is ready** - All endpoints working
2. 🔗 **Connect frontend** - Use API_BASE_URL
3. 🔐 **Change JWT_SECRET** - For production
4. 📊 **Add monitoring** - Sentry, CloudWatch
5. 🚀 **Deploy** - Heroku, Docker, or AWS

## Tech Stack

- **Runtime**: Node.js 18+
- **Language**: TypeScript
- **Server**: Express.js
- **Database**: PostgreSQL
- **Auth**: JWT
- **Password**: bcryptjs
- **Validation**: express-validator
- **Security**: Helmet
- **CORS**: cors

## License

MIT

---

**Need help?** Check the docs or submit an issue! 💪
