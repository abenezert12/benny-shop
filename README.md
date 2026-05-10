# Benny Shop

A full-stack e-commerce application built with modern web technologies. Features a responsive React frontend and a robust Node.js backend with comprehensive product management, shopping cart, and order processing capabilities.

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** - Next generation frontend tooling
- **TailwindCSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality React components
- **i18n** - Internationalization support
- **Axios** - HTTP client

### Backend
- **Node.js** with Express.js
- **TypeScript** - Type-safe backend code
- **JWT** - Authentication & authorization
- **SQL Database** - Persistent data storage
- **Docker** - Containerization support

## Project Structure

```
benny-shop/
├── frontend/
│   ├── src/
│   │   ├── components/       # React components (layout, UI)
│   │   ├── pages/           # Page components (Auth, Cart, Products, etc.)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions and helpers
│   │   ├── App.tsx          # Main app component
│   │   └── main.tsx         # Entry point
│   ├── package.json
│   ├── vite.config.ts       # Vite configuration
│   └── tsconfig.json        # TypeScript configuration
│
├── server/
│   ├── src/
│   │   ├── controllers/     # Business logic for routes
│   │   ├── routes/          # API route definitions
│   │   ├── models/          # Data models
│   │   ├── middleware/      # Express middleware
│   │   ├── config/          # Configuration files
│   │   ├── db/              # Database setup & migration
│   │   ├── types/           # TypeScript type definitions
│   │   ├── utils/           # Helper utilities
│   │   └── index.ts         # Server entry point
│   ├── package.json
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── tsconfig.json
│
├── index.html
├── package.json
└── vercel.json              # Vercel deployment config
```

## Features

- 🛍️ **Product Catalog** - Browse and search products
- 🛒 **Shopping Cart** - Add, remove, and manage cart items
- 🔐 **User Authentication** - Secure login and registration with JWT
- 📦 **Order Management** - Create and track orders
- 👤 **User Profiles** - User account management
- 🌍 **Internationalization** - Multi-language support
- 📱 **Responsive Design** - Mobile-friendly interface
- 🐳 **Docker Support** - Easy deployment and development

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd benny-shop
```

2. **Install dependencies**

Frontend:
```bash
npm install
```

Backend:
```bash
cd server
npm install
```

3. **Environment Setup**

Create `.env` file in the `server` directory with required environment variables:
```
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000
```

See [server/SETUP.md](server/SETUP.md) for detailed server configuration.

### Running the Project

#### Development Mode

**Frontend** (from root):
```bash
npm run dev
```

**Backend** (from server directory):
```bash
cd server
npm run dev
```

The frontend will be available at `http://localhost:5173`
The backend API will be available at `http://localhost:5000`

#### Using Docker

```bash
docker-compose up --build
```

See [server/QUICK-START.md](server/QUICK-START.md) for quick setup instructions.

## API Documentation

Detailed API documentation is available in [server/API.md](server/API.md)

Key endpoints:
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/products` - Get all products
- `POST /api/cart` - Manage cart items
- `POST /api/orders` - Create orders
- `GET /api/users/:id` - Get user profile

## Deployment

For production deployment instructions, see:
- [server/DEPLOYMENT.md](server/DEPLOYMENT.md) - Backend deployment guide
- [vercel.json](vercel.json) - Vercel configuration for frontend

## Project Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm run dev      # Start development server with hot reload
npm run build    # Build TypeScript
npm run start    # Start production server
npm run migrate  # Run database migrations
```

## Available Pages

- **Home** (`/`) - Landing page with featured products
- **Products** (`/products`) - Product catalog with filtering
- **Product Detail** (`/products/:id`) - Individual product details
- **Cart** (`/cart`) - Shopping cart management
- **Auth** (`/auth`) - Login and registration
- **Not Found** (`/*`) - 404 error page

## Database

The project uses SQL for data persistence. Database schema and migrations are located in [server/src/db/](server/src/db/)

To initialize the database:
```bash
npm run migrate
```

See [server/SETUP.md](server/SETUP.md) for database setup details.

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please refer to the project documentation or create an issue in the repository.

---

**Status**: In Development
**Last Updated**: May 2026
