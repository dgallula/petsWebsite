import dogsDal from "../data-access-layer/dogs-dal.js"
import ownersDal from "../data-access-layer/owners-dal.js"
import { isObjEmpty } from "../common/helper.js"

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

const getOwnerDetailsById = id => {
    let requestedOwnerObj = {}
    let requestedDog = getById(id)

    if (isObjEmpty(requestedDog) || !requestedDog.ownerId) {
        return {}
    }

    requestedOwnerObj = ownersDal.getById(requestedDog.ownerId)

    return requestedOwnerObj ?? {}
}

const getOwnerPhoneById = id => {
    let ownerObj = getOwnerDetailsById(id)

    return ownerObj.phone
}

const getOwnerWithMostDogs = () => {
    let dogs = dogsDal.getAll()
    let ownersCounter = {}
    let max = {
        counter: 0,
        ownerId: -1
    }

    for (let dog of dogs) {
        if (dog.ownerId) {
            if (ownersCounter[dog.ownerId.toString()]) {
                ownersCounter[dog.ownerId.toString()] += 1
            } else {
                ownersCounter[dog.ownerId.toString()] = 1
            }

            if (max.counter < ownersCounter[dog.ownerId.toString()]) {
                max.ownerId = dog.ownerId.toString()
                max.counter = ownersCounter[dog.ownerId.toString()]
            }
        }
    }

    let requestedOwnerObj = ownersDal.getById(+max.ownerId)

    return requestedOwnerObj
}

export default {
    getAll,
    getById,
    addDog,
    deleteById,
    getOwnerDetailsById,
    getOwnerPhoneById,
    getOwnerWithMostDogs
} 