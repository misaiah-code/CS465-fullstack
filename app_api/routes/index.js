const express = require("express");
const router = express.Router();

// This is where we will import the controllers we will route
const tripsController = require("../controllers/trips");

// define routes for our trips endpoint
router
    .route('/trpis')
    .get(tripsController.tripsList); // GET Method requires tripList

// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;