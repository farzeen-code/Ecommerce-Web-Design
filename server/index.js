const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allows your React frontend to talk to this server
app.use(express.json());

app.get('/api/products', (req, res) => {
    // This is "Dummy Data" for Week 1
    res.json([{ id: 1, name: "Smart Watch", price: 100 }]);
});

app.listen(5000, () => console.log("Server running on port 5000"));