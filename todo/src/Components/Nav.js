import React from 'react'
import {Menu} from 'antd';

import Routers from '../router';

export default function Nav() {
    return (
        <>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                {Routers.map((item,index)=>{
                    if(item.hidden) return null;
                    return (<Menu.Item key={index}>{item.name}</Menu.Item>);
                })}
            </Menu>
        </>
    )
}
