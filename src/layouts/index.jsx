import React from 'react';

import { selectLayout } from 'utils/selectLayout';
import loginLayout from './loginLayout';
import baseLayout from './baseLayout';
const homeLayout = ({ children, location }) => {
  const layoutMap = { baseLayout, loginLayout };

  const Container = layoutMap[selectLayout(location.pathname)];

  return <Container>{children}</Container>;
};

export default homeLayout;
