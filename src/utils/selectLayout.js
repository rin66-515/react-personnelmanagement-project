export const selectLayout = (pathName) => {
  return pathName.includes('/users') ? 'loginLayout' : 'baseLayout';
};
