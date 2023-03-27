//ten cua class va components thuong viet hoa dau cau . vd SearchBox
//funtion la dong tu  , vidu hadleClick
// import { Input } from "antd";
import React from "react";
import { useState, useMemo, useEffect } from "react";
// import { Button } from "antd";
import LiberyBook from './LiberyBook/index.js'
import ModalFormBook from './ModalFormBook/index.js'
import { Modal } from "antd";
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
  const [tableLoading,setTableLoading]=useState(false);
  const [submitLoading,setsubmitLoading]=useState(false);
  const [itemLoading,setitemLoading]=useState(false);
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    setTableLoading(true)
    axios.get('https://64146a1b9172235b86942daf.mockapi.io/book').then((res) => {
      setdataSource(res.data)
      setTableLoading(false)
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

//GET
//INPUT : URL 
//OUTPUT: du lieu ma ban muon tim kiem hoac la rong 
//E.g :qpi.example.com/products/{id},api.example.com/users?page=1&limit=10

//POST : 
//INPUT :url,data
//OUTPUT : thuong thji tra ve du lieu vua duoc tao

//PUT&PATCH
//INPUT :url,data
//OUTPUT : thuong thji tra ve du lieu VUA DUOC CAP NHAT 

//DELETE
//INPUT :url,data
//OUTPUT : thuong thji tra ve du lieu VUA DUOC XOA /TRUE OR FALSE


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
    setsubmitLoading(true)
    if (id) {
      axios.put(`https://64146a1b9172235b86942daf.mockapi.io/book/${id}`, data).then((res) => {
      setsubmitLoading(false) 
      setIsModalOpen(false);
      setFormData(DEFAULT_BOOK) 
      fetchData()
      })
    }
    else {
      axios.post('https://64146a1b9172235b86942daf.mockapi.io/book', data).then((res) => {
        setsubmitLoading(false) 
        setIsModalOpen(false);
        setFormData(DEFAULT_BOOK)   
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
    setitemLoading(true)
    axios
      .get(`https://64146a1b9172235b86942daf.mockapi.io/book/${id}`)
      .then((res) => {
        setFormData(res.data)
        setitemLoading(false)
        setIsModalOpen(true);
      });
  }
  const onDelete = (id) => {
    setitemLoading(true)
    Modal.confirm({
      title: 'Ban chac chan muon xoa du lieu nay chu ?',
      content: 'Du lieu nay se bien mat vinh vien',
      onOk:()=>{
        axios
      .delete(`https://64146a1b9172235b86942daf.mockapi.io/book/${id}`)
      .then((res) => {
        setitemLoading(false)
        fetchData()
      });
      }
    })
  }
  // setdataSource(newDataSource)
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
        loading={submitLoading}
      >
      </ModalFormBook>
      <div>
        <LiberyBook itemLoading={itemLoading} loading={tableLoading} dataSource={searchBook} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default TableList;