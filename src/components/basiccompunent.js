import React from "react";
import { Table } from "antd";

const TableList = (props) => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default TableList;