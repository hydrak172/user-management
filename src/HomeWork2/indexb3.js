import React from "react";
import { useState } from "react";
// import {Form,Button,Input} from 'antd'

const HomeWork2 = () => {
    const [formData, setFormData] = useState([]);
    const onChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;

        setFormData([
            formData,
            e.target.value,
        ])
    }

    return (
        <input name="name" value={formData} onChange={onChange} />
    )
}


export default HomeWork2;