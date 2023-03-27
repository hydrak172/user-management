import readXlsxFile from "read-excel-file";
import { Upload, Button } from "antd";
import React from "react";

const decodeData = (data) => {
    return {
        name: data[0],
        country: data[1],
        population: data[2],
        countryFlag: data[3]
    }
}
const ButtonImport = (props) => {
    const beforeUpload = (file) => {
        const isUnder2MB = file.size / 1024 / 1024 < 2 //nghia la duoi 2 mb
        return isUnder2MB
    }
    const customRequest = (info) => {
        const { file } = info
        readXlsxFile(file).then((data) => {
            const dataSource = []
            for (let i = 1; i < data.length; i++) {
                const city = decodeData(data[i])
                dataSource.push(city)
            }
            props.onImport(dataSource)
        })
    }
    return (
        <Upload
            name="file"
            accept=".xlsx"
            multiple={false}
            showUploadList={false}
            beforeUpload={beforeUpload}
            customRequest={customRequest}
        >
            <Button>Nhap du lieu tu Excel</Button>
        </Upload>
    )
}
export default ButtonImport;