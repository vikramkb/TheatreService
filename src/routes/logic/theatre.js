import TheatreDb from '../../db/theatre-db';
export default class Theatre {
  add(req, res, next) {
    TheatreDb.getInstance().add(req.body);
    res.send(201);
  }
  get(req, res, next){
    const theatre = TheatreDb.getInstance().get(req.params.id);
    res.send(200, theatre);
  }
}