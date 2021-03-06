'use strict'

// Create a donut shop constructor
var DonutShop = function (name, minCustHr, maxCustHr, avgDonutPC) {
  this.name       = name;
  this.minCustHr  = minCustHr;
  this.maxCustHr  = maxCustHr;
  this.avgDonutPC = avgDonutPC;
}

DonutShop.prototype.renderToDOM = function() {
  var tr     = document.createElement('tr');
  var table  = document.getElementById('donut-table');
  var donArr = this.donutPerHr();
  var total  = 0;

  // If shop exists, just update
  if(document.getElementById(this.name)) {
    var updt = document.getElementById(this.name).childNodes;

    for(var i = 1; i < updt.length - 1; i++) {
      updt[i].innerHTML = donArr[i - 1];
      total += donArr[i - 1];
    }
    updt[updt.length - 1].innerHTML = total;

  // Else, append new shop name to table
  } else {
    tr.id = this.name;
    tr.innerHTML = this.name;
    table.appendChild(tr);

    // Append hourly donut count to table
    for(var i = 0; i < donArr.length; i++) {
      var td = document.createElement('td');
        td.innerHTML = donArr[i];
        tr.appendChild(td);
        total += donArr[i];
    }

    // Append total count to table
    var totD = document.createElement('td');
      totD.innerHTML = total;
      tr.appendChild(totD);
  }
}

DonutShop.prototype.donutPerHr = function() {
  var avgDonutHr = [];
    for(var i = 0; i < 12; i++) {
      avgDonutHr.push(Math.floor((Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr) * this.avgDonutPC));
    }
  return avgDonutHr;
}

// Add click event on "Create Shop" button
var form   = document.getElementById('shop-form');
var sbmBtn = document.getElementById('sub');

sbmBtn.addEventListener('click', function() {
  // Use input values to create a new DonutShop and render to DOM
  var newShop = new DonutShop(
    form.elements[0].value,
    parseInt(form.elements[1].value),
    parseInt(form.elements[2].value),
    parseInt(form.elements[3].value)
  ).renderToDOM();
})

var dT = new DonutShop('Downtown', 10, 40, 1.5).renderToDOM();
var eS = new DonutShop('East Side', 5, 30, 1).renderToDOM();
var sE = new DonutShop('South End', 10, 60, 2).renderToDOM();
var wS = new DonutShop('West Side', 5, 45, 1).renderToDOM();
var aP = new DonutShop('Air Port', 15, 100, 2).renderToDOM();
