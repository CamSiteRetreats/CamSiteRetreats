export async function onRequest(context) {
    const { request, env } = context;

    try {
        // Try fetching the requested asset
        let response = await env.ASSETS.fetch(request);

        // On 404, fallback to the SPA root URL
        if (response.status === 404) {
            const url = new URL(request.url);

            // Fetch /admin/ (not /admin/index.html to avoid 308 redirect)
            const rewriteUrl = new URL(url.origin + "/admin/");
            const indexResponse = await env.ASSETS.fetch(new Request(rewriteUrl, request));

            // Delete Location header if it exists
            const headers = new Headers(indexResponse.headers);
            headers.delete('Location');
            headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
            headers.set('Content-Type', 'text/html; charset=utf-8');

            return new Response(indexResponse.body, {
                status: 200,
                headers: headers
            });
        }

        return response;
    } catch (err) {
        return new Response('Error rendering SPA', { status: 500 });
    }
}
