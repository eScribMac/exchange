import { Drash } from "./deps.ts";
import HomeResource from "./resources/home_resource.ts";
import SecurityResource from "./resources/security_resource.ts";

export const server = new Drash.Http.Server({
  response_output: "application/json",
  logger: new Drash.CoreLoggers.ConsoleLogger({
    enabled: false,
    level: "debug",
  }),
  resources: [HomeResource, SecurityResource],
});
