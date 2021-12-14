//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//
import ControllerService from "../../core/services/ControllerService.js";
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

    isSupervisor = (req, res, next) => {
        try {
            if (!req.user.is_supervisor) return this.response({
                res,
                status: 403
            });

            return next();
        } catch (error) {
            return next(new ApiError(error.message));
        }
    }

    isMainUser = (req, res, next) => {
        try {
            if (!req.user.is_main_user) return this.response({
                res,
                status: 403
            });

            return next();
        } catch (error) {
            return next(new ApiError(error.message));
        }
    }

    isShopUser = (req, res, next) => {
        try {
            if (!req.user.is_shop_user) return this.response({
                res,
                status: 403
            });

            return next();
        } catch (error) {
            return next(new ApiError(error.message));
        }
    }

    isOMSUser = (req, res, next) => {
        try {
            if (!req.user.is_oms_user) return this.response({
                res,
                status: 403
            });

            return next();
        } catch (error) {
            return next(new ApiError(error.message));
        }
    }
}

export default Auth;