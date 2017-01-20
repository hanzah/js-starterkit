import React from 'react';
import { DesktopHeader } from 'components/Headers/HeaderLayout';
import SimDetailAnalytics from './SimDetailsAnalyitics';
import EditButton from './EditButton';

const SimDetailsHeader = () => {
  return (
    <DesktopHeader button={<EditButton />} lowerHeader={<SimDetailAnalytics/>} sectionTitle="SIM Details" />
  );
}

export default SimDetailsHeader;
