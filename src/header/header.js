import './style.scss';

export function Header() {
  const header = document.createElement('h1');
  header.className = 'header';
  header.textContent = 'Homework Complete!'

  return header;
}