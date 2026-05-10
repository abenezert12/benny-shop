# Benny Shop API Documentation

Complete reference for all API endpoints.

## Base URL
```
http://localhost:3000/api
```

## Authentication

Most endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Response Format

All responses follow this format:

```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "statusCode": 200
}
```

Errors:
```json
{
  "success": false,
  "message": "Error message",
  "statusCode": 400,
  "error": "Additional error info"
}
```

## Authentication Endpoints

### Register
```
POST /auth/register
```

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response:** (201 Created)
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "user"
    },
    "accessToken": "jwt_token",
    "refreshToken": "refresh_token",
    "expiresIn": 604800
  },
  "statusCode": 201
}
```

### Login
```
POST /auth/login
```

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response:** (200 OK)
```json
{
  "success": true,
  "data": {
    "user": { /* user object */ },
    "accessToken": "jwt_token",
    "refreshToken": "refresh_token",
    "expiresIn": 604800
  },
  "statusCode": 200
}
```

### Refresh Token
```
POST /auth/refresh
Authorization: Bearer <your_jwt_token>
```

**Response:** (200 OK)
```json
{
  "success": true,
  "data": {
    "accessToken": "new_jwt_token",
    "refreshToken": "new_refresh_token",
    "expiresIn": 604800
  },
  "statusCode": 200
}
```

### Logout
```
POST /auth/logout
Authorization: Bearer <your_jwt_token>
```

**Response:** (200 OK)
```json
{
  "success": true,
  "message": "Logout successful",
  "statusCode": 200
}
```

---

## User Endpoints

### Get User Profile
```
GET /users/profile
Authorization: Bearer <your_jwt_token>
```

**Response:** (200 OK)
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA",
    "role": "user",
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  },
  "statusCode": 200
}
```

### Update User Profile
```
PUT /users/profile
Authorization: Bearer <your_jwt_token>
```

**Request:**
```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "phone": "+1234567890",
  "address": "456 Oak Ave",
  "city": "Los Angeles",
  "state": "CA",
  "zipCode": "90001",
  "country": "USA"
}
```

**Response:** (200 OK)
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": { /* updated user object */ },
  "statusCode": 200
}
```

### List Users (Admin Only)
```
GET /users?page=1&limit=10
Authorization: Bearer <admin_jwt_token>
```

**Response:** (200 OK)
```json
{
  "success": true,
  "data": {
    "users": [ /* array of user objects */ ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50,
      "pages": 5
    }
  },
  "statusCode": 200
}
```

### Delete User (Admin Only)
```
DELETE /users/:id
Authorization: Bearer <admin_jwt_token>
```

**Response:** (200 OK)
```json
{
  "success": true,
  "message": "User deleted successfully",
  "statusCode": 200
}
```

---

## Product Endpoints

### Get All Products
```
GET /products?page=1&limit=10&search=headphones&category=Electronics
```

**Query Parameters:**
- `page` (optional): Page number, default 1
- `limit` (optional): Items per page, default 10, max 100
- `search` (optional): Search in name/description
- `category` (optional): Filter by category

**Response:** (200 OK)
```json
{
  "success": true,
  "data": {
    "products": [
      {
        "id": "uuid",
        "name": "Premium Wireless Headphones",
        "description": "High-quality headphones",
        "price": 99.99,
        "discountPrice": 79.99,
        "stock": 50,
        "sku": "WH-1000XM4",
        "category": "Electronics",
        "image": "https://...",
        "images": ["https://..."],
        "rating": 4.5,
        "reviewCount": 128,
        "isActive": true,
        "createdAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50,
      "pages": 5
    }
  },
  "statusCode": 200
}
```

### Get Single Product
```
GET /products/:id
```

**Response:** (200 OK)
```json
{
  "success": true,
  "data": { /* product object */ },
  "statusCode": 200
}
```

### Create Product (Admin Only)
```
POST /products
Authorization: Bearer <admin_jwt_token>
```

**Request:**
```json
{
  "name": "New Product",
  "description": "Product description",
  "price": 49.99,
  "discountPrice": 39.99,
  "stock": 100,
  "sku": "PROD-001",
  "category": "Electronics"
}
```

**Response:** (201 Created)
```json
{
  "success": true,
  "message": "Product created successfully",
  "data": { /* product object */ },
  "statusCode": 201
}
```

### Update Product (Admin Only)
```
PUT /products/:id
Authorization: Bearer <admin_jwt_token>
```

**Request:**
```json
{
  "name": "Updated Product",
  "price": 59.99,
  "stock": 150
}
```

**Response:** (200 OK)
```json
{
  "success": true,
  "message": "Product updated successfully",
  "data": { /* updated product object */ },
  "statusCode": 200
}
```

### Delete Product (Admin Only)
```
DELETE /products/:id
Authorization: Bearer <admin_jwt_token>
```

**Response:** (200 OK)
```json
{
  "success": true,
  "message": "Product deleted successfully",
  "statusCode": 200
}
```

---

## Cart Endpoints

### Get Cart
```
GET /cart
Authorization: Bearer <your_jwt_token>
```

**Response:** (200 OK)
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "uuid",
        "userId": "uuid",
        "productId": "uuid",
        "quantity": 2,
        "price": 99.99,
        "name": "Product Name",
        "addedAt": "2024-01-01T00:00:00Z"
      }
    ],
    "total": 199.98,
    "count": 1
  },
  "statusCode": 200
}
```

### Add to Cart
```
POST /cart/items
Authorization: Bearer <your_jwt_token>
```

**Request:**
```json
{
  "productId": "uuid",
  "quantity": 2
}
```

**Response:** (201 Created)
```json
{
  "success": true,
  "message": "Item added to cart",
  "data": {
    "id": "uuid",
    "userId": "uuid",
    "productId": "uuid",
    "quantity": 2,
    "addedAt": "2024-01-01T00:00:00Z"
  },
  "statusCode": 201
}
```

### Update Cart Item
```
PUT /cart/items/:id
Authorization: Bearer <your_jwt_token>
```

**Request:**
```json
{
  "quantity": 5
}
```

**Response:** (200 OK)
```json
{
  "success": true,
  "message": "Cart item updated",
  "data": { /* updated item */ },
  "statusCode": 200
}
```

### Remove from Cart
```
DELETE /cart/items/:id
Authorization: Bearer <your_jwt_token>
```

**Response:** (200 OK)
```json
{
  "success": true,
  "message": "Item removed from cart",
  "statusCode": 200
}
```

### Clear Cart
```
DELETE /cart
Authorization: Bearer <your_jwt_token>
```

**Response:** (200 OK)
```json
{
  "success": true,
  "message": "Cart cleared",
  "statusCode": 200
}
```

---

## Order Endpoints

### Get User's Orders
```
GET /orders?page=1&limit=10
Authorization: Bearer <your_jwt_token>
```

**Response:** (200 OK)
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "id": "uuid",
        "userId": "uuid",
        "status": "shipped",
        "totalAmount": 299.97,
        "discountAmount": 0,
        "taxAmount": 30.00,
        "shippingAmount": 10.00,
        "finalAmount": 339.97,
        "paymentStatus": "completed",
        "shippingAddress": "123 Main St, New York, NY 10001",
        "notes": "Please leave at door",
        "createdAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-05T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 5,
      "pages": 1
    }
  },
  "statusCode": 200
}
```

### Get Order Details
```
GET /orders/:id
Authorization: Bearer <your_jwt_token>
```

**Response:** (200 OK)
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "userId": "uuid",
    "status": "shipped",
    "totalAmount": 299.97,
    "discountAmount": 0,
    "taxAmount": 30.00,
    "shippingAmount": 10.00,
    "finalAmount": 339.97,
    "paymentStatus": "completed",
    "shippingAddress": "123 Main St",
    "createdAt": "2024-01-01T00:00:00Z",
    "items": [
      {
        "id": "uuid",
        "orderId": "uuid",
        "productId": "uuid",
        "quantity": 2,
        "price": 99.99,
        "discount": 0,
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ]
  },
  "statusCode": 200
}
```

### Create Order
```
POST /orders
Authorization: Bearer <your_jwt_token>
```

**Request:**
```json
{
  "shippingAddress": "123 Main St, New York, NY 10001",
  "discountAmount": 0,
  "items": [
    {
      "productId": "uuid",
      "quantity": 2
    }
  ]
}
```

**Response:** (201 Created)
```json
{
  "success": true,
  "message": "Order created successfully",
  "data": { /* order object */ },
  "statusCode": 201
}
```

### Update Order (Admin Only)
```
PUT /orders/:id
Authorization: Bearer <admin_jwt_token>
```

**Request:**
```json
{
  "status": "shipped",
  "paymentStatus": "completed"
}
```

**Response:** (200 OK)
```json
{
  "success": true,
  "message": "Order updated successfully",
  "data": { /* updated order object */ },
  "statusCode": 200
}
```

### Cancel Order
```
DELETE /orders/:id
Authorization: Bearer <your_jwt_token>
```

**Response:** (200 OK)
```json
{
  "success": true,
  "message": "Order cancelled successfully",
  "data": { /* updated order object with status='cancelled' */ },
  "statusCode": 200
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation failed",
  "statusCode": 400,
  "errors": [
    {
      "msg": "Email is required",
      "param": "email"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Invalid or expired token",
  "statusCode": 401
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "Forbidden: Admin access required",
  "statusCode": 403
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Product not found",
  "statusCode": 404
}
```

### 409 Conflict
```json
{
  "success": false,
  "message": "Email already registered",
  "statusCode": 409
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Internal Server Error",
  "statusCode": 500
}
```

---

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 409 | Conflict - Resource already exists |
| 500 | Server Error - Unexpected server error |

---

## Order Status Values

- `pending` - Order placed, awaiting processing
- `processing` - Order is being prepared
- `shipped` - Order has been sent
- `delivered` - Order received by customer
- `cancelled` - Order was cancelled

## Payment Status Values

- `pending` - Awaiting payment
- `completed` - Payment received
- `failed` - Payment declined
- `refunded` - Money refunded to customer

## User Roles

- `user` - Regular customer
- `admin` - Administrator with full access

---

## Rate Limiting

- Rate limit: 100 requests per 15 minutes
- Applies to all endpoints
- Rate limit headers included in responses

---

## Notes

- Passwords must be at least 8 characters
- Tokens expire in 7 days by default
- Refresh tokens expire in 30 days
- All timestamps are in ISO 8601 format
- Prices are in USD
- Pagination default limit is 10, max is 100
