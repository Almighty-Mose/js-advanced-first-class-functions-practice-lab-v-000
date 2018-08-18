// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    return console.log(driver.name);
  });
}

function logDriversByHometown(drivers, loc) {
  drivers.forEach(function (driver) {
    if (driver.hometown === loc) {
      return console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  drivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}