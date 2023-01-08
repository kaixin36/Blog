import "./index.scss"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Alert, Menu } from 'antd';
import { useState } from "react"

function Layout() {

    let [openkeys, setOpenkeys] = useState(["sub1"]);

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
        getItem('常规管理', 'sub1', <SettingOutlined />, [
            getItem('数据概览', '1'),
            getItem('内容管理', '2'),
            getItem('文章发布', '3')
        ]),
        getItem('系统设置', 'sub2', <SettingOutlined />, [
            getItem('用户管理', '4'),
            getItem('系统功能', '5')
        ])
    ];

    function onClick({ item, key, keyPath, domEvent }) {
        setOpenkeys([key])
    }

    return (
        <div className="layout_main_div">
            <div className="header_main_menu">
                header
            </div>
            <div className="center_main_menu">
                <div className="left_main_menu">
                    <Menu
                        onClick={onClick}
                        //openKeys={openkeys}
                        style={{
                            height: "100%",
                            "background-image": "linear-gradient(#e66465, #9198e5)"
                        }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                        theme="light"
                    />
                </div>
                <div className="content_main_menu">
                    内容区
                </div>
            </div>
        </div>
    )
}

export default Layout