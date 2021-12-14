//
//* ─── IMPORTS ───────────────────────────────────────────────────────────────────
//
import express from 'express';

import RequestRequirements from '../middlewares/Requirements.js';
import IPBreach from '../middlewares/IPBreach.js';
import ObjectId from '../middlewares/ObjectId.js';

import AuthController from '../controller/AuthController.js';
// ────────────────────────────────────────────────────────────────────────────────
//
//* ─── CONFIG ────────────────────────────────────────────────────────────────────
//
const router = express.Router();

const _requestRequirements = new RequestRequirements();
const _ipBreach = new IPBreach();
//const _objectId = new ObjectId();

const authController = new AuthController();
// ────────────────────────────────────────────────────────────────────────────────

router.post('/connect', _ipBreach.checkTooManyRequest, _requestRequirements.payloadValidator, authController.connect);

export default router;