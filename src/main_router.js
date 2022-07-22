const {Router} = require(`express`);
const path = require("path");
const html = require('../dist')
const mainRouter = new Router();

mainRouter.get(`/`, async (req, res) => {
   const htmlSource =  path.resolve(__dirname, '../dist/index.html')
    console.log('htmlSource',htmlSource);
    res.render(`./dist/index.html`);
});

module.exports = mainRouter;