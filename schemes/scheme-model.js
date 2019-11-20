const db = require('../data/dbConfig')


module.exports = {
    find, findById, findSteps,add, update, remove, addStep
}
function find() {
    return db('schemes')
}
function findById(id) {
    return db('schemes').where({ id }).first()
}
function findSteps(id){
    const query = db('steps as step').join('schemes as scheme', 'scheme.id', 'step.scheme_id')
    .select('step.id','scheme.scheme_name','step.step_number', 'step.instructions' )
    return query.where('scheme.id',id)
}
function add(scheme){
    return db('schemes').insert(scheme)
}
function update(changes, id){
    return db('schemes').where({id}).update(changes)
}
function remove(id){
    return db('schemes').where({id}).del()
}

function addStep(step, scheme_id){
    return db('steps').insert(step)
}
//{ id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'},