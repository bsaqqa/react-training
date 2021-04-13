import React from 'react'
import {Menu} from 'antd';
import {useHistory} from 'react-router';

import Routers from '../router';

export default function Nav() {
    const history = useHistory();
    const openLink = link=>{
        history.push(link);
    }

    return (
        <>
            <div className="flex logo"  />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                {Routers.map((item,index)=>{
                    if(item.hidden) return null;
                    return (<Menu.Item key={index} onClick={()=>openLink(item.link)}>{item.name}</Menu.Item>);
                })}
            </Menu>
        </>
    )
}
