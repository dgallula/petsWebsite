import dogsDal from "../data-access-layer/dogs-dal.js"

const getAll = () => {
    return dogsDal.getAll()
}

const getById = id => {
    let dogs = dogsDal.getAll()
    let requestedDogs = dogs.find(dogs => dogs.id === id)

    return requestedDogs ?? {}
}

const addDog = newDog => {
    const dogs = dogsDal.getAll()
    const lastId = dogs[dogs.length - 1].id

    const preperedDogsObj = {
        id: lastId + 1,
        ...newDog
    }

    dogsDal.addDog(preperedDogsObj)

    return preperedDogsObj
}

const deleteById = id => {
    let dogs = dogsDal.getAll()
    let filteredList = dogs.filter(dogs => dogs.id !== id)

    dogsDal.resetAll(filteredList)
}

export default {
    getAll,
    getById,
    addDog,
    deleteById
} 