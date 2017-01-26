import React from 'react';
import { DesktopHeader } from 'components/headers/HeaderLayout';
import SimsOverviewAnalytics from './SimsOverviewAnalytics';
import AddButton from './AddButton';

const SimsOverviewHeader = () => {
  return (
    <DesktopHeader button={<AddButton />} lowerHeader={<SimsOverviewAnalytics/>} sectionTitle='SIM Management' />
  );
}

export default SimsOverviewHeader;