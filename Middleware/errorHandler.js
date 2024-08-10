const { Console, error } = require("console");
const { stack } = require("../Routes/userRoutes");

// Error handling middleware
const errorHandler = (err, req, res, next) => {
    Console,error(error,stack);
    const statusCode = err.statusCode || 500;
    const message =err.message || 'Internal Server Error';
    res.status(statusCode).json({message});
    
};

module.exports = errorHandler;
