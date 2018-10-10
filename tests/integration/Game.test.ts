// @ts-ignore
import {} from 'jest';
import {Man} from "../../src/characters/Man";
import {Game} from "../../src/game/Game";
import {GameData} from "../../src/dto/GameData";
import {Woman} from "../../src/characters/Woman";
import {Warrior} from "../../src/characters/Warrior";

describe('Basic scenarios of Game', () => {

    test('New Game', () => {
        const data = new GameData();
        data.countOfDays = 5;
        data.countOfActionsPerDay = 3;
        data.characterCount.set(Man, 10);
        data.characterCount.set(Woman, 10);
        data.characterCount.set(Warrior, 5);

        const game = new Game(data);

        expect(game.population.countOfCharacters).toEqual(25);

    });
});