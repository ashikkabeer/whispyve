import { Router } from 'express';
import authController from '../controllers/auth.controller';

const router = Router();

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);

export default router;