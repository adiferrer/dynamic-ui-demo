import './styles.css';
import renderImageSlider from '@jeanneferrer/image-slider';
import { renderNav, DropDownMenu, DropDownSubItem } from '@jeanneferrer/dropdown-menu';
import first from './images/1.jpg';
import second from './images/2.jpg';
import third from './images/3.jpg';

const dropDownMenu = [
  [
    ['Home', '#'],
  ],
  [
    ['About', '#'],
  ],
  [
    ['Services', '#'],
    ['Web Development', '#'],
    ['Android Development', '#'],
    ['iOS Development', '#'],
    ['UI/UX Design', '#'],
  ],
  [
    ['Portfolio', '#'],
    ['Web Development', '#'],
    ['Photography', '#'],
  ],
];
for (let i = 0; i < dropDownMenu.length; i++) {
  for (let j = 0; j < dropDownMenu[i].length; j++) {
    dropDownMenu[i][j] = Object.assign(DropDownSubItem(...dropDownMenu[i][j]));
  }
  dropDownMenu[i] = Object.assign(DropDownMenu(dropDownMenu[i]));
}
const header = document.createElement('header');
header.appendChild(renderNav(dropDownMenu));
document.body.appendChild(header);

const container = document.createElement('div');
container.appendChild(renderImageSlider([first, second, third]));
document.body.appendChild(container);
