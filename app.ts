import 'dotenv/config'
import express, { Router } from 'express'
import cors from 'cors';
import route from './common/route'
import Connect from './configs/connect.config'
import morgan from 'morgan'

Connect();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
route(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

export default app