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
        // TODO: it should be a copy of the array and Add/Remove shoudl be done by events
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
}