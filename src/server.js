const mongodb = global.exports["mongodb"];

console.log("first-nui startatoo!!")

mongodb.insertOne({
    collection: "users",
    document: {
        name: "marioloide",
        lastname: "santino"
    }
}, (success, insertedCount, insertedIds) => {
    console.log(success, insertedCount, insertedIds)
})