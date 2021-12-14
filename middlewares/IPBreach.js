//
//* ─── IMPORTS ───────────────────────────────────────────────────────────────────
//    
import ControllerService from "../core/services/ControllerService.js";
// ────────────────────────────────────────────────────────────────────────────────

class IPBreach extends ControllerService {
    checkTooManyRequest = (req, res, next) => {
        try {
            const request_date = new Date();
            const second = 5, request_number = 5;
            const ip_address = req.socket.remoteAddress.split(':')[3];
            const ip_object = IPMaps.IPAdresses.get(ip_address);

            if (!ip_object) {
                IPMaps.IPAdresses.set(ip_address, { count: 1, date: request_date });
                return next();
            }

            let difference = Math.abs((ip_object.date - request_date) / 1000);

            if (ip_object && difference >= second) {
                IPMaps.IPAdresses.set(ip_address, { count: 1, date: request_date });
                return next();
            }


            if (difference < second && ip_object.count < request_number) {
                IPMaps.IPAdresses.set(ip_address, { count: ip_object.count++, ...ip_object });
                return next();
            }

            return this.response({
                res,
                status: 429,
                specialHeaders: new Map().set('Retry-After', second)
            })

        } catch (error) {
            return this.errorHandler(res, error.message, next);
        }
    }
}

class IPMaps {
    static IPAdresses = new Map();
}

export default IPBreach;
