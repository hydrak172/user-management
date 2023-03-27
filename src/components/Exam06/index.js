//ten cua class va components thuong viet hoa dau cau . vd SearchBox
//funtion la dong tu  , vidu hadleClick
// import { Input } from "antd";
import React from "react";
import { useState, useMemo, useEffect } from "react";
// import { Button } from "antd";
import TableCountry from './TableCountry/index.js'
import ModalFormCountry from './ModalFormCountry/index.js'
import ModalWeather from './ModalWeather/index.js'
import ButtonImport from './ButtonImport/index.js'
import { Modal } from "antd";
import { ButtonCreate, InputSeach, Search, Borderdiv } from './style'
import axios from "axios";

const DEFAULT_CITIES = { name: '', country: '', countryCode: '', population: 0, countryFlag: '' }

const TableList = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState(DEFAULT_CITIES);
    const [dataSource, setdataSource] = useState([
    ]);
    const [keyword, setKeyword] = useState('');
    const [tableLoading, setTableLoading] = useState(false);
    const [submitLoading, setsubmitLoading] = useState(false);
    const [itemLoading, setitemLoading] = useState(false);
    const [cityName, setCityName] = useState('');
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        setTableLoading(true)
        axios.get('https://64146a1b9172235b86942daf.mockapi.io/cities').then((res) => {
            setdataSource(res.data)
            setTableLoading(false)
        });
    }
    const searchBook = useMemo(() => {
        if (keyword) {
            return dataSource.filter((item) => {
                return item.name.includes(keyword) || item.country.includes(keyword)
            })
        }
        return dataSource
    }, [keyword, dataSource])

    const onSubmit = ({ id, data }) => {
        setsubmitLoading(true)
        if (id) {
            axios.put(`https://64146a1b9172235b86942daf.mockapi.io/cities/${id}`, data).then((res) => {
                setsubmitLoading(false)
                setIsModalOpen(false);
                setFormData(DEFAULT_CITIES)
                fetchData()
            })
        }
        else {
            axios.post('https://64146a1b9172235b86942daf.mockapi.io/cities', data).then((res) => {
                setsubmitLoading(false)
                setIsModalOpen(false);
                setFormData(DEFAULT_CITIES)
                fetchData()

            })
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
        setFormData(DEFAULT_CITIES);
        setIsModalOpen(true);
    }
    const onEdit = (id) => {
        setitemLoading(true)
        axios
            .get(`https://64146a1b9172235b86942daf.mockapi.io/cities/${id}`)
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
            onOk: () => {
                axios
                    .delete(`https://64146a1b9172235b86942daf.mockapi.io/cities/${id}`)
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
    const onGetWeather = (name) => {
        setCityName(name)
    }
    const onImport = async (items) => {
        setTableLoading(true)
        for (let i = 0; i < items.length; i++) {
            await axios.post('https://64146a1b9172235b86942daf.mockapi.io/cities', items[i])
        }

        fetchData()
    }
    //cach2
    // const onImport =  (items) => {
    //     const promise=[]
    //     for (let i = 0; i < items.length; i++) {
    //          promise.push(axios.post('https://64146a1b9172235b86942daf.mockapi.io/cities', items[i]))
    //     }
    //     Promise.all(promise).then(()=>{
    //         fetchData();
    //     }
    //     )
    // }
    return (
        <Borderdiv>
            <InputSeach>
                <Search onChange={onSearch} />
                <ButtonCreate onClick={onCreate}>
                    Add Cities
                </ButtonCreate>
            </InputSeach>
            <ButtonImport onImport={onImport} />
            <ModalFormCountry title="Add Book"
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                onSubmit={onSubmit}
                onChange={onChange}
                formData={formData}
                loading={submitLoading}
            >
            </ModalFormCountry>
            <ModalWeather name={cityName} />
            <div>
                <TableCountry onGetWeather={onGetWeather} itemLoading={itemLoading} loading={tableLoading} dataSource={searchBook} onEdit={onEdit} onDelete={onDelete} />
            </div>
        </Borderdiv>
    );
};

export default TableList;