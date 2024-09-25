import React from 'react';
import IconMap from 'components/IconMap';

const accountLogin = ({ Input, FormItem }) => {
  return (
    <>
      <FormItem>
        <Input placeholder="アカウント名入力" prefix={IconMap.userIcon} />
      </FormItem>
      <FormItem>
        <Input placeholder="パスワード入力" prefix={IconMap.passwordIcon} />
      </FormItem>
    </>
  );
};

export default accountLogin;
