const R = require('ramda');
const minimist = require('minimist');

function log(arr) {
  if ( args.verbose ) {
    console.log(`= 4 * (${arr[0]} + ${arr[1]} + ${arr[2]} + ${arr[3]} + ${arr[4]} + ${arr[5]} + ${arr[6]} + ... )`);
  }
}

function nth(n) {
  return Math.pow(-1, n) / (2 * n + 1);
}

function ithSum(i) {
  return R.pipe(R.map(nth), R.tap(log), R.sum)(R.times(R.identity, i));
}

function pi(k) {
  return 4 * ithSum(k);
}


const args = minimist(process.argv.slice(2), {
  string: [ 'places' ],
  boolean: [ 'verbose' ],
  alias: { p: 'places', v: 'verbose' },
  default: { places: 100000 }
});

console.log('pi');
console.log(`= ${pi(parseInt(args.places, 10))}`); 
console.log('bye!');
