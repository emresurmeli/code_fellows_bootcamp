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
  // create donut per hour
}

DonutShop.prototype.donutPerDay = function () {
  // create donut per day
}

var downTown = new DonutShop (10, 40, 1.5);
var eastSide = new DonutShop (5, 30, 1);
var southEnd = new DonutShop (10, 60, 2);
var westSide = new DonutShop (5, 45, 1);
var airPort = new DonutShop (15, 100, 2);
