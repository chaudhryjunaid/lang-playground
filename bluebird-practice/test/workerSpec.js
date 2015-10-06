var chai = require('chai'),
  expect = chai.expect,
  chalk = require('chalk');

chai.should();

var worker = require('../lib/worker');

describe('worker module', function(){
  it('should have asyncN, async1000 and async3000', function(){
    worker.asyncN.should.exist.and.be.a('function');
    worker.async100.should.exist.and.be.a('function');
    worker.async300.should.exist.and.be.a('function');
  });

  describe('asyncN function', function(){
    it('should wait N milliseconds', function(done){
      var start = new Date().getTime();
      worker.asyncN(500,function(){
        console.log(chalk.yellow('Testing asyncN with 500ms...'));
        var diff = new Date().getTime() - start;
        diff.should.be.least(500).and.most(800);
        done();
      });
    });

    it('should wait 100 milliseconds', function(done){
      var start = new Date().getTime();
      worker.async100(function(){
        console.log(chalk.yellow('Testing asyncN with 100ms...'));
        var diff = new Date().getTime() - start;
        diff.should.be.least(100).and.most(200);
        done();
      });
    });

    it('should wait 300 milliseconds', function(done){
      var start = new Date().getTime();
      worker.async300(function(){
        console.log(chalk.yellow('Testing asyncN with 300ms...'));
        var diff = new Date().getTime() - start;
        diff.should.be.least(300).and.most(500);
        done();
      });
    });
  });
});
