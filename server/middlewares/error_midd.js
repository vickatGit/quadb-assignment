const errorHandler = (err, req, res, next) => {
  console.log(" inside of error handler" + JSON.stringify(req.JSON));
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case 500:
      res.json({
        code: 500,
        title: err.message,
      });
  }
};

module.exports = errorHandler
