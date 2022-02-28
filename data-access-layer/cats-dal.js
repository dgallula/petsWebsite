import database from "../database/database.js";


const getAll = () => {
    return database.cats
}

const resetAll = newCatsList => {
    database.cats = newCatsList
}

const addCat = newCat => {
    database.cats.push(newCat)
}

export default {
    getAll,
    resetAll,
    addCat
}