import * as Handlebars from "handlebars";
import * as About from "./about.hbs"

function about(ww) {
    var template = Handlebars.template("ff", About);
    // execute the compiled template and print the output to the console
    console.log(template({ doesWhat: "rocks!" }));

    // const template = Handlebars.compile(About);
    // const html  = template({name: "Nils"})
    // console.log('html',html);
    // return html
}

export default about