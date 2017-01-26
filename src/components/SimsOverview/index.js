import { keys } from 'lodash'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Desktop from './Desktop/SimsOverview'
import { simsSelected } from 'redux/sims/actions'
import * as Selectors from 'redux/selectors'

const mapStateToProps = (state) => {
	const selectedSims = Selectors.getSelectedSims(state)
	const showOptions = keys(selectedSims).length > 1
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
		},
		gotToSimDetails: (sim) => {
			return dispatch(push('/sims/' + sim.number))
		}
  }
}

export const DesktopSimsOverview =  connect(mapStateToProps, mapDispatchToProps)(Desktop)
