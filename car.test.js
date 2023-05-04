const Car = require(`./car`);

const newCar = new Car("Toyota", 10000, "hybrid");

test('can get car manufacturer', () => {
    const expected = "Toyota";
    const actual = newCar.manufacturer;
    expect(actual).toBe(expected);
});

test('can get car price', () => {
    const expected = 10000;
    const actual = newCar.price;
    expect(actual).toBe(expected);
});

test('can get car engine type', () => {
    const expected = "hybrid";
    const actual = newCar.engineType;
    expect(actual).toBe(expected);
});