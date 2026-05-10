import { Response } from 'express';
import { validationResult } from 'express-validator';
import { UserModel } from '../models/User';
import { hashPassword, comparePassword } from '../utils/password';
import { generateTokens } from '../utils/jwt';
import { AppError, asyncHandler } from '../middleware/errorHandler';
import { AuthRequest } from '../middleware/auth';

export const register = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  const { email, password, firstName, lastName } = req.body;

  // Check if user already exists
  const existingUser = await UserModel.findByEmail(email);
  if (existingUser) {
    throw new AppError('Email already registered', 409);
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create user
  const user = await UserModel.create({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    role: 'user',
  });

  // Generate tokens
  const tokens = generateTokens(user.id, user.email, user.role);

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
      ...tokens,
    },
    statusCode: 201,
  });
});

export const login = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  const { email, password } = req.body;

  // Find user
  const user = await UserModel.findByEmail(email);
  if (!user) {
    throw new AppError('Invalid credentials', 401);
  }

  // Verify password
  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new AppError('Invalid credentials', 401);
  }

  // Generate tokens
  const tokens = generateTokens(user.id, user.email, user.role);

  res.json({
    success: true,
    message: 'Login successful',
    data: {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
      ...tokens,
    },
    statusCode: 200,
  });
});

export const logout = asyncHandler(async (req: AuthRequest, res: Response) => {
  res.json({
    success: true,
    message: 'Logout successful',
    statusCode: 200,
  });
});

export const refresh = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  const tokens = generateTokens(req.user.userId, req.user.email, req.user.role);

  res.json({
    success: true,
    message: 'Token refreshed',
    data: tokens,
    statusCode: 200,
  });
});
