import { setupServer } from 'msw/node';
import { handlers } from './handlers';

console.log("Setup server");
export const server = setupServer(...handlers);

server.events.on('request:start', ({ request }) => {
    console.log('Outgoing:', request.method, request.url)
});