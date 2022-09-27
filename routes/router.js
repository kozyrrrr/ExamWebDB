const express = require('express'),
  router = express.Router(),
  Controller = require('../controllers/controller'),
  Service = require('../services/service')

router.use(async (req, res, next) => {
  let data = await Service.getName()

  if (data) {
    req.name = data
    next()
  } else
    return res
      .status(500)
      .send({ message: 'Error while getting names' })
})

router
  .route('/')
  .get(Controller.getName)
  .post(Controller.addName)
  .put(Controller.updateName)
  .delete(Controller.deleteName)

module.exports = router