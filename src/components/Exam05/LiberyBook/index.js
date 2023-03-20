import React from "react";
//book: title ,author,description,type,so trang 
//tyle-componant
//API
import { ButtonAction, Actions } from "./style";
import { Table, Button } from "antd";

const TableList = (props) => {

  const columns = [
    {
      title: "Book Name ",
      dataIndex: "title",
      key: "title",
      width: '10%'
    },
    {
      title: "Tac Gia ",
      dataIndex: "author",
      key: "author",
      width: '10%'
    },
    {
      title: "Mieu ta sach",
      dataIndex: "description",
      key: "description",

    },
    {
      title: "Kieu Sach",
      dataIndex: "type",
      key: "type",
      width: '10%'
    },
    {
      title: "So trang",
      dataIndex: "page",
      key: "page",
      width: '5%'
    },
    {
      title: "",
      dataIndex: "actions",
      width: '10%',
      render: (text, item) => {
        return (
          <Actions>
            <ButtonAction onClick={() => { props.onEdit(item.id) }}>Edit {item.name}</ButtonAction>
            <ButtonAction onClick={() => { props.onRemove(item) }}>Delete</ButtonAction>
          </Actions>
        )
      }
    }
  ];

  return (
    <div><Table dataSource={props.dataSource} columns={columns} /></div>
  );
};

export default TableList;