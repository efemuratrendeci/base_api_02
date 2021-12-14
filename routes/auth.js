//
//* ─── IMPORTS ───────────────────────────────────────────────────────────────────
//
import express from 'express';

import RequestRequirements from '../middlewares/Requirements.js';

import AuthController from '../controller/AuthController.js';
// ────────────────────────────────────────────────────────────────────────────────
//
//* ─── CONFIG ────────────────────────────────────────────────────────────────────
//
const router = express.Router();

const _requestRequirements = new RequestRequirements();
const authController = new AuthController();
// ────────────────────────────────────────────────────────────────────────────────

router.post('/connect', _requestRequirements.payloadValidator, authController.connect);

export default router;