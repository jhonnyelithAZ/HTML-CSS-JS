const express = require('express');
const cors = require('cors');
const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: 'Pikachu', tipo: 'Elétrico', stock: 10 },
];

app.get('/api/productos', (req, res) => {
  res.json(products);
});



app.post('api/productos', (req, res) => {
    const nuevo ={id: Date.now(), ...req.body};
    products.push(nuevo);
    res.status(201).json(nuevo);
});

app.listen(3000, () => console.log('API corriendo en http://localhost:3000'));
