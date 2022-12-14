import { Card } from 'antd'
import './index.scss'

function Login() {
    return (
        <>
            <Card title="登录" className='login'>
                <p>用户名</p>
                <p>密码</p>
            </Card>
        </>
    )
}

export default Login