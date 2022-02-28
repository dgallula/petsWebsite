import express from "express";
import dogsBL from "../business-logic/dogs-bl.js";

const router = express.Router()
const baseUrl = '/api'

router.get(`${baseUrl}/dogs`, (req, res) => {
    let result = dogsBL.getAll()
    res.send(result)
})

router.get(`${baseUrl}/dogs/:id`, (req, res) => {
    let id = +req.params.id

    let result = dogsBL.getById(id)
    res.send(result)
})

router.post(`${baseUrl}/dogs`, (req, res) => {
    let newDog = req.body

    let result = dogsBL.addDog(newDog)
    res.send(result)
})

router.delete(`${baseUrl}/dogs/:id`, (req, res) => {
    let id = +req.params.id

    dogsBL.deleteById(id)
    res.send()
})

router.get(`${baseUrl}/dogs/ownerById/:id`, (req, res) => {
    let id = +req.params.id

    let requestedOwnerObj = dogsBL.getOwnerDetailsById(id)
    res.send(requestedOwnerObj)
})

export {
    router
}