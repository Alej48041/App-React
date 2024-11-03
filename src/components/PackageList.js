// src/components/PackageList.js
import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, notification, Card } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const PackageList = ({ onBack }) => {
  const [form] = Form.useForm();
  const [packages, setPackages] = useState([]);

  // Agregar un bulto a la lista de paquetes
  const onFinish = (values) => {
    setPackages([...packages, values]);
    form.resetFields(); // Limpiar los campos del formulario
    notification.success({
      message: 'Bulto agregado',
      description: 'El bulto se agregó exitosamente.',
    });
  };

  // Eliminar un bulto de la lista
  const removePackage = (index) => {
    const newPackages = [...packages];
    newPackages.splice(index, 1);
    setPackages(newPackages);
    notification.info({
      message: 'Bulto eliminado',
      description: 'El bulto ha sido eliminado de la lista.',
    });
  };

  // Enviar toda la lista de bultos
  const handleSubmitAll = () => {
    if (packages.length === 0) {
      notification.error({
        message: 'Error',
        description: 'Debe agregar al menos un bulto antes de enviar.',
      });
      return;
    }
    console.log('Enviando los siguientes paquetes:', packages);
    notification.success({
      message: 'Datos enviados',
      description: 'Los datos han sido enviados exitosamente.',
    });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h3>Agrega tus bultos</h3>
      <Card bordered={false} style={{ border: '1px solid #e8e8e8', marginBottom: '20px' }}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item label="Largo" name="largo" rules={[{ required: true, message: 'Ingrese el largo' }]}>
                <Input suffix="cm" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Alto" name="alto" rules={[{ required: true, message: 'Ingrese el alto' }]}>
                <Input suffix="cm" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Ancho" name="ancho" rules={[{ required: true, message: 'Ingrese el ancho' }]}>
                <Input suffix="cm" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Peso en libras" name="peso" rules={[{ required: true, message: 'Ingrese el peso' }]}>
                <Input suffix="lb" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Contenido" name="contenido" rules={[{ required: true, message: 'Ingrese el contenido' }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
            Agregar
          </Button>
        </Form>
      </Card>

      <h3>Bultos agregados</h3>
      {packages.length === 0 ? (
        <p>No hay bultos agregados todavía.</p>
      ) : (
        <div style={{ marginBottom: '20px' }}>
          {packages.map((pkg, index) => (
            <Card key={index} style={{ marginBottom: '10px', border: '1px solid #e8e8e8' }}>
              <Row gutter={16}>
                <Col span={4}>
                  <strong>Peso:</strong> {pkg.peso} lb
                </Col>
                <Col span={8}>
                  <strong>Contenido:</strong> {pkg.contenido}
                </Col>
                <Col span={4}>
                  <strong>Largo:</strong> {pkg.largo} cm
                </Col>
                <Col span={4}>
                  <strong>Alto:</strong> {pkg.alto} cm
                </Col>
                <Col span={4}>
                  <strong>Ancho:</strong> {pkg.ancho} cm
                </Col>
              </Row>
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => removePackage(index)}
                style={{ marginTop: '10px' }}
              >
                Eliminar
              </Button>
            </Card>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button type="default" onClick={onBack} style={{ width: '120px' }}>
          Regresar
        </Button>
        <Button type="primary" onClick={handleSubmitAll} style={{ width: '120px' }}>
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default PackageList;
