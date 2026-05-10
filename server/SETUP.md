# Benny Shop Backend - Setup Guide

This guide will help you set up the backend API server for Benny Shop.

## Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **PostgreSQL** 12+ ([Download](https://www.postgresql.org/download/)) OR **Docker** & **Docker Compose**
- **Git**

## Setup Options

### Option 1: Quick Start with Docker (Recommended)

The easiest way to get started with PostgreSQL running in a container.

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.example .env

# 3. Start PostgreSQL and API with Docker Compose
docker-compose up

# 4. In a new terminal, run migrations
npm run migrate

# 5. Done! API is running at http://localhost:3000
```

### Option 2: Local PostgreSQL Setup

If you have PostgreSQL installed locally:

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.example .env

# 3. Update .env with your PostgreSQL connection
# DATABASE_URL=postgresql://your_user:your_password@localhost:5432/benny_shop

# 4. Create database
createdb benny_shop

# 5. Run migrations
npm run migrate

# 6. Start development server
npm run dev
```

## Environment Configuration

Create a `.env` file in the root directory (copy from `.env.example`):

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://benny_user:benny_password@localhost:5432/benny_shop
JWT_SECRET=your-super-secret-key-change-this
JWT_EXPIRY=7d
CORS_ORIGIN=http://localhost:5177
```

**Important**: Change `JWT_SECRET` to a strong random string for production!

## Database Setup

### Using Docker (Recommended)
```bash
docker-compose up -d
npm run migrate
```

### Using Local PostgreSQL
```bash
# Create database
createdb benny_shop

# Run migrations
npm run migrate

# Seed sample data (optional)
npm run seed
```

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## Available Commands

```bash
npm run dev          # Start dev server with hot reload
npm run build        # Build TypeScript to JavaScript
npm start            # Run production build
npm run typecheck    # Check TypeScript types
npm run lint         # Run ESLint
npm run migrate      # Run database migrations
npm run seed         # Seed sample data
```

## API Testing

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
    "password": "Password123!",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "Password123!"
  }'
```

### Get Products
```bash
curl http://localhost:3000/api/products
```

## Docker Commands

```bash
# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f api

# View PostgreSQL logs
docker-compose logs -f postgres
```

## Connecting Frontend

Update your frontend API base URL:

```typescript
// In your frontend config
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
```

## Database Schema

The backend includes:
- **Users** - User accounts with roles (admin/user)
- **Products** - E-commerce products with inventory
- **Orders** - Customer orders with status tracking
- **OrderItems** - Individual items in orders
- **CartItems** - Shopping cart management

## Default Admin Account

Username: `admin@bennyshop.com`
Password: `Admin123!`

⚠️ **Change this password in production!**

## Troubleshooting

### Database Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:5432
```
- Ensure PostgreSQL is running
- Verify `DATABASE_URL` in .env is correct
- Check PostgreSQL is listening on port 5432

### Port Already in Use
```
Error: listen EADDRINUSE :::3000
```
- Change PORT in .env to 3001 or another available port
- Or kill the process using port 3000

### Migration Failed
```bash
# Reset database (careful!)
npm run migrate
```

### Docker Issues
```bash
# Clean up all containers and volumes
docker-compose down -v

# Rebuild images
docker-compose up --build
```

## Development Tips

1. **Use TypeScript types** for better IDE support
2. **Check validation errors** in API responses
3. **View database** with:
   ```bash
   # Using psql
   psql -U benny_user -d benny_shop
   
   # Show tables
   \dt
   
   # Exit
   \q
   ```

## Performance Monitoring

The API logs slow queries (>100ms) automatically:
```
⚠️  Slow query: { text: 'SELECT ...', duration: 250, rows: 1 }
```

## Next Steps

1. ✅ Backend is running
2. 🚀 Connect your frontend at `http://localhost:3000/api`
3. 🔐 Update JWT_SECRET for production
4. 📚 Read [API Documentation](./README.md) for endpoint details
5. 🐳 Deploy with Docker when ready

## Getting Help

Check the main [README.md](./README.md) for:
- Complete API endpoint reference
- Authentication details
- Error handling information
- Deployment instructions
