import { Router } from 'express';
import * as productController from '../controllers/products';
import { validateCreateProduct, validateUpdateProduct, validateId } from '../utils/validators';
import { verifyToken, isAdmin } from '../middleware/auth';

const router = Router();

router.get('/', productController.getProducts);
router.get('/:id', validateId(), productController.getProduct);
router.post('/', verifyToken, isAdmin, validateCreateProduct(), productController.createProduct);
router.put('/:id', verifyToken, isAdmin, validateUpdateProduct(), productController.updateProduct);
router.delete('/:id', verifyToken, isAdmin, validateId(), productController.deleteProduct);

export default router;
