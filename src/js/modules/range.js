// Использовалась библиотека https://refreshless.com/nouislider/

import noUiSlider from 'nouislider';

let rangeOne = document.getElementById('range-one');
let rangeTwo = document.getElementById('range-two');
let rangeThree = document.getElementById('range-three');

let rangeOneValue = document.getElementById('range-one-value');
let rangeTwoValue = document.getElementById('range-two-value');
let rangeThreeValue = document.getElementById('range-three-value');

noUiSlider.create(rangeOne, {
  start: 1200000,
  behaviour: 'snap',
  connect: [true, false],
  range: {
      'min': 0,
      'max': 15000000
  },
  format: {
    to: function (value) {
        return Math.floor(value).toLocaleString('ru');
    },
    from: function (value) {
        return Math.floor(value);
    }
}
});

noUiSlider.create(rangeTwo, {
  start: 49,
  behaviour: 'snap',
  connect: [true, false],
  range: {
      'min': 15,
      'max': 49
  },
  format: {
      to: function (value) {
        return Math.floor(value) + '%';
      },
      from: function (value) {
          return Math.floor(value);
      }
  }
});

noUiSlider.create(rangeThree, {
  start: 60,
  behaviour: 'snap',
  connect: [true, false],
  range: {
      'min': 12,
      'max': 60
  },
  format: {
      to: function (value) {
        return Math.floor(value) + ' мес.';
      },
      from: function (value) {
          return Math.floor(value);
      }
  }
});

let outputValueRange = function(range, value) {
  range.noUiSlider.on('update', function (values, handle) {
    value.innerHTML = values[handle];
  });  
}

outputValueRange(rangeOne, rangeOneValue);
outputValueRange(rangeTwo, rangeTwoValue);
outputValueRange(rangeThree, rangeThreeValue);

