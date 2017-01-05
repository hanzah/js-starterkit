import React from 'react'
import { DesktopMediaQuery } from 'utils/CustomMediaQuery'
import { DesktopSimsOverviewComponent } from 'components/simsoverview'

export default class SimsOverview extends React.Component {
  render() {
    return (
			<element>
				<DesktopMediaQuery>
					<DesktopSimsOverviewComponent name="desktop"/>
				</DesktopMediaQuery>
			</element>
    );
  }
}
