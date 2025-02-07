import './style.scss';

export function Footer() {
  const header = document.createElement('div');
  header.className = 'footer';
  header.textContent = 'How\'d it go? Painful or fun?';

  return header;
}