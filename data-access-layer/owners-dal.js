import database from "../database/database.js";

const getAll = () => {
    return database.owners
}

const resetAll = newOwnersList => {
    database.owners = newOwnersList
}

const addOwner = newOwner => {
    database.owners.push(newOwner)
}

const getById = id => {
    let owners = getAll()
    let requestedOwners = owners.find(owners => owners.id === id)

    return requestedOwners ?? {}
}

export default {
    getAll,
    resetAll,
    addOwner,
    getById
}