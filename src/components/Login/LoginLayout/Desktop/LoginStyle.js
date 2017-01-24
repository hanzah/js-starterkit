import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'

const Background = ImageSelector(CurrentContext.theme, 'loginbckg.png');

const inlineStyles = {
  bckg: {
    backgroundImage: 'url(' + Background + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
};

export default inlineStyles