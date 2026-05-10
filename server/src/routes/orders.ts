import { Router } from 'express';
import * as orderController from '../controllers/orders';
import { validateCreateOrder, validateId } from '../utils/validators';
import { verifyToken, isAdmin } from '../middleware/auth';

const router = Router();

router.get('/', verifyToken, orderController.getOrders);
router.get('/:id', verifyToken, validateId(), orderController.getOrder);
router.post('/', verifyToken, validateCreateOrder(), orderController.createOrder);
router.put('/:id', verifyToken, isAdmin, orderController.updateOrder);
router.delete('/:id', verifyToken, validateId(), orderController.cancelOrder);

export default router;
