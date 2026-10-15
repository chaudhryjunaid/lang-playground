const R = require('ramda');
const minimist = require('minimist');

class PrimeSeries {
  constructor() {
    this.last = 1;
  }
  *[Symbol.iterator]() {
    let iterations = 0;
    while (1) {
      this.last += 1;
      iterations += 1;
      if (this.isPrime(this.last)) {
        yield this.last;
      } else if (iterations >= 1000000) {
        break;
      }
    }
  }
  isPrime(n) {
    let isDivisible = R.curry((n, d) => {
      return n % d === 0;
    });
    let primeDivisorsOnly = R.curry((n, list) => R.not(R.any(item => item !== n && item !== 1, list)));
    return R.pipe(R.filter(isDivisible(n)), primeDivisorsOnly(n))(R.times(R.identity, n));
  }
}

const args = minimist(process.argv.slice(2), {
  string: [ 'till' ],
  alias: {t: 'till'},
  default: {t: 100}
});

try {
  let till = parseInt(args.till, 10);
  let primeSeries = new PrimeSeries();
  let array = [];
  for(let p of primeSeries) {
    if (p > till) {
      break;
    }
    array.push(p);
  }

  console.log(array.join(', '));
} catch(e) {
  console.log('Non-integer provided: ', e.message);
}
