const errorHandler = (err, req, res, next) => {
  // If response is already sent, delegate to default Express error handler
  if (res.headersSent) {
    return next(err);
  }

  let error = { ...err };
  error.message = err.message;

  // Log error
  console.error('Error:', err);

  // Default error response
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';

  try {
    res.status(statusCode).json({
      success: false,
      message: message,
      error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  } catch (jsonError) {
    console.error('Error sending JSON response:', jsonError);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = errorHandler;
