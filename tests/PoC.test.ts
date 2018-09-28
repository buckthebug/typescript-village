// @ts-ignore
import {} from 'jest';

import * as applicationConfig from '../data/config.json';
import {Man} from "../src/characters/Man";

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

