import { before, after, afterEach } from 'node:test';
import { server } from './mocks/server';

before(() => server.listen());
afterEach(() => server.resetHandlers());
after(() => server.close());

console.log("Setup listeners for mocking requests");