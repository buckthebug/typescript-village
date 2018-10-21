// @ts-ignore
import {} from 'jest';
import {Man} from "../../src/characters/Man";
import {Game} from "../../src/game/Game";
import {GameData} from "../../src/dto/GameData";
import {Woman} from "../../src/characters/Woman";
import {Warrior} from "../../src/characters/Warrior";
import {GameState} from "../../src/game/GameState";

describe('Basic scenarios of Game', () => {

    test('New Game', () => {
        const menCount = 10;
        const womenCount = 10;
        const warriorCount = 5;
        const dayCount = 5;
        const actionsPerDay = 3;

        // Arrange
        const data = new GameData();
        data.countOfDays = dayCount;
        data.countOfActionsPerDay = actionsPerDay;
        data.characterCount.set(Man, menCount);
        data.characterCount.set(Woman, womenCount);
        data.characterCount.set(Warrior, warriorCount);

        // Act
        const game = new Game(data);

        // Assert
        expect(game.population.countOfCharacters).toEqual(menCount + womenCount + warriorCount);
        expect(game.population.getByType(Man).length).toEqual(menCount);
        expect(game.population.getByType(Woman).length).toEqual(womenCount);
        expect(game.population.getByType(Warrior).length).toEqual(warriorCount);

        expect(game.state).toEqual(GameState.New);
        expect(game.countOfDays).toEqual(dayCount);
        expect(game.countOfActionsPerDay).toEqual(actionsPerDay);

        expect(game.currentDay).toEqual(0);
        expect(game.currentActionToday).toEqual(0);

    });
});