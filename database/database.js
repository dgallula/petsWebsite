const database = {
    cats: [
        { id: 1, name: 'Mitsi', age: 3, color: 'white', ownerId: 3 },
        { id: 2, name: 'Kitsi', age: 1, color: 'black', ownerId: 2 },
        { id: 3, name: 'Pitsi', age: 3.4, color: 'Gingi', ownerId: 3 }
    ],
    owners: [
        { id: 1, name: 'Avi', age: 31, phone: '+972 548554869' },
        { id: 2, name: 'Moshe', age: 13, phone: '+972 567554869' },
        { id: 3, name: 'Sara', age: 45, phone: '+972 548554869' },
        { id: 4, name: 'David', age: 23, phone: '+972 545554869' }
    ],
    dogs: [
        { id: 1, name: 'Mica', age: 1.8, breed: 'Haski', ownerId: 1 },
        { id: 2, name: 'Asia', age: 3, breed: 'Doberman', ownerId: 1 },
        { id: 3, name: 'Mica', age: 8, breed: 'Garman', ownerId: 3 },
        { id: 4, name: 'Kao', age: 3, breed: 'Haski', ownerId: 4 },
        { id: 5, name: 'Mica', age: 9, breed: 'Pitbol', ownerId: null },
        { id: 6, name: 'Mica', age: 9, breed: 'Pitbol', ownerId: 1 },
        { id: 7, name: 'Mica', age: 9, breed: 'Pitbol', ownerId: 1 }
    ]
}

export default database