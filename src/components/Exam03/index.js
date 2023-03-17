import React from "react";
import { Input, Button, Form } from "antd";
//tao mot horm login voi email va passw 
//co validate day du 
const Exam03 = () => { //onLogin
    const [form] = Form.useForm();

    const onSubmit = async () => {
        const values = await form.validateFields()
        console.log(values)
        //Do something
        //onLogin(values)
    }

    return (
        <Form form={form} layout='vertical'>
            <Form.Item name="Email" label="Email" rules={[{ required: true }]} >
                <Input />
            </Form.Item>
            <Form.Item name="password" label="password" rules={[{ required: true }]} >
                <Input.Password />
            </Form.Item>
            <Button type='primary' onclick={onSubmit}>Login</Button>
        </Form>
    )

};

export default Exam03;