import {BaseCharacter} from "./BaseCharacter";

export class CharacterFactory {
    public static create<T extends BaseCharacter>(c: new(healthParam:number) => T, health: number) : T {
        return new c(health);
    }
}