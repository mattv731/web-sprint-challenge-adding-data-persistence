// build your `Task` model here
const db = require('../../data/dbConfig')

async function get() {
    const rows = await db('projects as p')
        .join('tasks as t', 't.project_id', 'p.project_id')
        .select('p.project_description', 'p.project_name')
    
        return rows
}

async function insert(task) {
    const [task_id] = await db('tasks').insert(task)
    return get().where({ task_id }).first()
}

module.exports = {
    get,
    insert
}