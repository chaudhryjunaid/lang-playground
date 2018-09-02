const R = require('ramda');
const minimist = require('minimist');

class integer {
  constructor(n) {
    if (R.not(R.and(R.is(Number, n), Number.isInteger(n)))) {
      throw new Error('Supplied value is not an integer');
    }
    this._n = n;
  }

  factors() {
    return R.filter(i => this._n % i === 0)(R.times(R.identity, this._n + 1));
  }

  multipliers(k) {
    return R.takeLast(k, R.times(i => this._n * i, k + 1));
  }

  get value() {
    return this._n;
  }
}


const args = minimist(process.argv.slice(2), {
  string: [ 'num', 'times' ],
  alias: {n: 'num', k: 'times'},
  default: { n: 13, k: 20 }
});

try {
  let n = new integer(parseInt(args.num, 10));
  console.log(`integer value: ${n.value}`);
  console.log(`factors: ${n.factors()}`);
  console.log(`multipliers: ${n.multipliers(parseInt(args.times, 10))}`);
} catch(e) {
  console.log('Non-integer provided: ', e.message);
} finally {
  console.log('bye!');
}
