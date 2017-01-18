import React from 'react'
import { DesktopMediaQuery } from 'utils/CustomMediaQuery'
import { DesktopSimsOverview } from 'components/simsoverview'
import { DesktopHeader } from 'components/header'

const SimsIndexView = () => {
  return (
    <element>
      <DesktopMediaQuery>
        <DesktopHeader name="desktop"  />
        </DesktopMediaQuery>
        <DesktopMediaQuery>
        <DesktopSimsOverview name="desktop" />
      </DesktopMediaQuery>
    </element>
  );
}

export default SimsIndexView
