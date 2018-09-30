// @ts-ignore
import {} from 'jest';
import {Population} from "../src/game/Population";
import {CharacterFactory} from "../src/characters/CharacterFactory";
import {Man} from "../src/characters/Man";
import {Woman} from "../src/characters/Woman";
import {Warrior} from "../src/characters/Warrior";

describe('Basic operations with Population', () => {

    test('Create a new population', () => {
       const population = new Population();

        commonPopulationAsserts(population, 0);
    });

    test('Add a new character', () => {
        const population = new Population();

        const man = CharacterFactory.create(Man);
        population.addCharacter(man);

        commonPopulationAsserts(population, 1);
    });

    test('Remove a new character', () => {
        const population = new Population();

        const man = CharacterFactory.create(Man);
        population.addCharacter(man);
        commonPopulationAsserts(population, 1);

        population.removeCharacter(man);
        commonPopulationAsserts(population, 0);
    });

    test('Try add the same character twice', () => {
        const population = new Population();

        const man = CharacterFactory.create(Man);
        population.addCharacter(man);
        commonPopulationAsserts(population, 1);

        population.addCharacter(man);
        commonPopulationAsserts(population, 1);
    });

    test('Annihilate an existing population', () => {
        const population = new Population();

        const count = 5
        for (let i = 0; i < count; i++) {
            const man = CharacterFactory.create(Man);
            population.addCharacter(man);
        }

        commonPopulationAsserts(population, count);

        population.annihilate();
        commonPopulationAsserts(population, 0);
    });


    test('Sort an existing population', () => {
        const population = new Population();

        // Arrange
        const count = 5;
        for (let i = 0; i < count; i++) {
            const man = CharacterFactory.create(Man);
            population.addCharacter(man);
            const woman = CharacterFactory.create(Woman);
            population.addCharacter(woman);
            const warrior = CharacterFactory.create(Warrior);
            population.addCharacter(warrior);
        }

        commonPopulationAsserts(population, count * 3);
        expect(population.allCharacters[0]).toBeInstanceOf(Man);
        expect(population.allCharacters[1]).toBeInstanceOf(Woman);
        expect(population.allCharacters[2]).toBeInstanceOf(Warrior);

        // Act
        population.shuffle()

        // Assert
        console.log("IKN/I'm lazy - just try it debug :)")
        // TODO: Some meaningful assert

    });

});

function commonPopulationAsserts(population: Population, expectedCount: number) : void {
    expect(population).not.toBeNull();
    expect(population.countOfCharacters).toEqual(expectedCount);
}