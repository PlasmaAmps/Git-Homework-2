import './style.scss';
import heroImg from '../assets/success.jpeg';

export function Hero() {
  const header = document.createElement('img');
  header.className = 'hero';
  header.setAttribute('src', heroImg);

  return header;
}