export const GET = async (request) => {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('name');

    return new Response(`query is: ${query}`, { status: 200 })
}