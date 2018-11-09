import {BodyParams, Controller, Post, Required} from "@tsed/common";
import {Docs, Hidden} from "@tsed/swagger";
import {Client} from "../../models/Client";

@Controller("/clients")
@Hidden()
@Docs("hidden")
export class ClientsCtrl {
  @Post("/authorize")
  authorize(
    @Required()
    @BodyParams()
    client: Client
  ): Client {
    return client;
  }
}
