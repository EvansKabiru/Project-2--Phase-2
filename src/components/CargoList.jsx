import React from 'react';

const CargoList = ({ cargoItems, onSelect, onDelete }) => {
  return (
    <div className="cargo-list">
      <h2>All Cargo</h2>
      {cargoItems.map((cargo) => (
        <div key={cargo.id} className="cargo-item" onClick={() => onSelect(cargo)}>
          <h3>{cargo.name}</h3>
          <p>Category: {cargo.category}</p>
          <p>Status: {cargo.status}</p>
          <button onClick={(e) => { e.stopPropagation(); onDelete(cargo.id); }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CargoList;