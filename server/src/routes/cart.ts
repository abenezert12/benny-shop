import { Router } from 'express';
import * as cartController from '../controllers/cart';
import { validateId } from '../utils/validators';
import { verifyToken } from '../middleware/auth';

const router = Router();

router.get('/', verifyToken, cartController.getCart);
router.post('/items', verifyToken, cartController.addToCart);
router.put('/items/:id', verifyToken, validateId(), cartController.updateCartItem);
router.delete('/items/:id', verifyToken, validateId(), cartController.removeFromCart);
router.delete('/', verifyToken, cartController.clearCart);

export default router;
