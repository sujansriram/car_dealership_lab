const Car = require(`./car`);
const Dealership = require(`./dealership`);
const Customer = require(`./customer`);

const toyota = new Car("Toyota", 10000, "hybrid");
const tesla = new Car("Tesla", 50000, "electric");

const dealership = new Dealership("autotrader", 50);

const customer = new Customer("Sujan", 100000);

dealership.addCarToStock(toyota);
// dealership.addCarToStock(tesla);

describe ('dealership', () => {

    test('can count stock', () => {
        const expected = 1;
        const actual = dealership.countStock();
        expect(actual).toBe(expected);
    });

    test('can count stock', () => {
        dealership.addCarToStock(tesla);
        const expected = 2;
        const actual = dealership.countStock();
        expect(actual).toBe(expected);
    });

    test('can get manufacturers', () => {
        const expected = [ 'Toyota', 'Tesla' ];
        const actual = dealership.manufacturers();
        expect(actual).toStrictEqual(expected);
    });

    test('can get cars by manufacturer', () => {
        const expected =   [toyota];
        const actual = dealership.getCarsByManufacturer("Toyota");
        expect(actual).toStrictEqual(expected);
    });

    test('can get total stock value', () => {
        const expected = 60000;
        const actual = dealership.totalStockValue();
        expect(actual).toBe(expected);
    });

})





