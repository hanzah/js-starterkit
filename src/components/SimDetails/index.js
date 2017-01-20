import { connect } from 'react-redux'
import Desktop from './desktop/SimDetails'
import * as Selectors from 'redux/selectors'

const mapStateToProps = (state, ownProps) => {
	const { number } = ownProps
	const sim = Selectors.getSim(state, number)
  return {
    sim
  }
}

export const DesktopSimDetails = connect(mapStateToProps)(Desktop)
