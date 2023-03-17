//ten cua class va components thuong viet hoa dau cau . vd SearchBox
//funtion la dong tu  , vidu hadleClick



import React from "react";
import { useState } from "react";
import { Button } from "antd";
import TableStudent from './TableStudent/index.js'
import ModalFormStudent from './ModalFormStudent/index.js'

const DEFAULT_USER = { name: '', email: '', phone: '' }

const TableList = (props) => {
  // const [modal,contexHolder]=Modal.useModal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };



  const [formData, setFormData] = useState(DEFAULT_USER);
  const [dataSource, setdataSource] = useState([
    { name: "Khanh", studentId: "119221", score: "0", className: "1" },
    { name: "Khan", studentId: "119222", score: "1", className: "2" },
    { name: "Kha", studentId: "119223", score: "2", className: "1" },
    { name: "Kh", studentId: "119224", score: "3", className: "2" },
    { name: "K", studentId: "119225", score: "4", className: "1" }
  ]);
  const onSubmit = ({ id, data }) => {
    if (id) {
      const newDataSource = dataSource.map((item) => {
        return item.id === id ? { id: id, ...data } : item;
      });
      setdataSource(newDataSource)
    }
    else {
      setdataSource([
        ...dataSource,
        {
          id: Math.random(),
          ...data
        },
      ]);
    }
    setIsModalOpen(false);
    setFormData(DEFAULT_USER)
  }
  const onChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const onCreate = () => {
    setFormData(DEFAULT_USER);
    setIsModalOpen(true);
  }
  const onEdit = (student) => {
    setFormData(student)
    setIsModalOpen(true);
  }
  const onDelete = (item) => {
    const newDataSource = dataSource.filter((user) => {
      return user.id !== item.id
    })
    // modal.confirm({
    //   title: 'Ban chac chan muon xoa du lieu nay chu ?',
    //   content: 'Du lieu nay se bien mat vinh vien'
    //   onOk:()=>{
    //     debugger
    //   }
    // }
    setdataSource(newDataSource)
  }
  // 

  return (
    <div>
      <div>
        <Button type="primary" onClick={onCreate}>
          Create New
        </Button>
        <ModalFormStudent title="Add NewStudent"
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onSubmit={onSubmit}
          onChange={onChange}
          formData={formData}
        >
        </ModalFormStudent>
        <TableStudent data={dataSource} onEdit={onEdit} onRemove={onDelete} />
      </div>
    </div>
  );
};

export default TableList;