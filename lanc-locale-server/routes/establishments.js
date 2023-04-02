import express from 'express';
import { getAllEstablishments, getEstablishmentByName, getEstablishmentByCity, getEstablishmentBySeating, getEstablishmentByType } from '../controllers/establishments.js';

const router = express.Router(); // initialize instance of object Router

// all routes here are starting with /establishments
router.get('/', getAllEstablishments);

router.get('/:name', getEstablishmentByName);

router.get('/:city', getEstablishmentByCity);

router.get('/:outdoor-seating', getEstablishmentBySeating);

router.get('/:type', getEstablishmentByType);

export default router;