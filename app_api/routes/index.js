const express = require("express");
const router = express.Router();

// This is where we will import the controllers we will route
const tripsController = require("../controllers/trips");

// define routes for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method requires tripList
    .post(tripsController.tripsAddTrip); // POST Method adds a trip

// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;