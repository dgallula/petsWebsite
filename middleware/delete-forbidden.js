const deleteForbidden = (req, res, next) => {
    if (req.method === "DELETE") {
        res.status(403).send("Delete is forbidden!")
    }

    next()
}

export { deleteForbidden }