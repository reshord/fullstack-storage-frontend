import {Form, Input, Button} from 'antd';
import styles from './Auth.module.scss'

const LoginForm = ({}) => {

    const onSubmit = ({email, password}: {email: string, password: string}) => {
        
    }

    return ( 
        <div className={styles.formBlock}>
            <Form 
                name='basic'
                labelCol={{
                    span: 8
                }}
                onFinish={onSubmit}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {required: true, message: 'Укажите почту'}
                        ]}>
                        <Input />

                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {required: true, message: 'Укажите пароль'}
                        ]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16
                        }}>
                            <Button type='primary' htmlType='submit'>
                                Войти
                            </Button>
                    </Form.Item>
            </Form>
        </div>
     );
}
 
export default LoginForm;