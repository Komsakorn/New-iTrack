/**
 * DO NOT edit this file.
 * Copy this file to src/config.js which is ignored by git.
 * Then edit that file.
 *
 * Note on mongodb uri
 * We can pass uri which contains everything (user, password, database).
 * Such uri would look like this 'mongodb+srv://username:password@project.yourid.mongodb.net/database?retryWrites=true&w=majority'
 * But it's much harder to read and edit
 * I suggest using mongoUri as below and pass other things as options
 **/

 module.exports = {
    mongoUri: 'mongodb+srv://itrack.7nr0e.mongodb.net',
    mongoOptions: {
      user: 'itrackadmin',
      pass: 'adminitrack21',
      dbName: 'itrack-records',
      retryWrites: true,
      w: 'majority',
    },
  };