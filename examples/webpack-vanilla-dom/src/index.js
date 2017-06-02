import { Label } from './index.css';

const App = () => {
  const container = document.createElement('div');
  container.setAttribute('role', 'container');

  const ryskin = Label.create({
    fontSize: Math.random() * 100,
    highlighted: true,
    name: 'Ryskin',
  });

  ryskin.appendChild(document.createTextNode('Ryskinder, please click me!'));

  ryskin.addEventListener('click', () => {
    ryskin.fontSize = Math.random() * 100;
    ryskin.color = `rgb(${ (Math.random() * 255).toFixed(0) }, ${ (Math.random() * 255).toFixed(0) }, ${ (Math.random() * 255).toFixed(0) })`;
  });

  const theWhiteScreen = Label.create({
    name: 'The White Screen',
  });

  theWhiteScreen.appendChild(document.createTextNode('The White Screen'));

  container.appendChild(ryskin);
  container.appendChild(theWhiteScreen);

  return container;
};

document.querySelector('#root').appendChild(App());
