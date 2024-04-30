import { Ship } from "../ships";

describe("Ship", () => {
    let ship;
    beforeEach(() => {
        ship = new Ship('patrol boat', 2);
    });

    test('Initializes Patrol Boat', () => {
        expect(ship).toEqual({ name: 'patrol boat', length: 2, isSunk: false })
    })

    test('Sink ship', () => {
        ship.hit();
        ship.hit();
        expect(ship.isSunk).toBe(true)
    })
})