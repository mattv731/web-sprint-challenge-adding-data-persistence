// build your `Task` model here
const db = require('../../data/dbConfig')

function get() {
    const rows = db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')   
        return rows
}

async function insert(task) {
    const [task_id] = await db('tasks').insert(task)
    const tasked = db('tasks').where('task_id', task_id).first()
    return tasked
}

module.exports = {
    get,
    insert
}