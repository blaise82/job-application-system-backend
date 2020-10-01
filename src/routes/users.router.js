import express from 'express';
import userController from '../controllers/userController';
import validation from '../validations/user.validation';

const router = express.Router();
const {
  checkValidEmail, checkPassword
} = validation;


router.post('/signin', checkValidEmail, checkPassword, userController.signin);

export default router;
