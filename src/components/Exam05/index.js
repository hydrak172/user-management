//ten cua class va components thuong viet hoa dau cau . vd SearchBox
//funtion la dong tu  , vidu hadleClick
// import { Input } from "antd";
import React from "react";
import { useState, useMemo, useEffect } from "react";
// import { Button } from "antd";
import LiberyBook from './LiberyBook/index.js'
import ModalFormBook from './ModalFormBook/index.js'
import { ButtonCreate, InputSeach, Search } from './style'
import axios from "axios";

const DEFAULT_BOOK = { title: '', author: '', description: '', type: '', page: 0 }

const TableList = (props) => {
  // const [modal,contexHolder]=Modal.useModal();
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_BOOK);
  const [dataSource, setdataSource] = useState([
  ]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios.get('https://64146a1b9172235b86942daf.mockapi.io/book').then((res) => {
      setdataSource(res.data)
    });
  }
  //GET: LAY THONG TIN DU LIEU 
  //exios.get(url)
  // POST : SU DUNG KHI MUON TAO MOI DU LIEU 
  //axios.post(url,formData) //du lieu vua duoc tao tren server
  // PUT /PATCH : SU DUNG KHI UPDATE DU LIEU 
  //axios.put(url,formData) //du lieu vua duoc cap nhat tren server
  //axios.patch(url,formData) //du lieu vua duoc cap nhat tren server
  // DELETE : SU DUNG KHI MUON XOA DU LIEU DO 
  //exios.delete(url) //true or false
  //cach them du lieu thu 2 
  // useEffect(async() => {
  //   const res= await axios.get('https://64146a1b9172235b86942daf.mockapi.io/book')
  //    setdataSource(res.data)
  // }, [])       
  //timkiem sach

  const searchBook = useMemo(() => {
    if (keyword) {
      return dataSource.filter((item) => {
        return item.title.includes(keyword) || item.author.includes(keyword)
      })
    }
    return dataSource
  }, [keyword, dataSource])

  const onSubmit = ({ id, data }) => {
    if (id) {
      axios.put(`https://64146a1b9172235b86942daf.mockapi.io/book/${id}`, data).then((res) => {
        fetchData()
      })
    }
    else {
      axios.post('https://64146a1b9172235b86942daf.mockapi.io/book', data).then((res) => {
        fetchData()
      })
      // // setdataSource([
      // //   ...dataSource,
      // //   {
      // //     id: Math.random(),
      // //     ...data
      // //   },
      // ]);
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
  const onEdit = (id) => {
    axios
      .get(`https://64146a1b9172235b86942daf.mockapi.io/book/${id}`)
      .then((res) => {
        setFormData(res.data)
        setIsModalOpen(true);
      });

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
  const onSearch = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <div>
      <InputSeach>
        <Search onChange={onSearch} />
        <ButtonCreate onClick={onCreate}>
          Create New
        </ButtonCreate>
      </InputSeach>
      <ModalFormBook title="Add Book"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onSubmit={onSubmit}
        onChange={onChange}
        formData={formData}
      >
      </ModalFormBook>
      <div>
        <LiberyBook dataSource={searchBook} onEdit={onEdit} onRemove={onDelete} />
      </div>
    </div>
  );
};

export default TableList;