// @ts-ignore
import {} from 'jest';
import {Man} from "../src/characters/Man";

describe('Creating characters inherited directly from BaseCharacter', () => {

    test('Create a vital man', () => {
        const initHealth = 20;

        const firstMan = new Man(initHealth);
        expect(firstMan).not.toBeNull();
        expect(firstMan.health).toBe(initHealth);
        expect(firstMan.isAlive).toBe(true);
    })

    test('Create a man with 0 points', () => {
        const initHealth = 0;

        const firstMan = new Man(initHealth);
        expect(firstMan).not.toBeNull();
        expect(firstMan.health).toBe(initHealth);
        expect(firstMan.isAlive).toBe(false);
    })

    test('Create a man with negative value of points', () => {
        const initHealth = -5;

        // TODO: It should work, but for now it's OK.

        const firstMan = new Man(initHealth);
        expect(firstMan).not.toBeNull();
        expect(firstMan.health).toBe(initHealth);
        expect(firstMan.isAlive).toBe(false);
    })

})


