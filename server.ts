import express from 'express';
import calculosRoute from './src/routes/authRoute'

const app = express();
app.use(express.json());
app.use('/api/auth', calculosRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'))