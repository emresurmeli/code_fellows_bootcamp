'use strict'

// Create a donut shop constructor
var DonutShop = function (name, minCustHr, maxCustHr, avgDonutPC) {
  this.name       = name;
  this.minCustHr  = minCustHr;
  this.maxCustHr  = maxCustHr;
  this.avgDonutPC = avgDonutPC;
  this.rander = function() {
    // make render function
  }
}

// Return total donuts sold per hour based on 11 hours of operation
DonutShop.prototype.donutPerHr = function() {
  var avgDonutHr = [];
  for(var i = 0; i < 11; i++) {
   avgDonutHr.push(Math.floor(Math.random() * this.maxCustHr - this.minCustHr) + this.minCustHr) * this.avgDonutPC;
  }
  return avgDonutHr;
}

// Return total donuts sold per day based on 11 hours of operation
DonutShop.prototype.donutPerDay = function() {
  var avgDonutHr = this.donutPerHr();
  var total = 0;
  for(var i = 0; i < avgDonutHr.length; i++) {
    total += avgDonutHr[i];
  }
  return total;
}

var dT = new DonutShop ('Downtown', 10, 40, 1.5);
var eS = new DonutShop ('East Side', 5, 30, 1);
var sE = new DonutShop ('South End', 10, 60, 2);
var wS = new DonutShop ('West Side', 5, 45, 1);
var aP = new DonutShop ('Air Port', 15, 100, 2);
