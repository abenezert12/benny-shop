import { Router } from 'express';
import * as userController from '../controllers/users';
import { validateUpdateProfile, validateId } from '../utils/validators';
import { verifyToken, isAdmin } from '../middleware/auth';

const router = Router();

router.get('/profile', verifyToken, userController.getProfile);
router.put('/profile', verifyToken, validateUpdateProfile(), userController.updateProfile);
router.get('/', verifyToken, isAdmin, userController.listUsers);
router.delete('/:id', verifyToken, isAdmin, validateId(), userController.deleteUser);

export default router;
