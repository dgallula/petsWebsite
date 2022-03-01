import catsDal from "../data-access-layer/cats-dal.js"
import { isObjEmpty } from "../common/helper.js"
import ownersDal from "../data-access-layer/owners-dal.js"

const getAll = () => {
    return catsDal.getAll()
}

const getById = id => {
    let cats = catsDal.getAll()
    let requestedCats = cats.find(cats => cats.id === id)

    return requestedCats ?? {}
}

const addCat = newCat => {
    const cats = catsDal.getAll()
    const lastId = cats[cats.length - 1].id

    const preperedCatsObj = {
        id: lastId + 1,
        ...newCat
    }

    catsDal.addCat(preperedCatsObj)

    return preperedCatsObj
}

const getOwnerDetailsById = id => {
    let requestedOwnerObj = {}
    let requestedCat = getById(id)

    if (isObjEmpty(requestedCat) || !requestedCat.ownerId) {
        return {}
    }

    requestedOwnerObj = ownersDal.getById(requestedCat.ownerId)

    return requestedOwnerObj ?? {}
}


const getOwnerPhoneById = id => {
    let ownerObj = getOwnerDetailsById(id)

    return ownerObj.phone
}

export default {
    getAll,
    getById,
    addCat,
    getOwnerDetailsById,
    getOwnerPhoneById
} 