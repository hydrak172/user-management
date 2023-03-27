import React from "react";
import { useState } from "react";
// import {Form,Button,Input} from 'antd'

const HomeWork2 = () => {
    const [value, setValue] = useState([]);
    const [tong, setTong] = useState(0);
    const onChange = (e) => {
        const value = e.target.value;
        setTong(value);
        
        let tong=0;
        for(let i of value){
            tong+=parseInt(i);
        }
        setTong(tong);
    }

    return (
        <div>
            <input value={value} onChange={onChange}/>
            <p>Tong day so da nhap vao la : {tong}</p>
        </div>
    )
}


export default HomeWork2;