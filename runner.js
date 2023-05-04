const Car = require(`./car`);
const Dealership = require(`./dealership`);

const toyota = new Car("Toyota", 10000, "hybrid");
const tesla = new Car("Tesla", 50000, "electric");
const dealership = new Dealership("autotrader", 50);

dealership.addCarToStock(toyota);
dealership.addCarToStock(tesla);

console.log(dealership.countStock());
console.log(dealership.currentStock);
console.log(dealership.manufacturers());
console.log(dealership.getCarsByManufacturer("Toyota"));
