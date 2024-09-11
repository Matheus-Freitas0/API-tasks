function errorMiddleware(err, req, res, next) {
    console.error(err.stack);

    res.status(500).json({
        error: 'Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.',
        details: err.message
    });
}

module.exports = errorMiddleware;
