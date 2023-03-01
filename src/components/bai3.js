import React from 'react';
import { useState } from "react";
const DEFAULT_USER=({name:'',email:'',phone:''}) //bien khong cap nhat va khong doi , chi de tham gia vao 1 so qua trinh lam viec cua code , vi tri nam ngay tren components cua minh vd tren const b3=()
const Bai3 = () => {
    
    const [users, setUsers] = useState([]);
    const [formData,setformData]=useState(DEFAULT_USER)
    const yourstyle={border:"1px solid black",height:"10px",width:"141px"}
  
  const onChange = (e) => {
    // const name=e.target.name
    // const value=e.target.value
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const onClick = () => {
    //edit input
    if(formData.id){
        const newUser=users.map((user)=>{
            if(user.id===formData.id){
                return formData
            }
            return user
        })

        setUsers(newUser)
    }
    //add new input
    else{
        setUsers([
            ...users, 
            {
                id:Math.random(),
                ...formData
            }
        ]);
    }
    setformData(DEFAULT_USER)
  };

  
  const onEdit=(selectedUser)=>{
      setformData(selectedUser)
  }
  return (
    <div>
      <div>
        <input name='name' value={formData.name} onChange={onChange} />
        <input name='email' value={formData.email} onChange={onChange} />
        <input name='phone' value={formData.phone} onChange={onChange} />
        <button onClick={onClick}>Submit</button>
      </div>
      <table>
        <tr>
          <th style={yourstyle}> Id</th>
          <th style={yourstyle}>Ho va ten</th>
          <th style={yourstyle}>Email</th>
          <th style={yourstyle}>Phone</th>
        </tr>
        {
        users.map((item) => {
        return (
          <tr>
            <td style={yourstyle}>Your Name: {item.id} </td>
            <td style={yourstyle}>Your Name: {item.name}</td>
            <td style={yourstyle} >Your Email: {item.email}</td>
            <td style={yourstyle} >Your Phone: {item.phone}</td>
            <td style={yourstyle} ><button onClick={()=>{onEdit(item)}}>Edit</button></td>
          </tr>
        );
      })}
      </table>
     
      
    </div>
  );
};

export default Bai3;




