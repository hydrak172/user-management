import React from "react";
//book: title ,author,description,type,so trang 
//tyle-componant
//API
import { UserOutlined } from '@ant-design/icons'
import { ButtonAction, Actions, Country, Image, Population } from "./style";
import { Table, Button } from "antd";
// import { render } from "@testing-library/react";
const getColor = (population) => {
    if (population < 5) {
        return 'darkgrey';
    }
    if (population < 10) {
        return 'darkorange';
    }
    return "darkred"
}

const TableList = (props) => {

    const columns = [
        {
            title: "Ten Quoc Gia ",
            dataIndex: "name",
            key: "name",
            width: "20%",
            align: "center"
        },
        // {
        //     title: "Quoc Gia ",
        //     dataIndex: "country",
        //     key: "country",
        // },
        // {
        //     title: "Ma Quoc Gia",
        //     dataIndex: "countryCode",
        //     key: "countryCode",
        // },
        {
            title: "Quoc Ky",
            dataIndex: "countryFlag",
            key: "countryFlag",
            width: "20%",
            align: "center",
            render: (_, item) => {
                console.log(item.countryFlag)
                return (
                    <Country>
                        <Image src={item.countryFlag} />
                        <div>
                            <h6 >{item.country}</h6>
                            <div>{item.countryCode}</div>
                        </div>
                    </Country>
                )
            }
        },
        {
            title: "Dan so",
            dataIndex: "population",
            key: "population",
            width: "20%",
            align: "center",
            render: (_, item) => {
                const color = getColor(item.population)
                return (
                    <Population color={color}>{item.population} <UserOutlined /></Population>
                )
            }
        },
        {
            title: "",
            dataIndex: "actions",
            width: "20%",
            align: "center",
            render: (text, item) => {
                return (
                    <Actions>
                        <Button onClick={() => { props.onGetWeather(item.name) }}>Weater</Button>
                        <ButtonAction disabled={props.itemLoading} onClick={() => { props.onEdit(item.id) }}>Edit</ButtonAction>
                        <ButtonAction disabled={props.itemLoading} onClick={() => { props.onDelete(item.id) }}>Delete</ButtonAction>
                    </Actions>
                )
            }
        }
    ];

    return (
        <div><Table loading={props.loading} dataSource={props.dataSource} columns={columns} /></div>
    );
};

export default TableList;