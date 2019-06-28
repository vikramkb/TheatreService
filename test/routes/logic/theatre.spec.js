import {assert} from 'chai';
import Theatre from '../../../src/routes/logic/theatre';
import sinon from 'sinon';
import TheatreDb from '../../../src/db/theatre-db';

describe('theatre', () => {
  let sandbox;
  beforeEach("theatre", () => {
    sandbox = sinon.sandbox.create();
  });

  afterEach("theatre", () => {
    sandbox.restore();
  });

  describe('add theatre', () => {
    it('should add the theatre resource', () => {
      const theatreDb = new TheatreDb();
      sandbox.stub(TheatreDb, "getInstance").returns(theatreDb);
      let theatre = new Theatre();
      let req = {};
      req.body = {
        key: "t1",
        name: 'theatre 1',
        address: 'some address',
        contact: 'contact'
      };
      let statusCode = 0;
      let res = {
        send: (code) => {
          statusCode = code;
        }
      };
      const theatreDbMock = sandbox.mock(theatreDb).expects("add").withExactArgs(req.body);
      theatre.add(req, res);
      assert.equal(201, statusCode);
      theatreDbMock.verify();
    });
  });

  describe('get theatre', () => {
    it("should get the theatre", () => {
      const theatreDb = new TheatreDb();
      sandbox.stub(TheatreDb, "getInstance").returns(theatreDb);

      const theatre = new Theatre();
      const req = {
        params : {
          id : 1
        }
      };
      let responseCode = 0;
      let body = {};
      const res = {
        send: (code, b) => {
          responseCode = code;
          body = b;
        }
      };
      const t1 = {
        key: "t1",
        name: 'theatre 1',
        address: 'some address',
        contact: 'contact'
      };
      sandbox.stub(theatreDb, "get").withArgs(req.params.id).returns(t1);
      theatre.get(req, res);
      assert.equal(200, responseCode);
      assert.deepEqual(t1, body);
    });
  });
});