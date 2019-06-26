let db = {};

export default class TheatreDb {
  add(theatre){
    db[theatre.key] = theatre;
  }
  update(theatre){
    db[theatre.key] = theatre;
  }
  get(theatreKey){
    return db[theatreKey];
  }
  delete(theatreKey){
    delete db[theatreKey];
  }
  static getInstance() {
    return TheatreDb.instance;
  }
}

TheatreDb.instance = new TheatreDb();