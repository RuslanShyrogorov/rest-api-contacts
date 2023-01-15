function handleMongooseError(error, data, next) {
  const { code, name } = error;
  error.status = name === "" && code === 11000 ? 409 : 400;
  next();
}

module.exports = handleMongooseError;
