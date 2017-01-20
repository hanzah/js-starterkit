import { connect } from 'react-redux'
import Desktop from './desktop/SimDetails'
import * as Selectors from 'redux/selectors'

const mapStateToProps = (state, ownProps) => {
	const { number } = ownProps
  return {
    sim: Selectors.getSim(state, number),
		simStatusModalOpen: Selectors.getSimStatusModalStatus(state)
  }
}

export const DesktopSimDetails = connect(mapStateToProps)(Desktop)
