import { Router } from 'express';
import * as authController from '../controllers/auth';
import { validateRegister, validateLogin } from '../utils/validators';
import { verifyToken } from '../middleware/auth';

const router = Router();

router.post('/register', validateRegister(), authController.register);
router.post('/login', validateLogin(), authController.login);
router.post('/refresh', verifyToken, authController.refresh);
router.post('/logout', verifyToken, authController.logout);

export default router;
