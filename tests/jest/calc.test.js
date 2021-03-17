const sum = require("../../scripts/calc");

describe("calc functie test", () => {
    it("controleer of onze 'sum' functie werkt zoals bedoeld", async () => {

        expect(sum(4, 5)).toBe(9);

    });
    it("controleer of negatieve getallen zijn toegestaan", async () => {

        expect(sum(-5, 7)).toBe(2);

    });
    it("controlleer of het niks doet met strings", async () => {

        expect(sum("broodje", "aap")).toBe(NaN);

    });
});