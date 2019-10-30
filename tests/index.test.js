const { rollDice } = require('../index');

describe('Test rollDice', () => {
    let randomNumbers = [];

    beforeAll(() => {
        for (i = 0; i < 10; i++) {
            const number = rollDice();
            randomNumbers.push(number);
        }
    });

    it('Shouldn\'t return number more than 6', () => {
        const max = Math.max(...randomNumbers);
        expect(max).toBeLessThan(7);
    });

    it('Shouldn\'t return number less than 1', () => {
        const max = Math.max(...randomNumbers);
        expect(max).toBeGreaterThan(0);
    });

    it('Shouldn\'t give the same number every time', () => {
        const distinct = [...new Set(randomNumbers)];
        expect(distinct.length).toBeGreaterThan(1);
    });
})