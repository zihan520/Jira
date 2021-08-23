import React, {FormEvent} from 'react';


export const  LoginScreen = ()=>{
    const login = (uName: string,pwd: string)=>{
        fetch('/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({uName,pwd})
        }).then((res)=>{

        })
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
        console.log(username,password)
        login(username,password)
    }
    return <form onSubmit={handleSubmit}>
        <label htmlFor="username">用户名</label>
        <input type="text" id={'username'}/>
        <br/>
        <label htmlFor="password">密码</label>
        <input type="password" id={'password'}/>
        <br/>
        <button type={'submit'}>登录</button>
    </form>
}
//安装差价 npx imooc-jira-tool
//入口文件引入 import { loadDevTools } from 'jira-dev-tool'