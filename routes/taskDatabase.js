const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://aneeshbharadwajka:15226@localhost:5432/aneeshbharadwajka')
const stat = false
let operation = {
  add: function (description) {
    const addQuery = `INSERT INTO tasks (description,status) VALUES ('${description}','${stat}')`
    var addNewTask = sequelize.query(addQuery)
    return addNewTask
  },
  readtable: function () {
    const readQuery = `SELECT id,description,status FROM tasks`
    var readTask = sequelize.query(readQuery)
    // arrayOfId = readTask.map((data) => {
    //   return data[0].id
    // })
    return readTask
  },
  update: function (id, description, status) {
    if (!status) {
      const updateQuery = `UPDATE tasks SET description = '${description}'  WHERE id = '${id}'`
      let updateTask = sequelize.query(updateQuery)
      return updateTask
    } else if (!description) {
      const updateQuery = `UPDATE tasks SET status = '${status}'  WHERE id = '${id}'`
      let updateTask = sequelize.query(updateQuery)
      return updateTask
    }
    const updateQuery = `UPDATE tasks SET description = '${description}',status = '${status}'  WHERE id = '${id}'`
    let updateTask = sequelize.query(updateQuery)
    return updateTask
  },
  delete: function (id) {
    const deleteQuery = `DELETE FROM tasks where id = ${id}`
    var deleteTask = sequelize.query(deleteQuery)
    return deleteTask
  }
}

module.exports = operation

