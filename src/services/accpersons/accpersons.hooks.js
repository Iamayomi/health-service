const { authenticate } = require('@feathersjs/authentication').hooks;

const addnhis = require('../../hooks/addnhis');



module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [  /* addnhis()  */ ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
