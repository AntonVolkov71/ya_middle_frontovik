// // import './assets/styles/style.scss';
// console.log('Hello main.js!')
//
// import test from './test'
// // test()
// // console.log('te',test());
// document.body.innerHTML = test()

import tpl from './index.hbs';

const data = {
    h1: 'Title',
    content: 'Содержимое'
}

console.log(tpl(data));

import './style.css';
import button from './components/button';
import page1 from './pages/page1';
import page2 from './pages/page2';

console.log(tpl);

document.getElementById('root').innerHTML = tpl({
    fname: 'students',
    btn: button('btn1','Click this')
});


window.createButton = (id, value) => {

    const htmlTpl = document.createElement('template');
    htmlTpl.innerHTML = button(id,value);

    document.getElementById('root').appendChild(htmlTpl.content);
}
