var Long = require("long")
var expect    = require("chai").expect;
var should= require("chai").should();
var util = require('util');
var bigint = require("64bigint");

describe("Long", function() {
  describe("creating long instances", function() {
    it("from string", function() {
      var l1 = Long.fromString("214748364799", true);
      expect(l1.toString()).to.equal("214748364799");
    });
    it("from hi/lo bytes", function() {
      var l1 = new Long(-1, 49, true);
      expect(l1.toString()).to.equal("214748364799");
    });
    it("buffer usage", function() {
      var b = new Buffer(8);
      b.writeUInt32BE(49,0);
      b.writeUInt32BE(4294967295, 4);
      var l = new Long(b.readUInt32BE(4), b.readUInt32BE(0));
      expect(l.toString()).to.equal("214748364799");
    });
  });
  describe("Bit operations", function() { 
    it("various ops on long", function() {
      var l = Long.fromString("214748364799", true);
      expect(l.low).to.equal(-1);
      expect(l.getLowBits()).to.equal(-1);
      expect(l.getLowBitsUnsigned()).to.equal(4294967295);
      expect(l.high).to.equal(49);
      expect(l.getHighBits()).to.equal(49);
      expect(l.getHighBitsUnsigned()).to.equal(49);
      expect(l.getNumBitsAbs()).to.equal(38);
    });
    it("foo", function() {
      var l = Long.fromString("1234567890123", true);
      expect(l.getLowBits()).to.equal(1912276171);
      expect(l.getHighBits()).to.equal(287);
   
      var b = new Buffer(8);
      b.writeUInt32BE(287, 0);
      b.writeUInt32BE(1912276171, 4);
      

      console.log(bigint.readInt64BE(b, 0)); 
    });
  });
});



