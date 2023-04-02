import express from 'express';
import { createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router(); // initialize instance of object Router

// sends data from the front end to the server, such as login form
router.post('/', createUser);

router.get('/:id', getUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;