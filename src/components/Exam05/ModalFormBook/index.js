//ten cua class va components thuong viet hoa dau cau . vd SearchBox
//funtion la dong tu  , vidu hadleClick
import React, { useEffect } from "react";

import { Input, Modal, Form, Select } from "antd";
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
        props.setIsModalOpen(false);
    };
    return (
        <div>
            <Modal title="Add Book" open={props.isModalOpen} onOk={onSubmit} onCancel={handleCancel}>
                <NewForm form={form} layout="vertical">
                    <Form.Item
                        name='title'
                        label="Book Name"
                        rules={[{ required: true, message: 'Ten la du lieu bat buoc' }]}>
                        <Input placeholder='Sach Giao Khoa' />
                    </Form.Item>
                    <Form.Item
                        name='author'
                        label="Tac Gia"
                        rules={
                            [{ required: true, message: 'Tac Gia la du lieu bat buoc' },
                            ]}>
                        <Input placeholder='Khanh' />
                    </Form.Item>
                    <Form.Item
                        name='description'
                        label="Mieu ta sach"
                        rules={[{ required: false, message: 'Mieu ta sach la du lieu bat buoc' }, { max: 2000, message: 'Mieu ta khong qua 2000 ki tu' }]}>
                        <Input.TextArea placeholder='...' />
                    </Form.Item>
                    <Form.Item
                        name='type'
                        label="Kieu Sach"
                        rules={[{ required: true, message: 'Kieu Sach la can thiet' }]}>
                        <Select options={[
                            { value: 'VN', label: 'Tieu thuyet' },
                            { value: 'US', label: 'Hanh dong' },
                            { value: 'VN', label: 'Tinh cam' },
                            { value: 'US', label: 'Kinh di' },
                        ]} />
                    </Form.Item>
                    <Form.Item
                        name='page'
                        label="So trang"
                        rules={
                            [{ required: true, message: 'so trang la du lieu bat buoc' },
                            { type: 'number', message: 'Chi duoc nhap so' }]}>
                        <PageNumber placeholder='50' />
                    </Form.Item>
                </NewForm>
            </Modal>
        </div>

    );
};

export default TableList;