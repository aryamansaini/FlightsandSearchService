const express= require('express');

const Citycontroller=require('../../controllers/citycontrollers');

const router= express.Router();

router.post('/city',Citycontroller.create);
router.delete('/city/:id', Citycontroller.destroy);
router.get('/city/:id', Citycontroller.get);
router.get('/city', Citycontroller.getAll);

router.patch('/city/:id', Citycontroller.update);

module.exports= router;