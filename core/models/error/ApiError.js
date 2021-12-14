//*Custom Error for responding with base64 stack trace
class ApiError extends Error {
    constructor(
        message,
        stack
    ) {
        super(message, stack);
        this.error_message = message;
        this.stacktrace = Buffer.from(this.stack).toString('base64');
    }
}

export default ApiError;