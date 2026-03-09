import { onRequest as paymentOnRequest } from './payment';

export async function onRequest(context) {
    // Force action=webhook for this endpoint
    const url = new URL(context.request.url);
    url.searchParams.set('action', 'webhook');

    // Create a new context with the updated request
    const newContext = {
        ...context,
        request: new Request(url.toString(), context.request)
    };

    return paymentOnRequest(newContext);
}
