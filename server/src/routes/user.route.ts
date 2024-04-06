import express from 'express';
import UserController from '../controllers/UserController';
const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:email', UserController.getUserByEmail);
router.post('/', UserController.createUser);
router.put('/:email', UserController.editUserByEmail);
router.put('/password-change/:email', UserController.editUserPasswordByEmail);
router.delete('/:email', UserController.removeUserByEmail);

export default router;
