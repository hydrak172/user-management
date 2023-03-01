import React from 'react';
import { useState } from "react";

const Bai2 = () => {
  const [user, setUser] = useState({ name: "", email: '' });
  const [userList, setUserList] = useState([
    { name: "123", email: '123Gmail.com' },
    { name: "456", email: '456@gmail.com' },
  ]);
  const yourstyle={border:"1px solid black"}
  const onClick = () => {
    setUserList([
      ...userList,  
      user
    ]);

    setUser({ name: "", email: '' })
  };

  const onChange = (e) => {
    // const name=e.target.name
    // const value=e.target.value
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };

  return (
    <div>
      <div>
        <input name='name' value={user.name} onChange={onChange} />
        <input name='email' value={user.email} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </div>
      <table>
        <tr>
          <th style={yourstyle}>Ho va ten</th>
          <th style={yourstyle}>Email</th>
        </tr>
        {
        userList.map((item) => {
        return (
          <tr>
            <td style={yourstyle}>Your Name: {item.name}</td>
            <td style={yourstyle} >Your Email: {item.email}</td>
          </tr>
        );
      })}
      </table>
     
      
    </div>
  );
};

export default Bai2;




