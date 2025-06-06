export const jobsPromise = (query) =>{
    return fetch(`http://localhost:3000/jobs?${query}`).then(res=> res.json())
}