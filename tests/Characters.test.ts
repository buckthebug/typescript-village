// @ts-ignore
import {} from 'jest';
import {Man} from "../src/characters/Man";
import {Woman} from "../src/characters/Woman";
import {Warrior} from "../src/characters/Warrior";
import {CharacterFactory} from "../src/characters/CharacterFactory";
import {BaseCharacter} from "../src/characters/BaseCharacter";

import * as applicationConfig from '../data/config.json';
import {TestCharacter} from "./TestCharacter";

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

    test('Create a man with explicitly defined health points', ()=> {
        const initHealth = 25;

        const man = CharacterFactory.create(Man,initHealth);

        commonCharacterAssert(man, initHealth, true);
    });

    test('Create a new character (inherited outside characters) with explicitly defined health points', ()=> {
        const expectedHealth = 5;

        const testCharacter = CharacterFactory.create(TestCharacter, expectedHealth);

        commonCharacterAssert(testCharacter, expectedHealth, true);
    })


    test('Create a man with health points from config', ()=> {
        const expectedHealth = applicationConfig.characters.man.health;

        const man = CharacterFactory.create(Man);

        commonCharacterAssert(man, expectedHealth, true);
    });

    test('Create a warrior with health points from config', ()=> {
        const expectedHealth = applicationConfig.characters.warrior.health;

        const warrior = CharacterFactory.create(Warrior);

        commonCharacterAssert(warrior, expectedHealth, true);
    })

    test('Create a character without health points and not defined in config', ()=> {

        expect(() =>
            CharacterFactory.create(TestCharacter)
        ).toThrow();
    })

});

function commonCharacterAssert(character:BaseCharacter, expectedHealth:number, expectedIsAlive:boolean) {
    expect(character).not.toBeNull();
    expect(character.health).toBe(expectedHealth);
    expect(character.isAlive).toBe(expectedIsAlive);
}