const R = require('ramda');
const minimist = require('minimist');

class Series {
  constructor(arr) {
    this._arr = R.clone(arr);
  }

  get arr() {
    return R.clone(this._arr);
  }

  toString(displayCount = 5) {
    return R.pipe(R.take(displayCount), R.flip(R.concat)(['...']), R.join(' + '))(this._arr);
  }
};


function logSeries(prestring, displayCount, arr) {
  let series = new Series(arr);
  let string = series.toString(displayCount);
  console.log(`= ${prestring}(${string})`);
}

function nth(n) {
  return Math.pow(-1, n) / (2 * n + 1);
}

function pi(i, displayCount) {
  return R.pipe(R.map(nth),
    R.tap(R.ifElse(() => displayCount > 0, R.partial(logSeries)(['4 * ', displayCount]), R.map(R.identity))()),
    R.map(i => 4 * i),
    R.tap(R.ifElse(() => displayCount > 0, R.partial(logSeries)(['', displayCount]), R.map(R.identity))()),
    R.sum)(R.times(R.identity, i));
}

const args = minimist(process.argv.slice(2), {
  string: [ 'places', 'show' ],
  alias: { p: 'places', s: 'show' },
  default: { places: 100000 }
});

console.log('pi');
console.log(`= ${pi(parseInt(args.places, 10), parseInt(args.show||0, 10))}`); 
console.log('bye!');
