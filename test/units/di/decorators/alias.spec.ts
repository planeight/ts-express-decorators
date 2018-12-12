import {Alias} from "../../../../packages/common/src/di/decorators/alias";
import {expect} from "../../../tools";
import {Service} from "../../../../packages/common/src/di/decorators/service";
import {inject} from "@tsed/testing";

describe("@Alias()", () => {
  @Service()
  class Test1 {}

  @Alias(Test1)
  class Test2 {}

  it("should return the service", inject([Test1, Test2], (test1: any, test2: any) => {
    expect(test1).to.equal(test2);
    expect(test1).to.be.an.instanceOf(Test1);
    expect(test2).to.be.an.instanceOf(Test1);
  }));
});
