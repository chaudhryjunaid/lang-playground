const R = require('ramda');
const minimist = require('minimist');

class fibonacci {
  constructor() {
    this._arr = [1, 1];
  }

  next() {
    return this._arr.push(this.secondLast + this.last);
  }

  get length() {
    return this._arr.length;
  }

  get last() {
    return this._arr[this.length - 1];
  }

  get secondLast() {
    return this._arr[this.length - 2];
  }

  nth(n) {
    while(this.length < n) {
      this.next();
    }

    return this.last;
  }

  series(n) {
    this.nth(n);
    return R.clone(this._arr);
  }
}

const args = minimist(process.argv.slice(2), {
  string: [ 'n' ],
  default: { n: 10 }
});

console.log('fibonacci: ');
console.log(`${new fibonacci().series(args.n)}`);
console.log('bye!');

