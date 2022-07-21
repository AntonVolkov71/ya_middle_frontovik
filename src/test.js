import {render} from "pug"
import fs from 'fs'

function test() {
    const template = fs.readFileSync(__dirname + './test.pug', 'utf8')


    const data = {
        values: [
            {id: 1, description: "dsd"},
            {id: 2, description: "dsd"}
        ]
    };
    const output = render(template, data);

    return output
}

export default test