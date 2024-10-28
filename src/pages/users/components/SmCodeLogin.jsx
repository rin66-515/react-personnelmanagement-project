import React, { useState } from 'react';
import IconMap from 'components/IconMap';
import { Button } from 'antd';
import { loginRule } from 'utils/rules';

const smCodeLogin = ({ Input, FormItem, form }) => {
  const [disabled, setDisabled] = useState(true);
  let [currentTime, setCurrentTime] = useState(60);
  const [currentStatus, setCurrentStatus] = useState(true);
  //送信後　切り替え
  const _sendSmCode = () => {
    setCurrentStatus(false);
    setDisabled(true);
    runtime();
  };
  const runtime = () => {
    const timer = setInterval(() => {
      if (currentTime === 0) {
        clearInterval(timer);
        setCurrentStatus(true);
        setDisabled(false);
        return;
      }
      setCurrentTime(--currentTime);
    }, 1000);
  };
  //送信ボタン制御
  const mobileCheck = async (val) => {
    try {
      const data = await form.validateFields(['mobileNumber']);
      setDisabled(false);
    } catch (error) {
      setDisabled(true);
    }
  };
  return (
    <>
      <FormItem name="mobileNumber" rules={loginRule.mobileRule} hasFeedback>
        <Input
          placeholder="携帯電話"
          prefix={IconMap.mobileIcon}
          onChange={mobileCheck}
        />
      </FormItem>
      <FormItem name="codeNumber" rules={loginRule.codeRule} hasFeedback>
        <Input
          placeholder="認証コード"
          prefix={IconMap.codeIcon}
          addonAfter={
            <Button disabled={disabled} onClick={_sendSmCode}>
              {currentStatus ? '送信' : `${currentTime}秒後再送信`}
            </Button>
          }
        />
      </FormItem>
    </>
  );
};

export default smCodeLogin;
