import {BaseCharacter} from "./BaseCharacter";

import * as configFile from '../../data/config.json';

export class CharacterFactory {

    public static create<T extends BaseCharacter>(c: new(healthParam:number) => T, health: number) : T;
    public static create<T extends BaseCharacter>(c: new(healthParam:number) => T) : T;


    public static create<T extends BaseCharacter>(c: new(healthParam:number) => T, health?: number) : T {
        if (health) {
            return new c(health);
        }

        // find out a character type/class and try to get a health value from config
        const characterClassName = c.name.toLocaleLowerCase();
        const character = (configFile.characters as any)[characterClassName];
        if (!character) {
            throw new Error('Character ${characterClassName} isn\'t defined in the application config');
        }

        return new c(character.health);
    }
}