const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (img, res) => {
    res.send('<h1>Docker + Azure App Service 배포 성공! 🎉</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});