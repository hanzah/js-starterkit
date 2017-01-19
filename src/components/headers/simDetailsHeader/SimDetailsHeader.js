import React from 'react';
import { DesktopHeader } from 'components/headers/headerLayout';
import SimDetailAnalytics from './simDetailsAnalyitics';
import EditButton from './editButton';

const SimDetailsHeader = () => {
  return (
    <DesktopHeader button={<EditButton />} lowerHeader={<SimDetailAnalytics/>} sectionTitle="SIM Details" />
  );
}

export default SimDetailsHeader;
