import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'

const Background = ImageSelector(CurrentContext.theme, 'bckg.png');

const inlineStyles = {
  bckg: {
    backgroundImage: 'url(' + Background + ')',
    backgroundRepeat: 'no-repeat'
  }
};

export default inlineStyles