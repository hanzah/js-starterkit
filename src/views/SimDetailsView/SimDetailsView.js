import React, { PropTypes } from 'react'
import { DesktopMediaQuery } from 'utils/CustomMediaQuery'
import { DesktopSimDetails } from 'components/simdetails'

const { object } = PropTypes

 const SimDetailsView = ({ params }) => {
    return (
      <element>
        <DesktopMediaQuery>
          <DesktopSimDetails name="desktop" number={params.number} />
        </DesktopMediaQuery>
      </element>
    );
}

SimDetailsView.propTypes = {
	params: object
}

export default SimDetailsView
