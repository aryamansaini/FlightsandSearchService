const express= require('express');

const { FlightMiddlewares } = require('../../middlewares/index');

const Citycontroller=require('../../controllers/citycontrollers');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');


const router= express.Router();

router.post('/city',Citycontroller.create);
router.delete('/city/:id', Citycontroller.destroy);
router.get('/city/:id', Citycontroller.get);
router.get('/city', Citycontroller.getAll);
router.post(
    '/flights', 
    FlightMiddlewares.validateCreateFlight, 
    FlightController.create
);
router.get('/flights', FlightController.getAll);
router.post('/airports', AirportController.create);


router.patch('/city/:id', Citycontroller.update);

module.exports= router;