// @ts-ignore
import {} from 'jest';

import * as applicationConfig from '../data/config.json';
import {Man} from "../src/characters/Man";
import {CharacterFactory} from "../src/characters/CharacterFactory";
import {BaseCharacter} from "../src/characters/BaseCharacter";
import {Woman} from "../src/characters/Woman";

test('Access property dynamically', ()=> {
    console.log(applicationConfig.characters['man'].health);
});

test('Access property dynamically 2', ()=> {
    const key = 'woman';

    console.log((applicationConfig.characters as any)[key].health);
});

test('Access unknown property dynamically', ()=> {
    const key = 'bla' + 'bla';

    expect(()=> {
        console.log((applicationConfig.characters as any)[key].health)
    }).toThrow();
});

test('Access property dynamically - iterate it', ()=> {

    for (let character in applicationConfig.characters) {
        console.log(character)
    }
});


test('Get class name of instance', ()=> {
    let character = new Man(3);

    console.log(character.constructor.name)
});

test('Get class name of variable', ()=> {
    let character:Man;

    console.log(typeof character)
});


test('Map of types', ()=> {
    var m = new Map<new(healthParam:number) => BaseCharacter, number>();

    m.set(Man, 3);
    //m.set(String, 9);
    //m.set(BaseCharacter, 15);

    m.forEach((value, key)=> {
        console.log(key instanceof BaseCharacter)
        console.log(typeof key)
        console.log(`m[${key}] = ${value}`);
        var a = CharacterFactory.create(key, value);
        console.log(a.name);
    })

});
