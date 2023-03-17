import React from "react";
import { Input, Button, Form, Select, InputNumber } from "antd";


//tao 1 form dang ki voi email , password , confirm password , phone number , country
// validate toan bo du lieu 
const Exam04 = () => {
    const [form] = Form.useForm();

    const onSubmit = () => {
        // const values = await form.validateFields()
        // console.log(values)
        // //Do something
        // //onLogin(values)
    }

    return (
        <Form form={form} layout='vertical'>
            <Form.Item name='Email' label='Email' rules={[{
                required: true,
                message: "Please InPut your Email Again !",
                type: 'email'
            }]}>
                <Input />
            </Form.Item>
            <Form.Item name='password' label='password' rules={[{
                required: true,
                message: "Please Input your password Again !",
            }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item
                name='Confirm Password'
                label='Confirm Password'
                dependencies={["password"]}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Please confirm your password !",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                // if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(value)) 
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error("The two passwords that you emtered do not match !")
                            );
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item name='Phone' label='Phone Number' rules={[{
                required: true,
                message: "Please Phone your password !",
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                    if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(value)) {
                        return Promise.resolve();
                    }
                    return Promise.reject(
                        new Error("The two passwords that you emtered do not match !")
                    );
                },
            }),]}>
                <InputNumber />
            </Form.Item>
            <Form.Item name='country' label='Country' rules={[]}>
                <Select options={[
                    { value: 'VN', label: 'country' },
                    { value: 'US', label: 'USA' },
                ]} />
            </Form.Item>
            <Button type='primary' onClick={onSubmit}>Sign Up</Button>
        </Form >
    )

};

export default Exam04;