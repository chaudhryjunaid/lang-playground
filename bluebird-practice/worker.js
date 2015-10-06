// File containing stubbed asynchronous functions

function asyncN(n, callback){
  setTimeout(callback, n);
};

function async1000(callback){
  asyncN(1000, callback);
};

function async3000(callback){
  asyncN(3000, callback);
};

module.exports = {
  asyncN: asyncN,
  async1000: async1000,
  async3000: async3000
};
