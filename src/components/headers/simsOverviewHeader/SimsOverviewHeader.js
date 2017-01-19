import React from 'react';
import { DesktopHeader } from 'components/headers/headerLayout';
import TopBarHeader from 'components/headers/shared/topBarHeader/TopBarHeader';
import SimsOverviewAnalytics from './simsOverviewAnalytics';
import AddButton from './addButton';

const SimsOverviewHeader = () => {
  return (
    <DesktopHeader button={<AddButton />} lowerHeader={<SimsOverviewAnalytics/>} topBarHeader={<TopBarHeader/>} />
  );
}

export default SimsOverviewHeader;
