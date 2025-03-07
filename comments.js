// Create web server
// Create a new web server using the express module

const express = require('express');
const app = express();
const port = 3000;

// Set up the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});