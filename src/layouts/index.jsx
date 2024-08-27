import React, { Children } from 'react';
import { Link } from 'umi';
import { Button } from 'antd';

const Layout = ({ Children, history }) => {
  const goTargetPage = (url) => {
    history.push(url)
  };
  return (
    <div>
      <h1>全局模板</h1>
      <Link to="/dashboard"> 跳转到图标界面</Link>
      <Button onClick={() => goTargetPage('/user/123')}>跳转到userインタフェース</Button>
      <Button onClick={() => goTargetPage('/')}>跳转到ホームページ</Button>
      <hr />
      {Children}
    </div>
  );
};

export default Layout;
