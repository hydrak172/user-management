import React from "react";

import { Table } from "antd";

const TableList = (props) => {

  const columns = [
    {
      title: "Ten Student ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "MS Student ",
      dataIndex: "studentId",
      key: "studentId",
    },
    {
      title: "Diem",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Lop",
      dataIndex: "className",
      key: "className",
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, item) => {
        return (
          <div>
            <button onClick={() => { props.onEdit(item) }}>Edit {item.name}</button>
            <button onClick={() => { props.onRemove(item) }}>Delete</button>
          </div>
        )
      }
    }
  ];

  return (
    <div><Table dataSource={props.data} columns={columns} /></div>
  );
};

export default TableList;