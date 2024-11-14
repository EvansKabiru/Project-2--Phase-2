import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CargoForm = ({ selectedCargo, onSave, onCancel }) => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    description: '',
    weight: '',
    status: '',
    conditionRating: ''
  });

  useEffect(() => {
    if (selectedCargo) {
      setForm(selectedCargo);
    }
  }, [selectedCargo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCargo) {
      axios.put`(http://localhost:5173/cargo/${selectedCargo.id}, form)`
        .then(() => onSave())
        .catch(error => console.error('Error updating cargo:', error));
    } else {
      axios.post('http://localhost:5173/cargo', form)
        .then(() => onSave())
        .catch(error => console.error('Error adding cargo:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cargo-form">
      <h2>{selectedCargo ? 'Edit Cargo' : 'Add Cargo'}</h2>
      
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <label>Category</label>
      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
      />

      <label>Weight</label>
      <input
        type="text"
        name="weight"
        value={form.weight}
        onChange={handleChange}
        required
      />

      <label>Status</label>
      <input
        type="text"
        name="status"
        value={form.status}
        onChange={handleChange}
        required
      />

      <label>Condition Rating</label>
      <input
        type="number"
        name="conditionRating"
        value={form.conditionRating}
        onChange={handleChange}
        min="1"
        max="5"
        required
      />

      <button type="submit">{selectedCargo ? 'Update' : 'Add'} Cargo</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default CargoForm;      
        