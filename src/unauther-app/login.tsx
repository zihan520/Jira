import React, {FormEvent} from 'react';
import {useAuth} from 'context/auth-context';
import {Button, Input} from 'antd';
export const LoginScreen = () => {
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
      {user ? <div>登录的用户名：{user?.name}</div> : null}
      <Input type="text" id={'username'} placeholder={'请输入用户名'} />
      <br />
      <br />
      <Input type="password" id={'password'} placeholder={'请输入密码'} />
      <br />
      <Button style={{marginTop: '10px'}} htmlType={'submit'} type={'primary'}>
        登录
      </Button>
    </form>
  );
};
