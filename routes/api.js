const express = require('express');
const router = express.Router();
const convertHandler = require('../controllers/convertHandler');

router.get('/api/convert', (req, res) => {
  const input = req.query.input;
  const initNum = convertHandler.getNum(input);
  const initUnit = convertHandler.getUnit(input);
  const returnUnit = convertHandler.getReturnUnit(initUnit);
  const returnNum = convertHandler.convert(initNum, initUnit);

  if (returnUnit === null) {
    res.send({ error: 'invalid unit' });
  } else if (returnNum === null) {
    res.send({ error: 'invalid number' });
  } else {
    const result = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    res.send({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: result
    });
  }
});

module.exports = router;