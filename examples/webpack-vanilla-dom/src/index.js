import { Label } from './index.css';

const randomInt = max => (Math.random() * max).toFixed(0);

const randomColor = () => `rgb(${ [randomInt(255), randomInt(255), randomInt(255)].join() })`;

const App = () => {
  const container = document.createElement('div');
  container.setAttribute('role', 'container');

  const ryskin = Label.create({
    fontSize: Math.random() * 100,
    highlighted: true,
    name: 'Ryskin',
    color: randomColor(),
  });

  ryskin.appendChild(document.createTextNode('Ryskinder, please click me!'));

  ryskin.addEventListener('click', () => {
    ryskin.fontSize = Math.random() * 100;
    ryskin.color = randomColor();
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
