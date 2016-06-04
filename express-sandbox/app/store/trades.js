"use strict";

var TradeRepo = {
  trades: [],
  subscribers: [],
  add: function(t) {
    trades.push(t);
  },
  get: function() {
    return trades;
  }

}
module.exports={
  
};
