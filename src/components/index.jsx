const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const dbFilePath = path.join(__dirname, 'db.json');

// Helper functions to read and write to db.json
const readData = () => {
  const data = fs.readFileSync(dbFilePath);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

// Routes
app.get('/cargo', (req, res) => {
  const data = readData();
  res.json(data.cargo);
});

app.get('/cargo/:id', (req, res) => {
  const data = readData();
  const cargoItem = data.cargo.find((item) => item.id === parseInt(req.params.id));
  if (cargoItem) {
    res.json(cargoItem);
  } else {
    res.status(404).json({ message: 'Cargo item not found' });
  }
});

app.post('/cargo', (req, res) => {
  const data = readData();
  const newCargo = {
    id: Date.now(),
    ...req.body,
  };
  data.cargo.push(newCargo);
  writeData(data);
  res.status(201).json(newCargo);
});

app.put('/cargo/:id', (req, res) => {
  const data = readData();
  const cargoIndex = data.cargo.findIndex((item) => item.id === parseInt(req.params.id));
  if (cargoIndex !== -1) {
    data.cargo[cargoIndex] = { ...data.cargo[cargoIndex], ...req.body };
    writeData(data);
    res.json(data.cargo[cargoIndex]);
  } else {
    res.status(404).json({ message: 'Cargo item not found' });
  }
});

app.delete('/cargo/:id', (req, res) => {
  const data = readData();
  const updatedCargo = data.cargo.filter((item) => item.id !== parseInt(req.params.id));
  if (updatedCargo.length !== data.cargo.length) {
    data.cargo = updatedCargo;
    writeData(data);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Cargo item not found' });
  }
});

app.listen(PORT, () => {
  console.log`(Server running on http://localhost:${PORT})`;
});