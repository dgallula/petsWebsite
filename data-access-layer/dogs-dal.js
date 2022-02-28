import database from "../database/database.js";


const getAll = () => {
    return database.dogs
}

const resetAll = newDogsList => {
    database.dogs = newDogsList
}

const addDog = newDog => {
    database.dogs.push(newDog)
}

export default {
    getAll,
    resetAll,
    addDog
}