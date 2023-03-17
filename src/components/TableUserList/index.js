import React from "react";
const TableUserList = (props) => {
    return (
      <table border>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        </tr>
        {props.userList.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button
                  onClick={(e) => {
                      props.onEdit(item);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                      props.onDelete(item);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    );
  };
  
  export default TableUserList;
  