import {localePaths} from "../assets/constants";
import emptyLayout from '../layouts/empty';
import mainLayout from '../layouts/main';

const {pathname} = window.location;
const $root = document.getElementById('root');

function render(root, layout, element) {
    root.innerHTML = layout({content: element})
}

function processingRouting(pages) {
    const {main, auth, login} = pages;

    switch (pathname) {
        case localePaths.login:
            render($root, emptyLayout, login);
            break;
        case localePaths.auth:
            render($root, emptyLayout, auth);
            break;
        case localePaths.main:
            render($root, mainLayout, main);
            break;
        default:
            console.log('default');
    }
}

export default processingRouting
