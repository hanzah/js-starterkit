import React from 'react'
import { DesktopMediaQuery, TabletMediaQuery, MobileMediaQuery } from 'utils/CustomMediaQuery'
import {  DesktopWelcomeComponent, TabletWelcomeComponent, MobileWelcomeComponent } from 'components/welcome'

export default class Welcome extends React.Component {
  render() {
    return (
			<element>
				<MobileMediaQuery>
					<MobileWelcomeComponent name="mobile"/>
				</MobileMediaQuery>
				<TabletMediaQuery>
					<TabletWelcomeComponent name="tablet"/>
				</TabletMediaQuery>
				<DesktopMediaQuery>
					<DesktopWelcomeComponent name="desktop"/>
				</DesktopMediaQuery>
			</element>
    );
  }
}
