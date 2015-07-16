'use strict'

// Create a donut shop constructor
var DonutShop = function (name, minCustHr, maxCustHr, avgDonutPC) {
  this.name       = name;
  this.minCustHr  = minCustHr;
  this.maxCustHr  = maxCustHr;
  this.avgDonutPC = avgDonutPC;
  this.render     = function() {
    var tr     = document.createElement('tr');
    var table  = document.getElementById('donut-table');
    var donArr = this.donutPerHr();
    var total  = 0;

    // If shop exists, just update
    // if(table.hasChildNodes(this.name)){
    //   var update = document.getElementById('donut-table').childNodes;
    //   update.replaceChild("this is bulllll shieat")
    // }

    // Else, append new shop name to table
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

// Return total donuts sold per hour based on 11 hours of operation
DonutShop.prototype.donutPerHr = function() {
  var avgDonutHr = [];
    for(var i = 0; i < 12; i++) {
     avgDonutHr.push(Math.floor(Math.random() * this.maxCustHr - this.minCustHr) + this.minCustHr) * this.avgDonutPC;
    }
    return avgDonutHr;
}

// Add click event listener on "Create Shop" button
var form         = document.getElementById('shop-form');
var submitButton = document.getElementById('sub');

submitButton.addEventListener('click', function() {
  // Use input values to create a new DonutShop
  var newShop = new DonutShop(
    form.elements[0].value,
    parseInt(form.elements[1].value),
    parseInt(form.elements[2].value),
    parseInt(form.elements[3].value)
  )
  // Use render function on newShop to append to the table
  newShop.render();
})

var dT = new DonutShop('Downtown', 10, 40, 1.5);
var eS = new DonutShop('East Side', 5, 30, 1);
var sE = new DonutShop('South End', 10, 60, 2);
var wS = new DonutShop('West Side', 5, 45, 1);
var aP = new DonutShop('Air Port', 15, 100, 2);

dT.render();
eS.render();
sE.render();
wS.render();
aP.render();
