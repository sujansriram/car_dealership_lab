const Customer = function(name, wallet){
    this.name = name;
    this.wallet = wallet;
    this.cars = [];
}

Customer.prototype.buyCar = function(car){
    if (this.wallet >= car.price){
        this.wallet -= car.price;
        this.cars.push(car);
    }
}

module.exports = Customer;