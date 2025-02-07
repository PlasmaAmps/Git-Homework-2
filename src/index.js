import { Header } from './header';
import { Hero } from './hero';
import { Footer } from './footer';

import './reset.scss';

const rootEl = document.getElementById('root');
const header = Header();
const hero = Hero();
const footer = Footer();

rootEl.appendChild(header);
rootEl.appendChild(hero);
rootEl.appendChild(footer);