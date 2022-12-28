import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { ProFormCaptcha, ProFormCheckbox, ProFormText, LoginForm, ProForm, } from '@ant-design/pro-form';
import { useIntl, history, FormattedMessage, SelectLang, useModel } from 'umi';
import { getFakeCaptcha } from '@/services/ant-design-pro/login';

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  const intl = useIntl();

  const handleSubmit = async (values: API.LoginParams) => {
    // try {
    //   // 登录
    //   const msg = await login({ ...values, type });
    //   if (msg.status === 'ok') {
    //     const defaultLoginSuccessMessage = intl.formatMessage({
    //       id: 'pages.login.success',
    //       defaultMessage: '登录成功！',
    //     });
    //     message.success(defaultLoginSuccessMessage);
    //     await fetchUserInfo();
    //     /** 此方法会跳转到 redirect 参数所在的位置 */
    //     if (!history) return;
    //     // console.log('history:',history)
    //     const { query } = history.location;
    //     const { redirect } = query as { redirect: string };
    //     history.push(redirect || '/');
    //     return;
    //   }
    //   console.log(msg);
    //   // 如果失败去设置用户错误信息
    //   setUserLoginState(msg);
    // } catch (error) {
    //   const defaultLoginFailureMessage = intl.formatMessage({
    //     id: 'pages.login.failure',
    //     defaultMessage: '登录失败，请重试！',
    //   });
    //   message.error(defaultLoginFailureMessage);
    // }
  };

  return (
    <ProForm layout="inline"
      onFinish={async (values) => {
        await handleSubmit(values as API.LoginParams);
      }}
    >
      <ProFormText
        fieldProps={{
          size: 'large',
          // width: '200px',
          // height: 44,
          // prefix: <MobileOutlined className={styles.prefixIcon} />,
        }}
        name="mobile"
        placeholder={intl.formatMessage({
          id: 'pages.login.phoneNumber.placeholder',
          defaultMessage: '手机号',
        })}
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="pages.login.phoneNumber.required"
                defaultMessage="请输入手机号"
              />
            ),
          },
          {
            pattern: /^1\d{10}$/,
            message: (
              <FormattedMessage
                id="pages.login.phoneNumber.invalid"
                defaultMessage="手机号格式错误！"
              />
            ),
          },
        ]}
      />
      <ProFormCaptcha
        fieldProps={{
          size: 'large',
          // prefix: <LockOutlined className={styles.prefixIcon} />,
        }}
        captchaProps={{
          size: 'large',
        }}
        placeholder={intl.formatMessage({
          id: 'pages.login.captcha.placeholder',
          defaultMessage: '请输入验证码',
        })}
        captchaTextRender={(timing, count) => {
          if (timing) {
            return `${count} ${intl.formatMessage({
              id: 'pages.getCaptchaSecondText',
              defaultMessage: '获取验证码',
            })}`;
          }
          return intl.formatMessage({
            id: 'pages.login.phoneLogin.getVerificationCode',
            defaultMessage: '获取验证码',
          });
        }}
        name="captcha"
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="pages.login.captcha.required"
                defaultMessage="请输入验证码"
              />
            ),
          },
        ]}
        onGetCaptcha={async (phone) => {
          const result = await getFakeCaptcha({
            phone,
          });
          if (result === false) {
            return;
          }
          message.success('获取验证码成功！验证码为：1234');
        }}
      />
    </ProForm>
  );
};

export default Register;