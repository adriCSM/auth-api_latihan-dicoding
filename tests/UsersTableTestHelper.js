/* istanbul ignore file */
const pool = require('../src/Infrastuctures/database/postgres/pool');

const UsersTableTestHelper = {
  async addUser({
    id = 'user-123',
    username = 'adri',
    password = 'mangidi7',
    fullname = 'adri candra saputra mangidi',
  }) {
    const query = {
      text: 'INSERT INTO users VALUES ($1,$2,$3,$4)',
      values: [id, username, password, fullname],
    };

    await pool.query(query);
  },

  async findUsersById(id) {
    const query = {
      text: 'SELECT users WHERE id=$1',
      value: [id],
    };

    const result = await pool.query(query);
    return result.rows;
  },

  async cleanTable() {
    await pool.query('TRUNCATE TABLE users');
  },
};

module.exports = UsersTableTestHelper;