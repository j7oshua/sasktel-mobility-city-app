/**
 * A custom error class that gets used to throw errors when needed by the server.
 */
class CustomApiError extends Error {
    constructor(message) {
        super(message);
    }
};

export default CustomApiError;