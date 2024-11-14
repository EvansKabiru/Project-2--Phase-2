import React from 'react';

const CargoDetails = ({ cargo }) => {
  if (!cargo) {
    return <p>Please select a cargo item to view its details.</p>;
  }

  return (
    <div className="cargo-details">
      <h2>Cargo Details</h2>
      <p><strong>Name:</strong> {cargo.name}</p>
      <p><strong>Category:</strong> {cargo.category}</p>
      <p><strong>Description:</strong> {cargo.description}</p>
      <p><strong>Weight:</strong> {cargo.weight}</p>
      <p><strong>Status:</strong> {cargo.status}</p>
      <p><strong>Condition Rating:</strong> {cargo.conditionRating} / 5</p>
    </div>
  );
};

export default CargoDetails;