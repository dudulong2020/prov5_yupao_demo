import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from './index.less';

const Register: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout='inline'
    >
      <Form.Item
        // label="Username"
        name="mobile"

        rules={[{
          required: true,
          message: 'Please input your username!',
        }]}
      >
        <Input placeholder='请输入手机号码' className={styles.LoginCollection_sidebar_tel} />
      </Form.Item>

      <Form.Item
        // label="Username"
        name="code"

        rules={[{
          required: true,
          message: 'Please input your username!',
        }]}
      >
        <div className={styles.LoginCollection_sidebar_code}>
          <Input placeholder='请输入验证码' className={styles.LoginCollection_code_input} />
          <div className={styles.LoginCollection_code_text}>获取验证码</div>
        </div>

      </Form.Item>


      <button
        // htmlType="submit" 
        className={styles.LoginCollection_login_submit}>
        登录|注册
      </button>

      <Form.Item name="remember" className={styles.LoginCollection_home_policy}>
        <div style={{ width: 260 }}>
          <Checkbox>我已阅读并同意</Checkbox>
          <span>《隐私政策》</span>
          <span>《服务协议》</span>
        </div>

      </Form.Item>


    </Form>
  );
};

export default Register;

