//ten cua class va components thuong viet hoa dau cau . vd SearchBox
//funtion la dong tu  , vidu hadleClick



import React from "react";
import { useState } from "react";
// import { Button } from "antd";
import LiberyBook from './LiberyBook/index.js'
import ModalFormBook from './ModalFormBook/index.js'
import {ButtonCreate} from './style'

const DEFAULT_BOOK = { Title: '', Author: '', Description: '', type: '', NumberPage: 0  }

const TableList = (props) => {
  // const [modal,contexHolder]=Modal.useModal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };



  const [formData, setFormData] = useState(DEFAULT_BOOK);
  const [dataSource, setdataSource] = useState([
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
    setFormData(DEFAULT_BOOK)
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
    setFormData(DEFAULT_BOOK);
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
        <ButtonCreate type="primary" onClick={onCreate}>
          Create New
        </ButtonCreate>
        <ModalFormBook title="Add Book"
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onSubmit={onSubmit}
          onChange={onChange}
          formData={formData}
        >
        </ModalFormBook>
        <LiberyBook data={dataSource} onEdit={onEdit} onRemove={onDelete} />
      </div>
    </div>
  );
};

export default TableList;