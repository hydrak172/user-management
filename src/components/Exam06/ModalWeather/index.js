import React, { useEffect, useState } from "react";
import { } from './style'
// import { ButtonAction, Actions, Country, Image, Population } from "./style";
import { Modal } from "antd";
import axios from "axios";
import src from "./../../../assets/doam.png"
import { Head } from "./style"
// import { render } from "@testing-library/react";

const WeatherList = ({ name }) => {
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (name !== '') {
            axios.get(`https://api.weatherapi.com/v1/current.json?key=83002ef8ea774f109ce133718232403&q=${name}&aqi=no`).then(res => {
                setData(res.data)
                console.log(res.data)
                setOpen(true)
            })
        }
    }, [name]);


    const onCancel = () => {
        setOpen(false)
    }
    return (
        <Modal open={open} onCancel={onCancel} footer={null}>
            {data.location && data.current && (
                <div>
                    <Head>Information Temp</Head>
                    <div>Thanh Pho :{data.location.name}</div>
                    <div>lon:{data.location.lon},lat:{data.location.lat}</div>
                    <div>Nhiet do :
                        <div>
                            {data.current.temp_c}
                        </div>
                    </div>
                    <div>Thoi tiet :
                        <div>
                            <img src={data.current.condition.icon} width={20}></img>
                            {data.current.condition.text}
                        </div>
                    </div>
                    <div>Toc do gio :
                        <div>
                            {data.current.wind_mph}
                        </div>
                    </div>
                    <div>Do am :
                        <div>
                            {data.current.humidity}
                        </div>
                    </div>
                    <div>Nhiet do co the :
                        <div>
                            <img src={src} width={20}></img>
                            {data.current.feelslike_c}
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default WeatherList;