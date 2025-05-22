function ConvertHandler() {
  this.getNum = function(input) {
    // Extract the number from the input string
    let num = input.match(/^(\d*\.?\d+)\/?(\d*\.?\d+)?/);
    if (num) {
      if (num[2]) {
        // Handle fractions
        return num[1] / num[2];
      } else {
        return parseFloat(num[1]);
      }
    } else {
      return 1; // Default to 1 if no number is found
    }
  };

  this.getUnit = function(input) {
    // Extract the unit from the input string
    let unit = input.match(/gal|L|lbs|kg|mi|km/);
    if (unit) {
      return unit[0];
    } else {
      return null; // Return null if no unit is found
    }
  };

  this.getReturnUnit = function(initUnit) {
    // Determine the return unit based on the initial unit
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
        return null; // Return null if the unit is not recognized
    }
  };

  this.spellOutUnit = function(unit) {
    // Spell out the unit
    switch (unit) {
      case 'gal':
        return 'gallons';
      case 'L':
        return 'liters';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';
      case 'mi':
        return 'miles';
      case 'km':
        return 'kilometers';
      default:
        return null; // Return null if the unit is not recognized
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        return null; // Return null if the unit is not recognized
    }

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;