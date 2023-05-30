import { StatusCodes } from 'http-status-codes';
import CustomApiError from './custom-api.js';

/**
 * This custom error gets thrown when a resource is not found.
 */
class NotFoundError extends CustomApiError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
};

export default NotFoundError;