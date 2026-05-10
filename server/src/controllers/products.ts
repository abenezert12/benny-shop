import { Response } from 'express';
import { validationResult } from 'express-validator';
import { ProductModel } from '../models/Product';
import { AppError, asyncHandler } from '../middleware/errorHandler';
import { AuthRequest } from '../middleware/auth';

export const getProducts = asyncHandler(async (req: AuthRequest, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = Math.min(parseInt(req.query.limit as string) || 10, 100);
  const offset = (page - 1) * limit;
  const search = req.query.search as string;
  const category = req.query.category as string;

  let result;

  if (search) {
    result = await ProductModel.search(search, limit, offset);
  } else if (category) {
    result = await ProductModel.listByCategory(category, limit, offset);
  } else {
    result = await ProductModel.list(limit, offset);
  }

  res.json({
    success: true,
    data: {
      products: result.products,
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

export const getProduct = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  const { id } = req.params;
  const product = await ProductModel.findById(id);

  if (!product) {
    throw new AppError('Product not found', 404);
  }

  res.json({
    success: true,
    data: product,
    statusCode: 200,
  });
});

export const createProduct = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  // Check if SKU already exists
  const existingProduct = await ProductModel.findBySku(req.body.sku);
  if (existingProduct) {
    throw new AppError('Product with this SKU already exists', 409);
  }

  const product = await ProductModel.create(req.body);

  res.status(201).json({
    success: true,
    message: 'Product created successfully',
    data: product,
    statusCode: 201,
  });
});

export const updateProduct = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  const { id } = req.params;
  const product = await ProductModel.findById(id);

  if (!product) {
    throw new AppError('Product not found', 404);
  }

  // Check SKU uniqueness if being updated
  if (req.body.sku && req.body.sku !== product.sku) {
    const existingProduct = await ProductModel.findBySku(req.body.sku);
    if (existingProduct) {
      throw new AppError('Product with this SKU already exists', 409);
    }
  }

  const updatedProduct = await ProductModel.update(id, req.body);

  res.json({
    success: true,
    message: 'Product updated successfully',
    data: updatedProduct,
    statusCode: 200,
  });
});

export const deleteProduct = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  const { id } = req.params;
  const product = await ProductModel.findById(id);

  if (!product) {
    throw new AppError('Product not found', 404);
  }

  await ProductModel.delete(id);

  res.json({
    success: true,
    message: 'Product deleted successfully',
    statusCode: 200,
  });
});
