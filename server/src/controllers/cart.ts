import { Response } from 'express';
import { validationResult } from 'express-validator';
import { CartItemModel } from '../models/CartItem';
import { ProductModel } from '../models/Product';
import { AppError, asyncHandler } from '../middleware/errorHandler';
import { AuthRequest } from '../middleware/auth';

export const getCart = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  const cartSummary = await CartItemModel.getCartSummary(req.user.userId);

  res.json({
    success: true,
    data: cartSummary,
    statusCode: 200,
  });
});

export const addToCart = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  const { productId, quantity } = req.body;

  // Verify product exists
  const product = await ProductModel.findById(productId);
  if (!product) {
    throw new AppError('Product not found', 404);
  }

  if (product.stock < quantity) {
    throw new AppError('Insufficient stock', 400);
  }

  // Check if item already in cart
  const existingItem = await CartItemModel.findByUserAndProduct(req.user.userId, productId);

  let cartItem;
  if (existingItem) {
    cartItem = await CartItemModel.update(
      existingItem.id,
      existingItem.quantity + quantity
    );
  } else {
    cartItem = await CartItemModel.create({
      userId: req.user.userId,
      productId,
      quantity,
    });
  }

  res.status(201).json({
    success: true,
    message: 'Item added to cart',
    data: cartItem,
    statusCode: 201,
  });
});

export const updateCartItem = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  const { id } = req.params;
  const { quantity } = req.body;

  if (quantity < 1) {
    throw new AppError('Quantity must be at least 1', 400);
  }

  const cartItem = await CartItemModel.findById(id);
  if (!cartItem) {
    throw new AppError('Cart item not found', 404);
  }

  // Check authorization
  if (cartItem.userId !== req.user.userId) {
    throw new AppError('Forbidden', 403);
  }

  // Verify stock
  const product = await ProductModel.findById(cartItem.productId);
  if (product && product.stock < quantity) {
    throw new AppError('Insufficient stock', 400);
  }

  const updatedItem = await CartItemModel.update(id, quantity);

  res.json({
    success: true,
    message: 'Cart item updated',
    data: updatedItem,
    statusCode: 200,
  });
});

export const removeFromCart = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  const { id } = req.params;

  const cartItem = await CartItemModel.findById(id);
  if (!cartItem) {
    throw new AppError('Cart item not found', 404);
  }

  // Check authorization
  if (cartItem.userId !== req.user.userId) {
    throw new AppError('Forbidden', 403);
  }

  await CartItemModel.delete(id);

  res.json({
    success: true,
    message: 'Item removed from cart',
    statusCode: 200,
  });
});

export const clearCart = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  await CartItemModel.deleteByUserId(req.user.userId);

  res.json({
    success: true,
    message: 'Cart cleared',
    statusCode: 200,
  });
});
