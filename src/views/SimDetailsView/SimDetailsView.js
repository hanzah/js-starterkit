import React, { Component } from 'react'
import { DesktopMediaQuery } from 'utils/CustomMediaQuery'
import { DesktopSimDetails } from 'components/simdetails'

export default class SimDetailsView extends Component {
  render() {
    return (
      <element>
        <DesktopMediaQuery>
          <DesktopSimDetails name="desktop" />
        </DesktopMediaQuery>
      </element>
    );
  }
}
