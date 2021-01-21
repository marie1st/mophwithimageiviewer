import react, {Component} from 'react';
import styles from './Login.module.css';

class Login extends React.Component{

render () {
    return (
        <div>
            ชื่อผู้ใช้ : <Textbox></Textbox>
            รหัสผ่าน: <Textbox></Textbox>
            <Link to={toForget}>ลืมรหัสผ่าน</Link>
            <Button>เข้าสู่ระบบ</Button> 
        </div>
    )
}
}

export default Login;