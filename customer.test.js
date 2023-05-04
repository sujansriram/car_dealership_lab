const Car = require(`./car`);
const Customer = require(`./customer`);

const toyota = new Car("Toyota", 10000, "hybrid");
const tesla = new Car("Tesla", 50000, "electric");

const customer1 = new Customer("Sujan", 100000);
const customer2 = new Customer("Donnell", 10000)


describe ('can buy car', () => {

    customer1.buyCar(toyota);
    customer2.buyCar(tesla);

    test('wallet changes', () => {
        const expected = 90000;
        const actual = customer1.wallet;
        expect(actual).toBe(expected);
    });

    test('cars property changes', () => {
        const expected = [ toyota ];
        const actual = customer1.cars;
        expect(actual).toStrictEqual(expected);
    });

    test('wallet does not change', () => {
        const expected = 10000;
        const actual = customer2.wallet;
        expect(actual).toBe(expected);
    });

    test('cars property does not change', () => {
        const expected = [];
        const actual = customer2.cars;
        expect(actual).toStrictEqual(expected);
    });

})



