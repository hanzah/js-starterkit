import React from 'react'
import { DesktopMediaQuery } from 'utils/CustomMediaQuery'
import { DesktopSimsOverview } from 'components/SimsOverview'
import DesktopSimsOverviewHeader from 'components/headers/SimsOverviewHeader'

const SimsIndexView = () => {
  return (
    <element>
      <DesktopMediaQuery>
        <DesktopSimsOverviewHeader name="desktop"  />
        <DesktopSimsOverview name="desktop" />
      </DesktopMediaQuery>
    </element>
  );
}

export default SimsIndexView
