/**
 * Global Error Handling Middleware
 * Ye middleware tab trigger hota hai jab kisi route handler mein next(error) call hota hai.
 */
const errorHandler = (err, req, res, next) => {
    // Agar status code pehle se set nahi hai toh 500 (Server Error) use karein
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // 1. Mongoose Bad ObjectId Error (Agar ID galat format mein ho)
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404;
        message = 'Resource not found: Invalid ID format';
    }

    // 2. Mongoose Duplicate Key Error (Unique field error)
    if (err.code === 11000) {
        statusCode = 400;
        message = 'Duplicate field value entered';
    }

    // 3. Mongoose Validation Error (Empty fields or wrong data)
    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map((val) => val.message);
        statusCode = 400;
        message = messages.join(', ');
    }

    res.status(statusCode).json({
        success: false,
        message: message,
        // Stack trace sirf development mode mein dikhayenge, production mein nahi
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = { errorHandler };