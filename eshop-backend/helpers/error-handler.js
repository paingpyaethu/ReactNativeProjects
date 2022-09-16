function errorHandler(err, req, res, next) {
  // JWT Authentication Error
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ message: "User is not authorized" });
  }

  // ValidationError
  if (err.name === "ValidationError") {
    return res.status(401).json({ message: err });
  }

  //Server Error
  return res.status(500).json(err);
}

module.exports = errorHandler;
