import React from 'react';
import { useState } from "react";

const Homework4 = () => {
  const [user, setUser] = useState({ firstname: '', lastname: '' });
  const [userList, setUserList] = useState([]);
  const onClick = () => {
    setUserList([
      ...userList,
      user
    ]);

    setUser({ firstname: "", lastname: '' })
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
        <input name='firstname' value={user.firstname} onChange={onChange} />
        <input name='lastname' value={user.lastname} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </div>
      <table>
        <tr>
          <th >Ho va Ten </th>
        </tr>
        <tr>
          <td >Full Name: {item.firstname} {item.lastname}</td>
        </tr>
      </table>


    </div>
  );
};

export default Homework4;




