import React from 'react'
import { DesktopMediaQuery } from 'utils/CustomMediaQuery'
import { DesktopSimsOverview } from 'components/simsoverview'

const SimsIndexView = () => {
  return (
		<element>
			<DesktopMediaQuery>
				<DesktopSimsOverview name="desktop"/>
			</DesktopMediaQuery>
		</element>
  );
}

export default SimsIndexView
