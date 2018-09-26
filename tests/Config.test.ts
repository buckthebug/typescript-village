// @ts-ignore
import {} from 'jest';

import * as configFile from '../data/config.json';

test('Import config.json', ()=> {
    console.log(configFile.characters.man.count)
})