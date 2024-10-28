import React, { useState } from 'react';
import AccountLogin from './components/AccountLogin';
import SmCodeLogin from './components/SmCodeLogin';
import IconMap from 'components/IconMap';
import { Button, Form, Input, Row, Col } from 'antd';
import './css/login.less';
import iconImg from 'common/img/icon.svg';

const FormItem = Form.Item;

const login = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState(1);
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
    <div className="form">
      <div className="accountLogo">
        <img src={iconImg} alt="" />
        <span>rin6人事管理システム</span>
      </div>
      <Form form={form} onFinish={sumbitUserInfo}>
        {ComponentSelector({ form, FormItem, Input })}
        <Row>
          <Button type="primary" block="true">
            ログイン
          </Button>
        </Row>
        <Row className="ft-12">
          <Col span={6}>パスワードを忘れた</Col>
          <Col span={18} onClick={onSwitch} className="align-right">
            {type ? '携帯電話からログイン' : 'アカウントからログイン'}
            {IconMap.arrRowRight}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default login;
