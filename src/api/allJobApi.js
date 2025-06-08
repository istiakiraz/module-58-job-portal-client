export const jobsPromise = (query) =>{
    return fetch(`http://localhost:3000/jobs?${query}`, {
        credentials: 'include'
    }).then(res=> res.json())
}