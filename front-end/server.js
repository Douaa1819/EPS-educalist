const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, 
}));


app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
