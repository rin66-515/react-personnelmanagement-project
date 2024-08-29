import React, { useState } from 'react';
import AccountLogin from './components/AccountLogin';
import SmCodeLogin from './components/SmCodeLogin';
import IconMap from 'components/IconMap';
import { Button, Form, Input, Row, Col } from 'antd';

const FormItem = Form.Item;

const login = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState(false);
  // フォームsubmit
  const sumbitUserInfo = (data) => {
    console.log(data);
  };
  //コンポーネント選択関数
  const ComponentSelector = (props) =>
    type ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />;

  const onSwitch = () => {
    setType(!type);
  };
  return (
    <div class="form">
      <div className="accountLogo">
        <img src="" alt="" />
        <span>rin6人事管理システム</span>
      </div>
      <Form form={form} onFinish={sumbitUserInfo}>
        {ComponentSelector({ form, FormItem, Input })}
        <Row>
          <Button type="primary">ログイン</Button>
        </Row>
        <Row>
          <Col span={9}>パスワードを忘れた</Col>
          <Col span={9} onClick={onSwitch}>
            {type ? '携帯電話からログイン' : 'アカウントからログイン'}
            {IconMap.arrRowRight}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default login;
