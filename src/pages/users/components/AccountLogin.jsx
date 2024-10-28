import React from 'react';
import IconMap from 'components/IconMap';
import { loginRule } from 'utils/rules';

const accountLogin = ({ Input, FormItem }) => {
  return (
    <>
      <FormItem name="accountName" rules={loginRule.userRule} hasFeedback>
        <Input placeholder="アカウント名入力" prefix={IconMap.userIcon} />
      </FormItem>
      <FormItem name="password" rules={loginRule.passwordRule} hasFeedback>
        <Input
          placeholder="パスワード入力"
          prefix={IconMap.passwordIcon}
          type="password"
        />
      </FormItem>
    </>
  );
};

export default accountLogin;
