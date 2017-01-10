// copied from Danny's repo
// https://github.com/citrusbyte/ATT-Material-UI-Kit/blob/master/src/styles/baseThemes/lightBaseTheme.js
import { fade } from 'material-ui/utils/colorManipulator'

import {
    mainBlue,
    orange900,
    green300,
    greenA400,
    blue300,
    blue700,
    blue900,
    grey50,
    grey900,
    white,
    darkBlack,
    fullBlack
} from './colors'

export default {
  fontFamily: 'OmnesATT, Arial, \'Helvetica Neue\', Helvetica, sans-serif',
  palette: {
    primary1Color: mainBlue,
    primary2Color: orange900,
    primary3Color: grey900,
    accent1Color: blue300,
    accent2Color: grey50,
    accent3Color: green300,
    accent4Color: greenA400,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: blue900,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blue700,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  },
  slider: {
    trackColor: mainBlue,
    trackColorSelected: grey50
  }
}
