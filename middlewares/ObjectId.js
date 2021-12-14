//
//* ─── IMPORTS ───────────────────────────────────────────────────────────────────
//
import ControllerService from "../core/services/ControllerService.js";
import Mongoose from 'mongoose';
// ────────────────────────────────────────────────────────────────────────────────

class ObjectIdentifier extends ControllerService {
    paramValidate = (req, res, next) => {
        try {
            if (Mongoose.Types.ObjectId.isValid(req.params.id)) return next();

            throw new Error(`CE00002 : ${req.params.id} seems not a valid user identifier`);
        } catch (error) {
            return this.errorHandler(res, error.message, next);
        }
    }
}

export default ObjectIdentifier;