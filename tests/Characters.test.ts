// @ts-ignore
import {} from 'jest';
import {Man} from "../src/characters/Man";
import {Woman} from "../src/characters/Woman";
import {Warrior} from "../src/characters/Warrior";

describe('Creating characters inherited directly from BaseCharacter', () => {

    test('Create a vital man', () => {
        const initHealth = 20;

        const man = new Man(initHealth);
        expect(man).not.toBeNull();
        expect(man.health).toBe(initHealth);
        expect(man.isAlive).toBe(true);
    })

    test('Create a vital woman', () => {
        const initHealth = 10;

        const woman = new Woman(initHealth);
        expect(woman).not.toBeNull();
        expect(woman.health).toBe(initHealth);
        expect(woman.isAlive).toBe(true);
    })

    test('Create a vital warrior', () => {
        const initHealth = 30;

        const warrior = new Warrior(initHealth);
        expect(warrior).not.toBeNull();
        expect(warrior.health).toBe(initHealth);
        expect(warrior.isAlive).toBe(true);
    })

    test('Create a character with 0 points', () => {
        const initHealth = 0;

        const firstMan = new Man(initHealth);
        expect(firstMan).not.toBeNull();
        expect(firstMan.health).toBe(initHealth);
        expect(firstMan.isAlive).toBe(false);
    })

    test('Create a character with negative value of points - it means he`s dead', () => {
        const initHealth = -5;

        // TODO: It shouldn't work, but for now it's OK.

        const firstMan = new Man(initHealth);
        expect(firstMan).not.toBeNull();
        expect(firstMan.health).toBe(initHealth);
        expect(firstMan.isAlive).toBe(false);
    })

})


