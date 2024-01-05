export const GET = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { 
        next: { revalidate: 10 },
        method: 'GET', 
        headers: { 
            "Content-Type": "application/json"
        } 
    });
    const posts = await res.json();
    
    return Response.json({ posts })
}