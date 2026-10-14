// File containing stubbed asynchronous functions

function asyncN(n, callback){
  setTimeout(callback, n);
};

function async100(callback){
  asyncN(100, callback);
};

function async300(callback){
  asyncN(300, callback);
};

module.exports = {
  asyncN: asyncN,
  async100: async100,
  async300: async300
};
