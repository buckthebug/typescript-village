///<reference path="../../node_modules/@types/uuid/interfaces.d.ts"/>
import {BaseCharacter} from "../characters/BaseCharacter";

export class Population {

    private listOfCharacters: Array<BaseCharacter>;

    constructor(){
        this.listOfCharacters = [];
    }

    public get countOfCharacters() : number {
        return this.listOfCharacters.length;
    }

    public get allCharacters() : Array<BaseCharacter> {
        // TODO: 1) It should be a copy of the array (is there same issue as in .NET/JAVA with iterating of collections?)
        // TODO: 2) Add/Remove should be done by events
        return this.listOfCharacters;
    }

    public addCharacter(character:BaseCharacter) : void {
        const index = this.listOfCharacters.findIndex(ch => ch.name == character.name);
        if (index < 0) {
            this.listOfCharacters.push(character);
        }

    }

    public removeCharacter(character:BaseCharacter) : void {
        const index = this.listOfCharacters.findIndex(ch => ch.name == character.name);
        if (index > -1) {
            this.listOfCharacters.splice(index)
        }
    }

    public annihilate() {
        this.listOfCharacters = [];
    }

    public shuffle(): void {
        // FIXME: It's the easiest way but not really random
        // see: https://jsperf.com/array-shuffle-comparator/5
        // see: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        this.listOfCharacters.sort(() : number => {
            // noinspection TypeScriptValidateJSTypes
            return 0.5 - Math.random();
        });
    }
}