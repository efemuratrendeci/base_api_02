//
//* ─── IMPORTS ───────────────────────────────────────────────────────────────────
//
import ControllerService from '../core/services/ControllerService.js';
import RequestRequirements from '../models/api/RequestRequirements.js';

import ApiError from '../core/models/error/ApiError.js';
// ────────────────────────────────────────────────────────────────────────────────

class Requirements extends ControllerService {
    payloadValidator = (req, res, next) => {
        try {
            const keys = RequestRequirements[`${req.method}-${req.originalUrl.split(process.env.BASE_ROUTE.toString())[1]}`];

            if (!keys) return next();

            let result = false,
                missing_fields = [];

            for (let index = 0; index < keys.length; index++) {
                if (!Object.keys(req.body).some(x => x === keys[index])) {
                    result = true;
                    missing_fields.push(keys[index].toString());
                }
            }

            if (result) return this.response({
                res,
                status: 406,
                special_message: {
                    'tr': `Beklenen alanlar : ${missing_fields.join(', ')}`,
                    'en': `Missing fields : ${missing_fields.join(', ')}`
                }
            })

            return next();
        } catch (error) {
            return next(new ApiError(error.message));
        }
    }
}

export default Requirements;