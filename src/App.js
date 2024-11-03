// src/App.js
import React, { useState } from 'react';
import FormView from './components/FormView';
import PackageList from './components/PackageList';
import 'antd/dist/reset.css'; // Importar los estilos de Ant Design

function App() {
  const [currentView, setCurrentView] = useState('formView'); // Estado para controlar qué vista se muestra
  const [formData, setFormData] = useState(null); // Estado para almacenar los datos del formulario

  // Esta función se llama cuando se hace clic en el botón "Siguiente" en FormView
  const handleFormSubmit = (data) => {
    setFormData(data);
    setCurrentView('packageList'); // Cambiar a la vista de paquetes
  };

  // Función para manejar el botón "Regresar" desde la vista de PackageList
  const handleBackToForm = () => {
    setCurrentView('formView'); // Cambiar a la vista del formulario
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      {currentView === 'formView' ? (
        <FormView onNext={handleFormSubmit} />
      ) : (
        <PackageList onBack={handleBackToForm} />
      )}
    </div>
  );
}

export default App;
