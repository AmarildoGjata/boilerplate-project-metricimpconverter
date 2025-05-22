'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res) {
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let returnNum = convertHandler.convert(initNum, initUnit);

      if (returnUnit === null) {
        res.send({ error: 'invalid unit' });
      } else if (returnNum === null) {
        res.send({ error: 'invalid number' });
      } else {
        let result = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        res.send({
          initNum: initNum,
          initUnit: initUnit,
          returnNum: returnNum,
          returnUnit: returnUnit,
          string: result
        });
      }
    });
};