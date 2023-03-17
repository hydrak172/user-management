import React from "react";
//book: title ,author,description,type,so trang 
//tyle-componant
//API
import { Actions } from "./style";
import { Table,Button } from "antd";

const TableList = (props) => {

  const columns = [
    {
      title: "Book Name ",
      dataIndex: "Title",
      key: "Title",
      width:'10%'
    },
    {
      title: "Tac Gia ",
      dataIndex: "Author",
      key: "Author",
      width:'10%'
    },
    {
      title: "Mieu ta sach",
      dataIndex: "Description",
      key: "Description",

    },
    {
      title: "Kieu Sach",
      dataIndex: "type",
      key: "type",
      width:'10%'
    },
    {
        title: "So trang",
        dataIndex: "NumberPage",
        key: "NumberPage",
        width:'5%'
    },
    {
      title: "",
      dataIndex: "actions",
      width:'10%',
      render: (text, item) => {
        return (
          <Actions>
            <Button onClick={() => { props.onEdit(item) }}>Edit {item.name}</Button>
            <Button onClick={() => { props.onRemove(item) }}>Delete</Button>
          </Actions>
        )
      }
    }
  ];

  return (
    <div><Table dataSource={props.data} columns={columns} /></div>
  );
};

export default TableList;