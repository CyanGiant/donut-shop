var Shops = function(locationName, options) {
  this.locationName = locationName;
    if (!(options.minCust && options.maxCust && options.averageDonuts)) {
      throw "You need min, max and average donuts";
    }
  this.minCust       = options.minCust;
  this.maxCust       = options.maxCust;
  this.averageDonuts = options.averageDonuts;
  this.opens         = options.opens || 700;
  this.closes        = options.closes || 1800;
  this.hoursOpen     = (this.closes - this.opens)/100;
};

Shops.prototype.avgHour = function() {
  return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.averageDonuts);
};

Shops.prototype.render = function() {

  var main = document.getElementById('donut_table');
  var addRow = document.createElement('tr');
  addRow.innerHTML = this.locationName;
  main.appendChild(addRow);

  var total = 0;
    for (var i = 0; i < this.hoursOpen; i++) {
      var addShops = document.createElement('td');
      addShops.innerHTML = this.avgHour();
      addRow.appendChild(addShops);
      total += this.avgHour(i);
}
  var addTotal = document.createElement('td');
  addTotal.innerHTML = total;
  addRow.appendChild(addTotal);

  return addShops;
};




var downtown = new Shops('Downtown', {minCust: 8, maxCust: 43, averageDonuts: 4.5});
downtown.render();

var capitolHill = new Shops('Capitol Hill', {minCust: 4, maxCust: 37, averageDonuts: 2});
capitolHill.render();

var southLkUnion = new Shops ('S. Lk. Union', {minCust: 9, maxCust: 23, averageDonuts: 6.33});
southLkUnion.render();

var wedgewood = new Shops ('Wedgewood', {minCust: 2, maxCust:28, averageDonuts: 1.25});
wedgewood.render();

var ballard = new Shops ('Ballard', {minCust: 8, maxCust: 58, averageDonuts: 3.75});
ballard.render();
