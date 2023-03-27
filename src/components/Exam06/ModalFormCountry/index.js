//ten cua class va components thuong viet hoa dau cau . vd SearchBox
//funtion la dong tu  , vidu hadleClick
import React, { useEffect } from "react";

import { Input, Modal, Form } from "antd";
import { PageNumber, NewForm } from './style'

const TableList = (props) => {
    const [form] = Form.useForm()
    const onSubmit = async () => {
        const values = await form.validateFields()
        props.onSubmit({ id: props.formData.id, data: values })
    };
    useEffect(() => {
        if (!props.isModalOpen) {
            form.resetFields()
        }
    })
    useEffect(() => {
        if (props.isModalOpen && props.formData.id) {
            form.setFieldsValue(props.formData)
        }
    }, [props.isModalOpen, props.formData])
    const handleCancel = () => {
        if (!props.loading) {
            props.setIsModalOpen(false);
        }
    };
    return (
        <div>
            <Modal title="Add Book" confirmLoading={props.loading} open={props.isModalOpen || props.loading} onOk={onSubmit} onCancel={handleCancel}>
                <NewForm form={form} layout="vertical">
                    <Form.Item
                        name='name'
                        label="Ten Quoc Ky"
                        rules={[{ required: true, message: 'Ten la du lieu bat buoc' }]}>
                        <Input placeholder='VietNam' />
                    </Form.Item>
                    <Form.Item
                        name='country'
                        label="Quoc Ky"
                        rules={
                            [{ required: true, message: 'Quoc Ky la du lieu bat buoc' },
                            ]}>
                        <Input placeholder='VN' />
                    </Form.Item>
                    <Form.Item
                        name='countryCode'
                        label="MA Quoc Ky"
                        rules={[{ required: false, message: 'MA Quoc Ky la du lieu bat buoc' }, { max: 2000, message: 'Mieu ta khong qua 2000 ki tu' }]}>
                        <Input.TextArea placeholder='...' />
                    </Form.Item>
                    <Form.Item
                        name='countryFlag'
                        label="Co Quoc Ky"
                        rules={[{ required: true, message: 'Co Quoc Ky la can thiet' }]}>
                        {/* <Select options={[
                            { value: 'US', label: 'Tieu thuyet' },
                            { value: 'UK', label: 'Hanh dong' },
                            { value: 'VN', label: 'Tinh cam' },
                            { value: 'DNA', label: 'Kinh di' },
                        ]} /> */}
                        <Input placeholder="https://loremflickr.com/640/480/abstract" />
                    </Form.Item>
                    <Form.Item
                        name='population'
                        label="Dan So"
                        rules={
                            [{ required: true, message: 'Dan so la du lieu bat buoc' },
                            { type: 'number', message: 'Chi duoc nhap so' }]}>
                        <PageNumber placeholder='50' />
                    </Form.Item>
                </NewForm>
            </Modal>
        </div>

    );
};

export default TableList;