import React from 'react';
import { DesktopHeader } from 'components/headers/headerLayout';
import SimsOverviewAnalytics from './simsOverviewAnalytics';
import AddButton from './addButton';

const SimsOverviewHeader = () => {
  return (
    <DesktopHeader button={<AddButton />} lowerHeader={<SimsOverviewAnalytics/>} sectionTitle='SIM Management' />
  );
}

export default SimsOverviewHeader;
