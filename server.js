// Chat app server
const express = require('express');

const app = express();
const port = 3000 || process.env.PORT;
app.listen(PORT, () => console.Console.log(`Server running on port ${PORT}`)); 
