import React, {FormEvent} from 'react';
import {useAuth} from 'context/auth-context';
import {Button, Input} from 'antd';
import styled from '@emotion/styled';
export const RegisterScreen = () => {
  const {login, user} = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    console.log(username, password);
    login({username, password});
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" id={'username'} placeholder={'请输入用户名'} />
      <br />
      <br />
      <Input type="password" id={'password'} placeholder={'请输入密码'} />
      <br />
      <WidthBtn style={{marginTop: '10px'}} htmlType={'submit'} type={'primary'}>
        注册
      </WidthBtn>
    </form>
  );
};
const WidthBtn = styled(Button)`
  width: 100%;
`;
