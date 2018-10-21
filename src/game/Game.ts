import {Population} from "./Population";
import {GameData} from "../dto/GameData";
import {GameState} from "./GameState";
import {CharacterFactory} from "../characters/CharacterFactory";

export class Game {

    private initData: GameData;

    private populationValue:Population;
    get population(): Population {
        return this.populationValue;
    }

    private stateValue: GameState;
    get state() : GameState {
        return this.stateValue;
    }

    private countOfDaysValue: number;
    get countOfDays() : number {
        return this.countOfDaysValue;
    }

    private currentDayValue: number;
    get currentDay() : number {
        return this.currentDayValue;
    }

    private countOfActionsPerDayValue: number;
    get countOfActionsPerDay() : number {
        return this.countOfActionsPerDayValue;
    }

    private currentActionTodayValue: number;
    get currentActionToday() : number {
        return this.currentActionTodayValue;
    }

    constructor(data: GameData) {
        this.prepareNewGame(data);
    }

    public prepareNewGame(data : GameData) {
        this.initData = data;
        this.initialize();
    }


    protected initialize() {

        this.currentDayValue = 0;
        this.currentActionTodayValue = 0;

        this.countOfDaysValue = this.initData.countOfDays;
        this.countOfActionsPerDayValue = this.initData.countOfActionsPerDay;

        this.populationValue = new Population();
        this.initData.characterCount.forEach((count, type)=> {
            for (let i = 0; i < count; i++) {
                try {
                    const character = CharacterFactory.create(type);
                    this.population.addCharacter(character)
                } catch (exception) {
                    console.log(`Cannot create and/or add an instance of ${type}`)
                }
            }
        });

        this.population.shuffle();

        this.stateValue = GameState.New;
    }

    public start() {
        this.stateValue = GameState.Running;

    }

    public pause() {
        this.stateValue = GameState.Paused;
    }

    public restart() {
        this.prepareNewGame(this.initData);
        this.start();
    }

    public nextAction() {

    }

    public nextDay() {

    }

}