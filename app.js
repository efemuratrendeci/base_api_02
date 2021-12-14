//
//* ─── IMPORTS ───────────────────────────────────────────────────────────────────
//
import './core/enviroment.js';
import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.js';

import ErrorController from './controller/ErrorController.js';
import AppInfo from './core/AppInfo.js';
import AppBuilder from './core/AppBuilder.js';
import ApiOptions from './middlewares/ApiOptions.js';
// ────────────────────────────────────────────────────────────────────────────────
//
//* ─── INITIALIZE ────────────────────────────────────────────────────────────────
//

const errorController = new ErrorController();
const _apiOptions = new ApiOptions();
const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
});
// ────────────────────────────────────────────────────────────────────────────────
//
//* ─── ROUTING ───────────────────────────────────────────────────────────────────
//
app.use(`${process.env.BASE_ROUTE || ''}/auth`, _apiOptions.isHttpStatusDisabled, authRoutes);

app.use('/', _apiOptions.isHttpStatusDisabled, errorController.getNotFound);
app.use((error, req, res, next) => errorController.getSystemError(req, res, next, error));
// ────────────────────────────────────────────────────────────────────────────────


new AppBuilder();
console.log('Application initialized');
app.listen(AppInfo.PORT);