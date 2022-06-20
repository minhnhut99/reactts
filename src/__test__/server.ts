// import "@testing-library/jest-dom";
import { MockedRequest, rest, RestHandler } from "msw";
import { setupServer, SetupServerApi } from "msw/node";

type rt = typeof rest;

export const setupMockServer = (
  requests: (rest: rt) => RestHandler<MockedRequest>[]
): SetupServerApi => {
  const server = setupServer(...requests(rest));

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  return server;
};

export { rest } from "msw";
