const logger = (req, res, next) => {
    console.log("Method: " + req.method + " , url: " + req.originalUrl)

    next()
}

export { logger }