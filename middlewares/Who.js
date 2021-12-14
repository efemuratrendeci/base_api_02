//
//* ─── IMPORTS ───────────────────────────────────────────────────────────────────
//
import ControllerService from '../../core/services/ControllerService.js';
import ApiError from '../../core/models/error/ApiError.js';
// ────────────────────────────────────────────────────────────────────────────────

class Who extends ControllerService {
    isItMe = (req, res, next) => {
        try {
            if (req.user._id === req.params._id) return next();

            return this.response({
                res,
                status: 403
            });
        } catch (error) {
            return next(new ApiError(error.message));
        }
    }
}

export default Who;