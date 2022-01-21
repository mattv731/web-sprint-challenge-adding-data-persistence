// build your `Resource` model here
const db = require('../../data/dbConfig')

function find() {
    return db('resources')
}

async function insert(resource) {
    const [resource_id] = await db('resources').insert(resource)
    return find().where({ resource_id}).first()
}

module.exports = {
    insert,
    find
}