import { keys } from 'lodash'
import { connect } from 'react-redux'
import Desktop from './desktop/SimsOverview'
import { simsSelected } from 'redux/sims/actions'
import * as Selectors from 'redux/selectors'

const mapStateToProps = (state) => {
	const selectedSims = Selectors.getSelectedSims(state)
	const showOptions = keys(selectedSims).length > 0
  return {
    sims: Selectors.getSims(state),
		showOptions,
		selectedSims
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		onRowSelection: (sims) => {
			return dispatch(simsSelected(sims))
		}
  }
}

export const DesktopSimsOverview =  connect(mapStateToProps, mapDispatchToProps)(Desktop)
