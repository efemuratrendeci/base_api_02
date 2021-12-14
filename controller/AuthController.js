//
//* ─── IMPORTS ───────────────────────────────────────────────────────────────────
//
import ControllerService from '../core/services/ControllerService.js';
import JWTModel from '../models/api/JWTModel.js';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// ────────────────────────────────────────────────────────────────────────────────


class AuthController extends ControllerService {
    connect = async (req, res, next) => {
        try {
            const login_with = req.body.username ? { search_with: 'username', key: req.body.username } :
                req.body.email ? { search_with: 'email', key: req.body.email } : { search_with: 'gsm', key: req.body.gsm };
            const user_search_filter = {};

            if (!login_with.key) return this.response({
                res,
                status: 400,
                special_message: { 'tr': 'Beklenen anahtar değeri boştu', 'en': 'Expected key value has empty' }
            });

            user_search_filter[login_with.search_with] = login_with.key;

            //*Your logic
            const user = { _id: "1", firstname: "Efe Murat", lastname: "Rendeci", username: "Dev", code_looks_like: "await User.findOne(user_search_filter)" };

            if (!user) return this.response({
                res,
                status: 401
            });

            if (!await bcrypt.compare(req.body.password, user.password)) return this.response({ res, status: 401 })

            const token = jwt.sign({ ...new JWTModel(user) },
                process.env.JWT_SECRET, {
                expiresIn: '1h'
            });

            return this.response({
                res,
                content: {
                    user: new JWTModel(user),
                    jwt: token
                }
            });
        } catch (error) {
            return this.errorHandler(res, error.message, next);
        }
    }
}

export default AuthController;