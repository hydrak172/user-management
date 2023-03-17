import React from "react";
import { useState } from "react"; 
import {Form,Button,Input} from 'antd'

const DEFAULT_USER=[{email:'hydraking@gmail.com',password:'113'}]
const HomeWork2=()=>{
        const [formData] = useState(DEFAULT_USER);
        const [form]=Form.useForm();

        const onSubmit=()=>{
            const data = form.getFieldValue();
            console.log(data);
            if(data===formData){
                return console.log("Dung du lieu");
            }
            else{
                return console.log("ban da nhap sai ");
            }
        }   
        return (
            <Form form={form} layout='vertical'>
                <Form.Item name="email" label="Email" >
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="password"  >
                    <Input.Password />
                </Form.Item>
                <Button type='primary' onClick={onSubmit}>Login</Button>
            </Form>
        )
}


export default HomeWork2;