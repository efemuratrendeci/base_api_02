//
//* ─── IMPORTS ───────────────────────────────────────────────────────────────────
//
import HTTPStatusMessages from '../messages/HTTPStatusMessages.js';
import ApiError from '../models/error/ApiError.js';
import WebRequestService from './WebRequestService.js';
// ────────────────────────────────────────────────────────────────────────────────

//* This is base class for all controllers. With this base class returning response is more easy. Api language can change easily.
class ControllerService extends WebRequestService {
    response = ({
        res,
        status = 200,
        content = {},
        special_message,
        special_headers
    }) => {
        if (!res) throw new Error('ControllerService error : response needed');
        if (special_message && !special_message[process.env.LANGUAGE]) throw new Error('ControllerService error : special_message.language needed');

        if (special_headers instanceof Map) {
            special_headers.forEach((value, key) => {
                res.setHeader(key, value);
            })
        }

        return res.status(status).json({
            status,
            message: HTTPStatusMessages.Message[status][process.env.LANGUAGE],
            special_message: special_message ? special_message[process.env.LANGUAGE] : '',
            content: content
        });
    }

    errorHandler = (res, message, next) => {
        if (message.includes('E11000'))
            return this.response({
                res,
                status: 422,
                special_message: {
                    'tr': 'Kayıt daha önce oluşturulmuş',
                    'en': 'Record has already been created'
                }
            });

        else if (message.includes('ENOTFOUND'))
            return this.response({
                res,
                status: 502,
                special_message: {
                    'tr': 'Harici sisteme ulaşılamadı',
                    'en': 'Cannot reach external system'
                }
            });

        //*Known Error Can Be Handled Here.

        return next(new ApiError(message));
    }
}

export default ControllerService;