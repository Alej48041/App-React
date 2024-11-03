// src/App.js
import React, { useState } from 'react';
import FormView from './components/FormView';
import PackageList from './components/PackageList';
import 'antd/dist/reset.css'; 

function App() {
  const [currentView, setCurrentView] = useState('formView'); 
  const [formData, setFormData] = useState(null); 

  const handleFormSubmit = (data) => {
    setFormData(data);
    setCurrentView('packageList');
  };

  const handleBackToForm = () => {
    setCurrentView('formView');
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
