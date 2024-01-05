export const GET = async (request, { params }) => {
    const user = params.user;

    return new Response(`hello: new api route ${user}`);
}