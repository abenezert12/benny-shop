import { Response } from 'express';
import { validationResult } from 'express-validator';
import { UserModel } from '../models/User';
import { AppError, asyncHandler } from '../middleware/errorHandler';
import { AuthRequest } from '../middleware/auth';

export const getProfile = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  const user = await UserModel.findById(req.user.userId);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  const { password, ...userWithoutPassword } = user;

  res.json({
    success: true,
    data: userWithoutPassword,
    statusCode: 200,
  });
});

export const updateProfile = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  if (!req.user) {
    throw new AppError('Unauthorized', 401);
  }

  const user = await UserModel.update(req.user.userId, req.body);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  const { password, ...userWithoutPassword } = user;

  res.json({
    success: true,
    message: 'Profile updated successfully',
    data: userWithoutPassword,
    statusCode: 200,
  });
});

export const listUsers = asyncHandler(async (req: AuthRequest, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = Math.min(parseInt(req.query.limit as string) || 10, 100);
  const offset = (page - 1) * limit;

  const result = await UserModel.list(limit, offset);

  const usersWithoutPasswords = result.users.map(({ password, ...user }) => user);

  res.json({
    success: true,
    data: {
      users: usersWithoutPasswords,
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

export const deleteUser = asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array(), statusCode: 400 });
  }

  const { id } = req.params;
  const user = await UserModel.findById(id);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  await UserModel.delete(id);

  res.json({
    success: true,
    message: 'User deleted successfully',
    statusCode: 200,
  });
});
