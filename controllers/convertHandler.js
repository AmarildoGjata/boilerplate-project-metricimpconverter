const convertHandler = {
  getNum: function(input) {
    let num = input.match(/^(\d*\.?\d+)\/?(\d*)/);
    if (num) {
      let whole = num[1];
      let fraction = num[2];
      if (whole && fraction) {
        return parseFloat(whole) / parseFloat(fraction);
      } else if (whole) {
        return parseFloat(whole);
      } else if (fraction) {
        return 1 / parseFloat(fraction);
      }
    }
    return 1;
  },

  getUnit: function(input) {
    let unit = input.match(/[a-zA-Z]+/);
    if (unit) {
      return unit[0].toLowerCase();
    }
    return null;
  },

  getReturnUnit: function(initUnit) {
    switch (initUnit) {
      case 'gal':
        return 'L';
      case 'L':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      default:
        return null;
    }
  },

  convert: function(initNum, initUnit) {
    switch (initUnit) {
      case 'gal':
        return initNum * 3.78541;
      case 'L':
        return initNum / 3.78541;
      case 'lbs':
        return initNum * 0.453592;
      case 'kg':
        return initNum / 0.453592;
      case 'mi':
        return initNum * 1.60934;
      case 'km':
        return initNum / 1.60934;
      default:
        return null;
    }
  },

  getString: function(initNum, initUnit, returnNum, returnUnit) {
    let initUnitString = initUnit === 'L' ? 'L' : initUnit;
    let returnUnitString = returnUnit === 'L' ? 'L' : returnUnit;
    return `${initNum} ${initUnitString} converts to ${returnNum.toFixed(5)} ${returnUnitString}`;
  }
};

module.exports = convertHandler;