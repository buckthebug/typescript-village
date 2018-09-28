// @ts-ignore
import {} from 'jest';
import {Man} from "../src/characters/Man";
import {Woman} from "../src/characters/Woman";
import {Warrior} from "../src/characters/Warrior";
import {CharacterFactory} from "../src/characters/CharacterFactory";
import {BaseCharacter} from "../src/characters/BaseCharacter";

describe('Creating characters inherited directly from BaseCharacter', () => {

    test('Create a vital man', () => {
        const initHealth = 20;

        const man = new Man(initHealth);

        commonCharacterAssert(man, initHealth, true);
    })

    test('Create a vital woman', () => {
        const initHealth = 10;

        const woman = new Woman(initHealth);

        commonCharacterAssert(woman, initHealth, true);
    })

    test('Create a vital warrior', () => {
        const initHealth = 30;

        const warrior = new Warrior(initHealth);

        commonCharacterAssert(warrior, initHealth, true);
    })

    test('Create a character with 0 points', () => {
        const initHealth = 0;

        const man = new Man(initHealth);

        commonCharacterAssert(man, initHealth, false);
    })

    test('Create a character with negative value of points - it means he`s dead', () => {
        const initHealth = -5;

        // TODO: It shouldn't work, but for now it's OK.

        const man = new Man(initHealth);

        commonCharacterAssert(man, initHealth, false);
    })

});

describe('Creating characters with Factory', () => {

    test('Create a mean with explicitly defined health points', ()=> {
        const initHealth = 25;

        const man = CharacterFactory.create(Man,initHealth);

        commonCharacterAssert(man, initHealth, true);

    })

});

function commonCharacterAssert(character:BaseCharacter, expectedHealth:number, expectedIsAlive:boolean) {
    expect(character).not.toBeNull();
    expect(character.health).toBe(expectedHealth);
    expect(character.isAlive).toBe(expectedIsAlive);
}