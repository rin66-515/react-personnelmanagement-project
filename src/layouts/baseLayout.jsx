import React from 'react';

const baseLayout = ({ children }) => {
  return (
    <>
      <h1>头部</h1>
      <p>侧边栏</p>
      {children}
    </>
  );
};

export default baseLayout;
