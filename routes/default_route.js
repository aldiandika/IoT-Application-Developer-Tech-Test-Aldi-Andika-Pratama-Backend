
module.exports = app => {
  const Salary = require("../controller/salary_controller");
  const Sensor = require("../controller/sensor_aggregation_controller");

  let router = require('express').Router();

  // Prefix api
  app.use('/api', router);


  // Get user salary data
  router.get("/ref-data", Salary.salaryData);

  // Get sensor aggregation data
  router.get("/sensor", Sensor.sensorAgg);

}
