//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//
import ControllerService from "../core/services/ControllerService.js";
import JWTModel from '../models/api/JWTModel.js';

import jwt from 'jsonwebtoken';
import ApiError from "../../core/models/error/ApiError.js";
// ────────────────────────────────────────────────────────────────────────────────

class Auth extends ControllerService {
    isAuth = (req, res, next) => {
        try {
            const authorization = req.get('authorization');

            if (!authorization) return this.response({
                res,
                status: 403
            });

            const token = authorization.includes('Bearer ') ? authorization.split(' ')[1] : authorization;

            req.user = {
                ...new JWTModel(jwt.verify(token, process.env.JWT_SECRET))
            };

            return next();
        } catch (error) {
            if (error.message === 'jwt expired') return this.response({
                res,
                status: 403
            });
            return next(new ApiError(error.message));
        }
    }
}

export default Auth;