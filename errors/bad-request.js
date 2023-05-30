import { StatusCodes } from 'http-status-codes'
import CustomApiError from './custom-api.js'

/**
 * This error class gets thrown when a bad request is made. For example, when a department does not exist
 * and it needs to be for a phone mappng to occur.
 */
class BadRequestError extends CustomApiError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

export default BadRequestError;