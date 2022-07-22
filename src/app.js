const express = require('express')
const path = require(`path`);

const myRoutes = require(`./main_router`);

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `dist`;

const app = express();

// app.set(`views`, path.resolve(__dirname, `templates`));
app.use('/', myRoutes)

// app.set(`view engine`, `pug`);

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));


app.listen(DEFAULT_PORT, ()=>{
    console.log(`App start on PORT ${DEFAULT_PORT}`)
})