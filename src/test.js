import {render, renderFile} from "pug"
// import fs from 'fs'
//
// function test() {
//     const template = fs.readFileSync(__dirname + './test.pug', 'utf8')
//
//
//     const data = {
//         values: [
//             {id: 1, description: "dsd"},
//             {id: 2, description: "dsd"}
//         ]
//     };
//     const output = render(template, data);
//
//     return output
// }
//
// export default test

// import html from 'bundle-text:./templates/test.pug';
//
// function test(){
//     // const tt = render(html, {test2: 'ddddddddd'})
//     // console.log('tt',tt);
//     return html
// }
//
// export default test

// function test(){
//     const html = renderFile('./templates/test.pug', {test2: 'fffffff'})
//
//     console.log('html',html);
//
//     return html
//
// }
//
// export default test
import fs from 'fs';

const sourceCode = fs.readFileSync(__dirname + './templates/test.pug', 'utf8');
function test(){
    const html = render(sourceCode, {test2: 'fffffff'})

    console.log('html',sourceCode);

    return html
 br
}

export default test
