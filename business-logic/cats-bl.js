import catsDal from "../data-access-layer/cats-dal.js"

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

export default {
    getAll,
    getById,
    addCat
} 