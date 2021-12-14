//
//* ─── IMPORTS ───────────────────────────────────────────────────────────────────
//    
import ControllerService from "../core/services/ControllerService.js";
// ────────────────────────────────────────────────────────────────────────────────

class ApiOptions extends ControllerService {
    isHttpStatusDisabled = (req, res, next) => {
        try {
            res.isHttpStatusDisabled = req.query['httpStatusDisabled'] === 'true' ? true : false;
            res.isHttpStatusDisabled = req.get('httpStatusDisabled') === 'true' ? true : false;

            return next();
        } catch (error) {
            return this.errorHandler(res, error.message, next);
        }
    }
}

export default ApiOptions;
