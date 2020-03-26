const enhancer = require('./enhancer.js');
// test away!
describe("enhancer.succeed()", () => {
    it("increases an item's enhancement by 1", () => {
        const expectedItem = {
            name: "item",
            enhancement: 20,
            durability: 87
        }
        const inputItem = {
            name: "item",
            enhancement: 19,
            durability: 87
        }
        const outputItem = enhancer.succeed(inputItem)
        expect(outputItem).toStrictEqual(expectedItem)
    })
    it("does not increase an item's enhancement level if it is already 20", () => {
        const expectedItem = {
            name: "item",
            enhancement: 20,
            durability: 100
        }
        const inputItem = {
            name: "item",
            enhancement: 20,
            durability: 100
        }
        const outputItem = enhancer.succeed(inputItem)
        expect(outputItem).toStrictEqual(expectedItem)
    })
})

describe('enhance fail function', () => {
    it('should reduce durability by 5 if enhancement is < 15', () => {
        const item = {
            name: 'Mjolnir',
            durability: 50,
            enhancement: 12
        };
        const itemOutput = {
            name: 'Mjolnir',
            durability: 45,
            enhancement: 12
        };
        expect(enhancer.fail(item)).toStrictEqual(itemOutput);
    });
    it('should reduce durability by 10, and not reduce enhancement level if item enhancement is 15 or 16', () => {
        const item = {
            name: 'Mjolnir',
            durability: 50,
            enhancement: 16
        };
        const itemOutput = {
            name: 'Mjolnir',
            durability: 40,
            enhancement: 16
        };
        expect(enhancer.fail(item)).toStrictEqual(itemOutput);
    });
    it('should reduce durability by 10 and reduce enhancement level by 1 if item enhancement > 16', () => {
        const item = {
            name: 'Mjolnir',
            durability: 50,
            enhancement: 18
        };
        const itemOutput = {
            name: 'Mjolnir',
            durability: 40,
            enhancement: 17
        };
        expect(enhancer.fail(item)).toStrictEqual(itemOutput);
    });
});