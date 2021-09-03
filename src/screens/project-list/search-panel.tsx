import React from 'react';
import {useState} from 'react';

export interface User {
    id: string;
    name: string;
    email: string;
    title: string;
    organization: string;
    token: string;
}

interface SearchPanelProps {
    param: { name: string, personId: string };
    users: User[];
    setParam: (value: SearchPanelProps['param']) => void
}

export const SearchPanel = ({param, setParam, users}: SearchPanelProps) => {


    return (<form action="">
        <div>
            <input type="text" placeholder="请输入名称" value={param.name} onChange={evt => {
                setParam({
                    ...param,
                    name: evt.target.value
                })
            }}
            />
            <select value={param.personId} onChange={evt => {
                setParam({
                    ...param,
                    personId: evt.target.value
                })
            }}>
                <option value="">负责人</option>
                {users.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    </form>)
}