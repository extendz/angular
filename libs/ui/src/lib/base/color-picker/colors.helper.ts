import { Color } from '@extendz/core';

interface ColorPalete {
  name: string;
  values: Color[];
}
export const colors: ColorPalete[] = [
  {
    name: 'red',
    values: [
      { key: '50', hex: '#ffebee' },
      { key: '100', hex: '#ffcdd2' },
      { key: '200', hex: '#ef9a9a' },
      { key: '300', hex: '#e57373' },
      { key: '400', hex: '#ef5350' },
      { key: '500', hex: '#f44336' },
      { key: '600', hex: '#e53935' },
      { key: '700', hex: '#d32f2f' },
      { key: '800', hex: '#c62828' },
      { key: '900', hex: '#b71c1c' },
      { key: 'a100', hex: '#ff8a80' },
      { key: 'a200', hex: '#ff5252' },
      { key: 'a400', hex: '#ff1744' },
      { key: 'a700', hex: '#d50000' },
    ],
  },
  {
    name: 'pink',
    values: [
      { key: '50', hex: '#fce4ec' },
      { key: '100', hex: '#f8bbd0' },
      { key: '200', hex: '#f48fb1' },
      { key: '300', hex: '#f06292' },
      { key: '400', hex: '#ec407a' },
      { key: '500', hex: '#e91e63' },
      { key: '600', hex: '#d81b60' },
      { key: '700', hex: '#c2185b' },
      { key: '800', hex: '#ad1457' },
      { key: '900', hex: '#880e4f' },
      { key: 'a100', hex: '#ff80ab' },
      { key: 'a200', hex: '#ff4081' },
      { key: 'a400', hex: '#f50057' },
      { key: 'a700', hex: '#c51162' },
    ],
  },
  {
    name: 'purple',
    values: [
      { key: '50', hex: '#f3e5f5' },
      { key: '100', hex: '#e1bee7' },
      { key: '200', hex: '#ce93d8' },
      { key: '300', hex: '#ba68c8' },
      { key: '400', hex: '#ab47bc' },
      { key: '500', hex: '#9c27b0' },
      { key: '600', hex: '#8e24aa' },
      { key: '700', hex: '#7b1fa2' },
      { key: '800', hex: '#6a1b9a' },
      { key: '900', hex: '#4a148c' },
      { key: 'a100', hex: '#ea80fc' },
      { key: 'a200', hex: '#e040fb' },
      { key: 'a400', hex: '#d500f9' },
      { key: 'a700', hex: '#aa00ff' },
    ],
  },
  {
    name: 'deepPurple',
    values: [
      { key: '50', hex: '#ede7f6' },
      { key: '100', hex: '#d1c4e9' },
      { key: '200', hex: '#b39ddb' },
      { key: '300', hex: '#9575cd' },
      { key: '400', hex: '#7e57c2' },
      { key: '500', hex: '#673ab7' },
      { key: '600', hex: '#5e35b1' },
      { key: '700', hex: '#512da8' },
      { key: '800', hex: '#4527a0' },
      { key: '900', hex: '#311b92' },
      { key: 'a100', hex: '#b388ff' },
      { key: 'a200', hex: '#7c4dff' },
      { key: 'a400', hex: '#651fff' },
      { key: 'a700', hex: '#6200ea' },
    ],
  },
  {
    name: 'indigo',
    values: [
      { key: '50', hex: '#e8eaf6' },
      { key: '100', hex: '#c5cae9' },
      { key: '200', hex: '#9fa8da' },
      { key: '300', hex: '#7986cb' },
      { key: '400', hex: '#5c6bc0' },
      { key: '500', hex: '#3f51b5' },
      { key: '600', hex: '#3949ab' },
      { key: '700', hex: '#303f9f' },
      { key: '800', hex: '#283593' },
      { key: '900', hex: '#1a237e' },
      { key: 'a100', hex: '#8c9eff' },
      { key: 'a200', hex: '#536dfe' },
      { key: 'a400', hex: '#3d5afe' },
      { key: 'a700', hex: '#304ffe' },
    ],
  },
  {
    name: 'blue',
    values: [
      { key: '50', hex: '#e3f2fd' },
      { key: '100', hex: '#bbdefb' },
      { key: '200', hex: '#90caf9' },
      { key: '300', hex: '#64b5f6' },
      { key: '400', hex: '#42a5f5' },
      { key: '500', hex: '#2196f3' },
      { key: '600', hex: '#1e88e5' },
      { key: '700', hex: '#1976d2' },
      { key: '800', hex: '#1565c0' },
      { key: '900', hex: '#0d47a1' },
      { key: 'a100', hex: '#82b1ff' },
      { key: 'a200', hex: '#448aff' },
      { key: 'a400', hex: '#2979ff' },
      { key: 'a700', hex: '#2962ff' },
    ],
  },
  {
    name: 'lightBlue',
    values: [
      { key: '50', hex: '#e1f5fe' },
      { key: '100', hex: '#b3e5fc' },
      { key: '200', hex: '#81d4fa' },
      { key: '300', hex: '#4fc3f7' },
      { key: '400', hex: '#29b6f6' },
      { key: '500', hex: '#03a9f4' },
      { key: '600', hex: '#039be5' },
      { key: '700', hex: '#0288d1' },
      { key: '800', hex: '#0277bd' },
      { key: '900', hex: '#01579b' },
      { key: 'a100', hex: '#80d8ff' },
      { key: 'a200', hex: '#40c4ff' },
      { key: 'a400', hex: '#00b0ff' },
      { key: 'a700', hex: '#0091ea' },
    ],
  },
  {
    name: 'cyan',
    values: [
      { key: '50', hex: '#e0f7fa' },
      { key: '100', hex: '#b2ebf2' },
      { key: '200', hex: '#80deea' },
      { key: '300', hex: '#4dd0e1' },
      { key: '400', hex: '#26c6da' },
      { key: '500', hex: '#00bcd4' },
      { key: '600', hex: '#00acc1' },
      { key: '700', hex: '#0097a7' },
      { key: '800', hex: '#00838f' },
      { key: '900', hex: '#006064' },
      { key: 'a100', hex: '#84ffff' },
      { key: 'a200', hex: '#18ffff' },
      { key: 'a400', hex: '#00e5ff' },
      { key: 'a700', hex: '#00b8d4' },
    ],
  },
  {
    name: 'teal',
    values: [
      { key: '50', hex: '#e0f2f1' },
      { key: '100', hex: '#b2dfdb' },
      { key: '200', hex: '#80cbc4' },
      { key: '300', hex: '#4db6ac' },
      { key: '400', hex: '#26a69a' },
      { key: '500', hex: '#009688' },
      { key: '600', hex: '#00897b' },
      { key: '700', hex: '#00796b' },
      { key: '800', hex: '#00695c' },
      { key: '900', hex: '#004d40' },
      { key: 'a100', hex: '#a7ffeb' },
      { key: 'a200', hex: '#64ffda' },
      { key: 'a400', hex: '#1de9b6' },
      { key: 'a700', hex: '#00bfa5' },
    ],
  },
  {
    name: 'green',
    values: [
      { key: '50', hex: '#e8f5e9' },
      { key: '100', hex: '#c8e6c9' },
      { key: '200', hex: '#a5d6a7' },
      { key: '300', hex: '#81c784' },
      { key: '400', hex: '#66bb6a' },
      { key: '500', hex: '#4caf50' },
      { key: '600', hex: '#43a047' },
      { key: '700', hex: '#388e3c' },
      { key: '800', hex: '#2e7d32' },
      { key: '900', hex: '#1b5e20' },
      { key: 'a100', hex: '#b9f6ca' },
      { key: 'a200', hex: '#69f0ae' },
      { key: 'a400', hex: '#00e676' },
      { key: 'a700', hex: '#00c853' },
    ],
  },
  {
    name: 'lightGreen',
    values: [
      { key: '50', hex: '#f1f8e9' },
      { key: '100', hex: '#dcedc8' },
      { key: '200', hex: '#c5e1a5' },
      { key: '300', hex: '#aed581' },
      { key: '400', hex: '#9ccc65' },
      { key: '500', hex: '#8bc34a' },
      { key: '600', hex: '#7cb342' },
      { key: '700', hex: '#689f38' },
      { key: '800', hex: '#558b2f' },
      { key: '900', hex: '#33691e' },
      { key: 'a100', hex: '#ccff90' },
      { key: 'a200', hex: '#b2ff59' },
      { key: 'a400', hex: '#76ff03' },
      { key: 'a700', hex: '#64dd17' },
    ],
  },
  {
    name: 'lime',
    values: [
      { key: '50', hex: '#f9fbe7' },
      { key: '100', hex: '#f0f4c3' },
      { key: '200', hex: '#e6ee9c' },
      { key: '300', hex: '#dce775' },
      { key: '400', hex: '#d4e157' },
      { key: '500', hex: '#cddc39' },
      { key: '600', hex: '#c0ca33' },
      { key: '700', hex: '#afb42b' },
      { key: '800', hex: '#9e9d24' },
      { key: '900', hex: '#827717' },
      { key: 'a100', hex: '#f4ff81' },
      { key: 'a200', hex: '#eeff41' },
      { key: 'a400', hex: '#c6ff00' },
      { key: 'a700', hex: '#aeea00' },
    ],
  },
  {
    name: 'yellow',
    values: [
      { key: '50', hex: '#fffde7' },
      { key: '100', hex: '#fff9c4' },
      { key: '200', hex: '#fff59d' },
      { key: '300', hex: '#fff176' },
      { key: '400', hex: '#ffee58' },
      { key: '500', hex: '#ffeb3b' },
      { key: '600', hex: '#fdd835' },
      { key: '700', hex: '#fbc02d' },
      { key: '800', hex: '#f9a825' },
      { key: '900', hex: '#f57f17' },
      { key: 'a100', hex: '#ffff8d' },
      { key: 'a200', hex: '#ffff00' },
      { key: 'a400', hex: '#ffea00' },
      { key: 'a700', hex: '#ffd600' },
    ],
  },
  {
    name: 'amber',
    values: [
      { key: '50', hex: '#fff8e1' },
      { key: '100', hex: '#ffecb3' },
      { key: '200', hex: '#ffe082' },
      { key: '300', hex: '#ffd54f' },
      { key: '400', hex: '#ffca28' },
      { key: '500', hex: '#ffc107' },
      { key: '600', hex: '#ffb300' },
      { key: '700', hex: '#ffa000' },
      { key: '800', hex: '#ff8f00' },
      { key: '900', hex: '#ff6f00' },
      { key: 'a100', hex: '#ffe57f' },
      { key: 'a200', hex: '#ffd740' },
      { key: 'a400', hex: '#ffc400' },
      { key: 'a700', hex: '#ffab00' },
    ],
  },
  {
    name: 'orange',
    values: [
      { key: '50', hex: '#fff3e0' },
      { key: '100', hex: '#ffe0b2' },
      { key: '200', hex: '#ffcc80' },
      { key: '300', hex: '#ffb74d' },
      { key: '400', hex: '#ffa726' },
      { key: '500', hex: '#ff9800' },
      { key: '600', hex: '#fb8c00' },
      { key: '700', hex: '#f57c00' },
      { key: '800', hex: '#ef6c00' },
      { key: '900', hex: '#e65100' },
      { key: 'a100', hex: '#ffd180' },
      { key: 'a200', hex: '#ffab40' },
      { key: 'a400', hex: '#ff9100' },
      { key: 'a700', hex: '#ff6d00' },
    ],
  },
  {
    name: 'deepOrange',
    values: [
      { key: '50', hex: '#fbe9e7' },
      { key: '100', hex: '#ffccbc' },
      { key: '200', hex: '#ffab91' },
      { key: '300', hex: '#ff8a65' },
      { key: '400', hex: '#ff7043' },
      { key: '500', hex: '#ff5722' },
      { key: '600', hex: '#f4511e' },
      { key: '700', hex: '#e64a19' },
      { key: '800', hex: '#d84315' },
      { key: '900', hex: '#bf360c' },
      { key: 'a100', hex: '#ff9e80' },
      { key: 'a200', hex: '#ff6e40' },
      { key: 'a400', hex: '#ff3d00' },
      { key: 'a700', hex: '#dd2c00' },
    ],
  },
  {
    name: 'brown',
    values: [
      { key: '50', hex: '#efebe9' },
      { key: '100', hex: '#d7ccc8' },
      { key: '200', hex: '#bcaaa4' },
      { key: '300', hex: '#a1887f' },
      { key: '400', hex: '#8d6e63' },
      { key: '500', hex: '#795548' },
      { key: '600', hex: '#6d4c41' },
      { key: '700', hex: '#5d4037' },
      { key: '800', hex: '#4e342e' },
      { key: '900', hex: '#3e2723' },
    ],
  },
  {
    name: 'grey',
    values: [
      { key: '50', hex: '#fafafa' },
      { key: '100', hex: '#f5f5f5' },
      { key: '200', hex: '#eeeeee' },
      { key: '300', hex: '#e0e0e0' },
      { key: '400', hex: '#bdbdbd' },
      { key: '500', hex: '#9e9e9e' },
      { key: '600', hex: '#757575' },
      { key: '700', hex: '#616161' },
      { key: '800', hex: '#424242' },
      { key: '900', hex: '#212121' },
    ],
  },
  {
    name: 'blueGrey',
    values: [
      { key: '50', hex: '#eceff1' },
      { key: '100', hex: '#cfd8dc' },
      { key: '200', hex: '#b0bec5' },
      { key: '300', hex: '#90a4ae' },
      { key: '400', hex: '#78909c' },
      { key: '500', hex: '#607d8b' },
      { key: '600', hex: '#546e7a' },
      { key: '700', hex: '#455a64' },
      { key: '800', hex: '#37474f' },
      { key: '900', hex: '#263238' },
    ],
  },
];
