// src/components/FormView.js
import React from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Option } = Select;

const FormView = ({ onNext }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Datos del Formulario:', values);
    onNext(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
    >
      <Form.Item
        label="Dirección de recolección"
        name="direccionRecoleccion"
        rules={[{ required: true, message: 'Por favor ingrese la dirección de recolección' }]}
      >
        <Input prefix={<EnvironmentOutlined />} />
      </Form.Item>

      <Form.Item
        label="Fecha Programada"
        name="fechaProgramada"
        rules={[{ required: true, message: 'Por favor seleccione la fecha programada' }]}
      >
        <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Nombres"
        name="nombres"
        rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Apellidos"
        name="apellidos"
        rules={[{ required: true, message: 'Por favor ingrese sus apellidos' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Correo Electrónico"
        name="correo"
        rules={[{ required: true, type: 'email', message: 'Por favor ingrese un correo electrónico válido' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Teléfono"
        name="telefono"
        rules={[{ required: true, message: 'Por favor ingrese su número de teléfono' }]}
      >
        <Input prefix={<PhoneOutlined />} />
      </Form.Item>

      <Form.Item
        label="Dirección del destinatario"
        name="direccionDestinatario"
        rules={[{ required: true, message: 'Por favor ingrese la dirección del destinatario' }]}
      >
        <Input prefix={<EnvironmentOutlined />} />
      </Form.Item>

      <Form.Item
        label="Departamento"
        name="departamento"
        rules={[{ required: true, message: 'Por favor seleccione el departamento' }]}
      >
        <Select placeholder="Seleccione un departamento">
          <Option value="San Salvador">San Salvador</Option>
          <Option value="La Libertad">La Libertad</Option>
          <Option value="Santa Ana">Santa Ana</Option>
          {/* Agrega más departamentos según sea necesario */}
        </Select>
      </Form.Item>

      <Form.Item
        label="Municipio"
        name="municipio"
        rules={[{ required: true, message: 'Por favor seleccione el municipio' }]}
      >
        <Select placeholder="Seleccione un municipio">
          <Option value="San Salvador">San Salvador</Option>
          <Option value="Santa Tecla">Santa Tecla</Option>
          <Option value="Soyapango">Soyapango</Option>
          {/* Agrega más municipios según sea necesario */}
        </Select>
      </Form.Item>

      <Form.Item
        label="Punto de Referencia"
        name="puntoReferencia"
        rules={[{ required: false }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Indicaciones"
        name="indicaciones"
        rules={[{ required: false }]}
      >
        <Input.TextArea rows={3} />
      </Form.Item>

      <Button type="primary" htmlType="submit" style={{ marginTop: '20px' }}>
        Siguiente
      </Button>
    </Form>
  );
};

export default FormView;
