const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
dotenv.config();



let database;

const initDb = callback => {
  if (database) {
    console.log('Database is already initialized!');
    return callback(null, database);
  }
  MongoClient.connect(process.env.MongoDb_URI)
    .then(client => {
      database = client.db(process.env.MongoDb_Name);
      console.log('Database initialized!');
      return callback(null, database);
    })
    .catch(err => callback(err));
};

const getDatabase = () => {
  if (!database) {
    throw new Error('Database not initialized!');
  }
  return database;
};

module.exports = {
  initDb,
  getDatabase,
};
