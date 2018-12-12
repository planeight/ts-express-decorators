import {Type} from "@tsed/core";
import {GlobalProviders} from "../registries/ProviderRegistry";
import {Provider} from "../class/Provider";

/**
 * The decorators `@Alias()` declare another Symbol which can be used to inject a provider to another provider.
 *
 * @returns {Function}
 * @decorator
 */
export function Alias(token1: Type<any>): Function {
  return (token2: any) => {
    const provider: Provider<any> = GlobalProviders.get(token1)!;
    provider.alias = true;
    GlobalProviders.set(token2, provider);
  };
}
