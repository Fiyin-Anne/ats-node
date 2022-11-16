require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEVUN || "root",
    password: process.env.DEVPW || null,
    database: process.env.DEVDB || "database_test",
    host: process.env.DEVHOST || "127.0.0.1",
    dialect: 'postgres',
  },
  test: {
    username: process.env.TESTUN || "root",
    password: process.env.TESTPW ||null,
    database: process.env.TESTDB ||"database_test",
    host: process.env.TESTHOST ||"127.0.0.1",
    dialect: 'postgres',
  },
  production: {
    username: process.env.PRODUN || "root",
    password: process.env.PRODPW || null,
    database: process.env.PRODBD || "database_test",
    host: process.env.PRODHOST || "127.0.0.1",
    dialect: 'postgres',
  },
}