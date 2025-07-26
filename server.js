import app from './api/index.js';
import { config } from 'dotenv';

config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});