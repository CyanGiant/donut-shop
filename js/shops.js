var Shops = function(locationName, minCust, maxCust, averageDonuts) {
  this.locationName = locationName;
    if (!(minCust && maxCust && averageDonuts)) {
      throw "You need min, max and average donuts";
    }
  this.minCust       = minCust;
  this.maxCust       = maxCust;
  this.averageDonuts = averageDonuts;
  this.opens         = 700;
  this.closes        = 1800;
  this.hoursOpen     = (this.closes - this.opens)/100;
};
//creates average amount of donuts per hour
Shops.prototype.avgHour = function() {
  return Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.averageDonuts);
};

Shops.prototype.render = function() {
  var hourly = [];
  var total = 0;

//if statement checks for existing store name, if yes it replaces with updated inputs / else runs otherwise to add new store location
  if(document.getElementById(this.locationName)) {
    var grabber = document.getElementById(this.locationName).childNodes;
    for (var i = 0; i < grabber.length - 1; i++){
      hourly[i] = this.avgHour();
      grabber[i].innerHTML = hourly[i];
      total += hourly[i];
      console.log(total + " " + hourly);
    }
    grabber[grabber.length -1].innerHTML = total;
  }else{
    var main = document.getElementById('donut_table');
    var addRow = document.createElement('tr');
    addRow.id = this.locationName;
    addRow.innerHTML = this.locationName;
    main.appendChild(addRow);

      for (var j = 0; j < this.hoursOpen; j++) {
        var addShops = document.createElement('td');
        hourly[j] = this.avgHour();
        addShops.innerHTML = this.avgHour();
        addRow.appendChild(addShops);
        total += hourly[j];
      }

    var addTotal = document.createElement('td');
    addTotal.innerHTML = total;
    addRow.appendChild(addTotal);
  }
};

  document.getElementById('btn').addEventListener('click', function() {
    var locationName = document.getElementById('name').value;
    var minInput = parseInt(document.getElementById('minCust').value);
    var maxInput = parseInt(document.getElementById('maxCust').value);
    var averageDonuts = parseInt(document.getElementById('averageDonuts').value);
    var addloc = [locationName, minInput, maxInput, averageDonuts];

    var newStore = new Shops(addloc[0], addloc[1], addloc[2], addloc[3]);
    newStore.render();

});


var downtown     = new Shops('Downtown', 8, 43, 4.5);
var capitolHill  = new Shops('Capitol Hill', 4, 37, 2);
var southLkUnion = new Shops('S. Lk. Union', 9, 23, 6.33);
var wedgewood    = new Shops('Wedgewood', 2,28, 1.25);
var ballard      = new Shops('Ballard', 8, 58, 3.75);
var shops        = [downtown, capitolHill, southLkUnion, wedgewood, ballard];

downtown.render();
capitolHill.render();
southLkUnion.render();
wedgewood.render();
ballard.render();
