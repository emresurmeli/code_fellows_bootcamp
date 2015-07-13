'use strict'

// Create a donut shop constructor
var DonutShop = function (minCustHr, maxCustHr, avgDonutPC) {
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgDonutPC = avgDonutPC;
  this.render = function () {
    // render element for DOM
  }
}

DonutShop.prototype.donutPerHr = function () {
  return Math.floor(Math.random() * this.maxCustHr - this.minCustHr) + this.minCustHr;
}

// return total donuts sold per day based on 11 hours of operation
DonutShop.prototype.donutPerDay = function () {
  var total = 0;
  for(var i = 0; i <= 11; i++) {
    total += this.donutPerHr([i]);
  }
  return total;
}

var downTown = new DonutShop (10, 40, 1.5);
var eastSide = new DonutShop (5, 30, 1);
var southEnd = new DonutShop (10, 60, 2);
var westSide = new DonutShop (5, 45, 1);
var airPort = new DonutShop (15, 100, 2);

console.log(downTown.donutPerDay());
