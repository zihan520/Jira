import React from 'react';
import {User} from './search-panel' ;

interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string;
}

interface IsState {
    list: Project[];
    users: User[]
}

export const List = ({list, users}: IsState) => {
    return (<table>
        <thead>
        <tr>
            <th>名称</th>
            <th>负责人</th>
        </tr>
        </thead>
        <tbody>
        {users.length > 0 ? list.map((item, index) => (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{users.find(user => user.id === item.personId)?.name}</td>
            </tr>
        )) : null}
        </tbody>
    </table>)
}