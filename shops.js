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

//appended

var createStoreForm = document.getElementById('createStoreForm');
creatStoreForm.addEventListener('submit',function(e) {
  e.preventDefault();
    //preventDefault prevents the default action of submit which will refresh the page
  var name = document.getElementById('name').value;
  var minCust = parseInt(document.getElementById('minCustomers').value);
  //parseInt makes sure the numbers are recognized
  var maxCust = parseInt(document.getElementById('maxCustomers').value);
  var avg = parseInt(document.getElementById('avgDonuts').value);

  var check = checkMatch(name);
  if(check !== false)
    shops[check].removeshop(); //checks array check for same name
 //

  var store = new Shops(name, minCust, maxCust, averageDonuts);



var shops = [];

var downtown     = new Shops('Downtown', 8, 43, 4.5);

var capitolHill  = new Shops('Capitol Hill', 4, 37, 2);

var southLkUnion = new Shops('S. Lk. Union', 9, 23, 6.33);

var wedgewood    = new Shops('Wedgewood', 2, 28, 1.25);

var ballard      = new Shops('Ballard', 8, 58, 3.75);
renderAll();
// should render all without individual need, should be able to removie all the Min, Max and avg stuff including curlies below.
// var bellevue = new Shops ('Bellevue', {minCust: 12, maxCust: 40, averageDonuts: 2.5});
// bellevue.render();
