import express from 'express';
import cors from 'cors';

const app = express();

// Middleware setup
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the ShopStack-API!' });
});

export default app;