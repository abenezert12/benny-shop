import { Response } from 'express';
import { validationResult } from 'express-validator';
import { OrderModel, OrderItemModel } from '../models/Order';
import { ProductModel } from '../models/Product';
import { CartItemModel } from '../models/CartItem';
import { AppError, asyncHandler } from '../middleware/errorHandler';
import { AuthRequest } from '../middleware/auth';

export const getOrders = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  const page = parseInt(req.query.page as string) || 1;
  const limit = Math.min(parseInt(req.query.limit as string) || 10, 100);
  const offset = (page - 1) * limit;

  const result = await OrderModel.findByUserId(req.user.userId, limit, offset);

  res.json({
    success: true,
    data: {
      orders: result.orders,
      pagination: {
        page,
        limit,
        total: result.total,
        pages: Math.ceil(result.total / limit),
      },
    },
    statusCode: 200,
  });
});

export const getOrder = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  const { id } = req.params;
  const order = await OrderModel.findById(id);

  if (!order) {
    throw new AppError('Order not found', 404);
  }

  // Check authorization
  if (order.userId !== req.user.userId && req.user.role !== 'admin') {
    throw new AppError('Forbidden', 403);
  }

  const items = await OrderItemModel.findByOrderId(id);

  res.json({
    success: true,
    data: { ...order, items },
    statusCode: 200,
  });
});

export const createOrder = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  const { shippingAddress, items, discountAmount = 0 } = req.body;

  // Validate items and calculate total
  let totalAmount = 0;
  for (const item of items) {
    const product = await ProductModel.findById(item.productId);
    if (!product) {
      throw new AppError(`Product ${item.productId} not found`, 404);
    }
    if (product.stock < item.quantity) {
      throw new AppError(`Insufficient stock for ${product.name}`, 400);
    }
    totalAmount += product.price * item.quantity;
  }

  // Calculate taxes and shipping
  const taxAmount = totalAmount * 0.1; // 10% tax
  const shippingAmount = totalAmount > 100 ? 0 : 10; // Free shipping over $100
  const finalAmount = totalAmount + taxAmount + shippingAmount - discountAmount;

  // Create order
  const order = await OrderModel.create({
    userId: req.user.userId,
    totalAmount,
    discountAmount,
    taxAmount,
    shippingAmount,
    finalAmount,
    shippingAddress,
  });

  // Add order items
  for (const item of items) {
    const product = await ProductModel.findById(item.productId);
    await OrderItemModel.create({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: product!.price,
    });
  }

  // Clear user's cart
  await CartItemModel.deleteByUserId(req.user.userId);

  res.status(201).json({
    success: true,
    message: 'Order created successfully',
    data: order,
    statusCode: 201,
  });
});

export const updateOrder = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  const { id } = req.params;
  const order = await OrderModel.findById(id);

  if (!order) {
    throw new AppError('Order not found', 404);
  }

  const updatedOrder = await OrderModel.update(id, req.body);

  res.json({
    success: true,
    message: 'Order updated successfully',
    data: updatedOrder,
    statusCode: 200,
  });
});

export const cancelOrder = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  const { id } = req.params;
  const order = await OrderModel.findById(id);

  if (!order) {
    throw new AppError('Order not found', 404);
  }

  // Check authorization
  if (order.userId !== req.user.userId && req.user.role !== 'admin') {
    throw new AppError('Forbidden', 403);
  }

  if (order.status !== 'pending') {
    throw new AppError('Cannot cancel non-pending order', 400);
  }

  const updatedOrder = await OrderModel.update(id, { status: 'cancelled' });

  res.json({
    success: true,
    message: 'Order cancelled successfully',
    data: updatedOrder,
    statusCode: 200,
  });
});
