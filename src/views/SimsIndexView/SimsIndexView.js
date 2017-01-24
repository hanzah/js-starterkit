import React from 'react'
import { DesktopMediaQuery } from 'utils/CustomMediaQuery'
import { DesktopSimsOverview } from 'components/SimsOverview'
import DesktopSimsOverviewHeader from 'components/Headers/SimsOverviewHeader'

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
