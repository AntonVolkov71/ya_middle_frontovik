import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('inputFile', tpl);

export default (props = {
    type: 'text'
}) => tpl(props);