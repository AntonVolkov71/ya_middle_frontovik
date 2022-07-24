import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('message', tpl);

export default (props = {}) => tpl(props);
