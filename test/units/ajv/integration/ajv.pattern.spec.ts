import {ExpressApplication} from "@tsed/common/src/mvc/decorators/class/expressApplication";
import {bootstrap, inject} from "@tsed/testing";
import * as SuperTest from "supertest";
import {expect} from "../../../tools";
import {FakeServer} from "./../../../integration/FakeServer";

describe("Ajv Pattern", () => {
  before(bootstrap(FakeServer));
  before(
    inject([ExpressApplication], (expressApplication: ExpressApplication) => {
      this.app = SuperTest(expressApplication);
    })
  );

  describe("GET /rest/clients/authorize", () => {
    it("should accept the client model and return a response", done => {
      this.app
        .post("/rest/clients/authorize")
        .send({
          client_id: "01020304aa"
        })
        .expect(200)
        .end((err: any, response: any) => {
          if (err) {
            return done(err);
          }

          expect(response.text).to.be.a("string");

          done();
        });
    });
  });
});
