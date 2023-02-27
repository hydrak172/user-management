import React from 'react';
import { useState } from "react";

const Bai2 = () => {
  const [user, setUser] = useState({ name: "", email: '' });
  const [userList, setUserList] = useState([
    { name: "123", email: '123Gmail.com' },
    { name: "456", email: '456@gmail.com' },
  ]);

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

      {userList.map((item) => {
        return (
          <div>
            <div>Ten cua hoc sinh: {item.name}</div>
            <div>Email cua hoc sinh: {item.email}</div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Bai2;




