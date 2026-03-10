export async function onRequest(context) {
    const { request, env } = context;

    try {
        // Try fetching the existing asset first
        let response = await env.ASSETS.fetch(request);

        // If the path doesn't exist (404), fallback to the SPA root
        if (response.status === 404) {
            const url = new URL(request.url);

            // Re-fetch the admin index.html asset
            const rewriteUrl = new URL(url.origin + "/admin/index.html");
            const indexResponse = await env.ASSETS.fetch(new Request(rewriteUrl, request));

            // Return it with a 200 OK status
            return new Response(indexResponse.body, {
                status: 200,
                headers: {
                    ...Object.fromEntries(indexResponse.headers),
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Content-Type': 'text/html; charset=utf-8'
                }
            });
        }

        return response;
    } catch (err) {
        return new Response('Error rendering SPA', { status: 500 });
    }
}
