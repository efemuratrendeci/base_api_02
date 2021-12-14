//
//* ─── IMPORTS ───────────────────────────────────────────────────────────────────
//
import ControllerService from '../core/services/ControllerService.js';
// ────────────────────────────────────────────────────────────────────────────────

class ErrorController extends ControllerService {
    getNotFound = async (req, res, next) => {
        return this.response({
            res,
            status: 404
        });
    }
    getSystemError = async (req, res, next, error) => {
        return this.response({
            res,
            status: 500,
            content: {
                error: error
            }
        });
    }
}

export default ErrorController;