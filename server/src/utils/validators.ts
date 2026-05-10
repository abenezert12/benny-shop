import { body, param, query, ValidationChain } from 'express-validator';

// User validation
export const validateRegister = (): ValidationChain[] => [
  body('email').isEmail().normalizeEmail(),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters'),
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
];

export const validateLogin = (): ValidationChain[] => [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty().withMessage('Password is required'),
];

export const validateUpdateProfile = (): ValidationChain[] => [
  body('firstName').optional().trim().notEmpty(),
  body('lastName').optional().trim().notEmpty(),
  body('phone').optional().isMobilePhone(),
  body('address').optional().trim(),
  body('city').optional().trim(),
  body('state').optional().trim(),
  body('zipCode').optional().trim(),
  body('country').optional().trim(),
];

// Product validation
export const validateCreateProduct = (): ValidationChain[] => [
  body('name').trim().notEmpty().withMessage('Product name is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be greater than 0'),
  body('stock').isInt({ min: 0 }).withMessage('Stock must be a positive integer'),
  body('sku').trim().notEmpty().withMessage('SKU is required'),
  body('category').trim().notEmpty().withMessage('Category is required'),
];

export const validateUpdateProduct = (): ValidationChain[] => [
  body('name').optional().trim().notEmpty(),
  body('description').optional().trim().notEmpty(),
  body('price').optional().isFloat({ min: 0 }),
  body('stock').optional().isInt({ min: 0 }),
  body('sku').optional().trim().notEmpty(),
  body('category').optional().trim().notEmpty(),
];

// Order validation
export const validateCreateOrder = (): ValidationChain[] => [
  body('shippingAddress').trim().notEmpty().withMessage('Shipping address is required'),
  body('items').isArray({ min: 1 }).withMessage('At least one item is required'),
  body('items.*.productId').trim().notEmpty(),
  body('items.*.quantity').isInt({ min: 1 }),
];

// Pagination validation
export const validatePagination = (): ValidationChain[] => [
  query('page').optional().isInt({ min: 1 }).toInt(),
  query('limit').optional().isInt({ min: 1, max: 100 }).toInt(),
  query('sort').optional().trim(),
  query('order').optional().isIn(['asc', 'desc']),
];

// ID validation
export const validateId = (): ValidationChain[] => [
  param('id').trim().notEmpty().withMessage('ID is required'),
];
