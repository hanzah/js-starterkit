import React from 'react'
import {  DesktopWelcomeComponent,
					TabletWelcomeComponent,
					MobileWelcomeComponent
				} from 'components/Welcome'
import { DesktopMediaQuery, TabletMediaQuery, MobileMediaQuery } from 'utils/CustomMediaQuery'

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
