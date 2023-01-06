import "./index.scss"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Alert, Menu } from 'antd';
import {useState} from "react" 

function Layout() {

    let [openkeys,setOpenkeys]=useState(["sub1"]);

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem('内容中心', 'sub1', <MailOutlined />, [
            getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),
        getItem('系统设置', 'sub4', <SettingOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10')
        ])
    ];

    function onClick({ item, key, keyPath, domEvent })
    {
        setOpenkeys([key])
    }

    return (
        <div className="layout_main_div">
            <div className="left_main_menu">
                <Menu
                    onClick={onClick}
                   //openKeys={openkeys}
                    style={{
                          height: "100%"
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                    theme="dark"
                />
            </div>
            <div className="content_main_menu">
                内容区
            </div>
        </div>
    )
}

export default Layout