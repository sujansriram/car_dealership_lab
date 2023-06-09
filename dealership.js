const Dealership = function (name, maxStock){
    this.name = name;
    this.maxStock = maxStock;
    this.currentStock = [];
}

Dealership.prototype.countStock = function(){
    return this.currentStock.length;
}

Dealership.prototype.addCarToStock = function(car){
    if (this.currentStock.length < this.maxStock){
        this.currentStock.push(car);
    }
}

Dealership.prototype.manufacturers = function(){
    const manufacturers = this.currentStock.map(car => car.manufacturer);
    return manufacturers;
}

Dealership.prototype.getCarsByManufacturer = function(manufacturerName){
    const carsByManufacturer = this.currentStock.filter(car => car.manufacturer === manufacturerName);
    return carsByManufacturer;
}

Dealership.prototype.totalStockValue = function(){
    const totalValue = this.currentStock.reduce((accumulator, car) => accumulator + car.price,0);
    return totalValue;
}

Dealership.prototype.sellCar = function(customer, car){
    if (customer.wallet >= car.price && this.currentStock.indexOf(car) >= 0){
        customer.buyCar(car);
        this.currentStock.splice(this.currentStock.indexOf, 1);
    }
    
}

module.exports = Dealership;