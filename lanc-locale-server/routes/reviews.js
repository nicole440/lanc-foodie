import express from 'express';
import { addReview, getReviews, deleteReview, updateReview } from '../controllers/reviews.js';

const router = express.Router(); // initialize instance of object Router

router.get('/', getReviews);

router.post('/', addReview);

router.delete('/:id', deleteReview);

router.patch('/:id', updateReview);

export default router;