//ten cua class va components thuong viet hoa dau cau . vd SearchBox
//funtion la dong tu  , vidu hadleClick
import React, { useEffect } from "react";

import { Input, InputNumber, Modal, Form } from "antd";

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
            <Modal title="Add NewStudent" open={props.isModalOpen} onOk={onSubmit} onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <Form.Item
                        name='name'
                        label="Ten Ho"
                        rules={[{ required: true, message: 'Ten la du lieu bat buoc' }]}>
                        <Input placeholder='Nguyen Van A' />
                    </Form.Item>
                    <Form.Item
                        name='Email'
                        label="Email"
                        rules={
                            [{ required: true, message: 'Email la du lieu bat buoc' },
                            { type: 'email', message: 'Da nhap sai cau truc email' }]}>
                        <Input placeholder='NguyenVanA@gmail.com' />
                    </Form.Item>
                    <Form.Item
                        name='studentId'
                        label="MS Student"
                        rules={[{ required: true, message: 'ID la du lieu bat buoc' }]}>
                        <InputNumber placeholder='123' />
                    </Form.Item>
                    <Form.Item
                        name='score'
                        label="Diem"
                        rules={
                            [{ required: true, message: 'Score la du lieu bat buoc' },
                            { type: 'number', message: 'Chi duoc nhap so' }]}>
                        <InputNumber placeholder='5' />
                    </Form.Item>
                    <Form.Item
                        name='className'
                        label="Lop"
                        rules={[{ required: true, message: 'Khong co "Lop" sao ma hoc' }]}>
                        <Input placeholder='12A3' />
                    </Form.Item>
                </Form>
            </Modal>
        </div>

    );
};

export default TableList;