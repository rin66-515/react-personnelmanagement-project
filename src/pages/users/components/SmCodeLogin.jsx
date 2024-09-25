import React from 'react';
import IconMap from 'components/IconMap';
import { Button } from 'antd';

const smCodeLogin = ({ Input, FormItem }) => {
  return (
    <>
      <FormItem>
        <Input placeholder="携帯電話" prefix={IconMap.mobileIcon} />
      </FormItem>
      <FormItem>
        <Input
          placeholder="ログインコード"
          prefix={IconMap.codeIcon}
          addonAfter={<Button>送信</Button>}
        />
      </FormItem>
    </>
  );
};

export default smCodeLogin;
