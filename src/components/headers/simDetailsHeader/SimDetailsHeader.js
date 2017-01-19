import React from 'react';
import { DesktopHeader } from 'components/headers/headerLayout';
import TopBarHeader from 'components/headers/shared/topBarHeader/TopBarHeader';
import SimDetailAnalytics from './simDetailsAnalyitics';
import EditButton from './editButton';

const SimDetailsHeader = () => {
  return (
    <DesktopHeader button={<EditButton />} lowerHeader={<SimDetailAnalytics/>} topBarHeader={<TopBarHeader sectionTitle="SIM Details"/>}/>
  );
}

export default SimDetailsHeader;