import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Form, message } from "antd";
//tao mot horm login voi email va passw 
//co validate day du 
const FormLogin = () => { //onLogin
    const navigate = useNavigate();
    const [form] = Form.useForm();


    const onSubmit = async () => {
        const values = await form.validateFields()

        //kiemtra thong tin dang nhap
        if (values.email === 'admin@gmail.com' && values.password === 'admin123') {
            localStorage.setItem('token', `${values.email}${values.password}`)
            navigate('/dashboard')
        }
        //info sai
        else {
            message.error('Thong tin dang nhap khong chinh xac! ')
        }
        //Do something
        //onLogin(values)
    };

    // apiLogin(values).then((res)=>{
    //     //kiemtra thong tin dang nhap
    //     if (res.token) {
    //         navigate('/dashboard')
    //     }
    //     //info sai
    //     else {
    //         message.error('Thong tin dang nhap khong chinh xac! ')
    //     }
    // })

    return (
        <Form form={form} layout='vertical'>
            <Form.Item name="email" label="email" rules={[{ required: true }]} >
                <Input />
            </Form.Item>
            <Form.Item name="password" label="password" rules={[{ required: true }]} >
                <Input.Password />
            </Form.Item>
            <Button type='primary' onClick={onSubmit}>Login</Button>
        </Form>
    )

};

export default FormLogin;