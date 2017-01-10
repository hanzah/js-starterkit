import React from 'react'
import { DesktopMediaQuery } from 'utils/CustomMediaQuery'
import { DesktopSimsOverviewComponent } from 'components/simsoverview'

const SimsIndexView = () => {
  return (
		<element>
			<DesktopMediaQuery>
				<DesktopSimsOverviewComponent name="desktop"/>
			</DesktopMediaQuery>
		</element>
  );
}

export default SimsIndexView
