/* tslint:disable: variable-name */
import {JsonProperty, Pattern, Required} from "@tsed/common";

export class Client {
  @JsonProperty()
  @Required()
  @Pattern(/[a-z0-9]{10}/)
  public client_id!: string;

  @JsonProperty()
  public client_secret!: string;
}
