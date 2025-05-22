suite('Unit Tests', function() {
  let convertHandler = new ConvertHandler();

  test('convertHandler should correctly read a whole number input', function() {
    let input = '10';
    let result = convertHandler.getNum(input);
    assert.equal(result, 10);
  });

  test('convertHandler should correctly read a decimal number input', function() {
    let input = '10.5';
    let result = convertHandler.getNum(input);
    assert.equal(result, 10.5);
  });

  test('convertHandler should correctly read a fractional input', function() {
    let input = '1/2';
    let result = convertHandler.getNum(input);
    assert.equal(result, 0.5);
  });

  test('convertHandler should correctly read a fractional input with a decimal', function() {
    let input = '1.5/2';
    let result = convertHandler.getNum(input);
    assert.equal(result, 0.75);
  });

  test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', function() {
    let input = '3/2/3';
    let result = convertHandler.getNum(input);
    assert.equal(result, null);
  });

  test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', function() {
    let input = 'gal';
    let result = convertHandler.getNum(input);
    assert.equal(result, 1);
  });

  test('convertHandler should correctly read each valid input unit', function() {
    let inputs = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
    for (let input of inputs) {
      let result = convertHandler.getUnit(input);
      assert.notEqual(result, null);
    }
  });

  test('convertHandler should correctly return an error for an invalid input unit', function() {
    let input = 'invalid';
    let result = convertHandler.getUnit(input);
    assert.equal(result, null);
  });

  test('convertHandler should return the correct return unit for each valid input unit', function() {
    let inputs = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
    let expectedOutputs = ['L', 'gal', 'kg', 'lbs', 'km', 'mi'];
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let result = convertHandler.getReturnUnit(input);
      assert.equal(result, expectedOutputs[i]);
    }
  });

  test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function() {
    let inputs = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
    let expectedOutputs = ['gallons', 'liters', 'pounds', 'kilograms', 'miles', 'kilometers'];
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let result = convertHandler.spellOutUnit(input);
      assert.equal(result, expectedOutputs[i]);
    }
  });

  test('convertHandler should correctly convert gal to L', function() {
    let input = '10gal';
    let result = convertHandler.convert(10, 'gal');
    assert.approximately(result, 37.8541, 0.0001);
  });

  test('convertHandler should correctly convert L to gal', function() {
    let input = '10L';
    let result = convertHandler.convert(10, 'L');
    assert.approximately(result, 2.64172, 0.0001);
  });

  test('convertHandler should correctly convert mi to km', function() {
    let input = '10mi';
    let result = convertHandler.convert(10, 'mi');
    assert.approximately(result, 16.0934, 0.0001);
  });

  test('convertHandler should correctly convert km to mi', function() {
    let input = '10km';
    let result = convertHandler.convert(10, 'km');
    assert.approximately(result, 6.21371, 0.0001);
  });

  test('convertHandler should correctly convert lbs to kg', function() {
    let input = '10lbs';
    let result = convertHandler.convert(10, 'lbs');
    assert.approximately(result, 4.53592, 0.0001);
  });

  test('convertHandler should correctly convert kg to lbs', function() {
    let input = '10kg';
    let result = convertHandler.convert(10, 'kg');
    assert.approximately(result, 22.0462, 0.0001);
  });
});