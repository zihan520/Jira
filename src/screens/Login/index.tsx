import React, {FormEvent} from "react";
import {useAuth} from "context/auth-context";

export const LoginScreen = () => {
    const {login, user} = useAuth();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = (event.currentTarget.elements[0] as HTMLInputElement)
            .value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement)
            .value;
        console.log(username, password);
        login({username, password});
    };
    return (
        <form onSubmit={handleSubmit}>
            {user ? <div>登录的用户名：{user?.name}</div> : null}
            <label htmlFor="username">用户名</label>
            <input type="text" id={"username"}/>
            <br/>
            <label htmlFor="password">密码</label><input type="password" id={"password"}/>
            <br/><button type={"submit"}>登录</button>
        </form>
    );
};
