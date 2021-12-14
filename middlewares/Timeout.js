class Timeout {
    delay = (req, res, next) => {
        try {
            const useTimeout = Number(req.query.timeout);

            if (useTimeout) return setTimeout(() => {
                return next();
            }, useTimeout);

            return next();
        } catch (error) {
            return next(new CarbonError(error.message));
        }
    }
}

export default Timeout;